const puppeteer = require('puppeteer');
const fs = require('fs');
const tesseract = require('tesseract.js');

const BASE_URL = 'https://crewell.net/en/companies/?action=search&country%5B%5D=1';
const SELECTOR_COMPANY_LINK = '.btn-info';
const SELECTOR_TABLE_ROWS = 'table tbody tr';
const SELECTOR_PAGINATION = '.pagination li a[href]';
const OUTPUT_FILE = 'ua_email.txt';

const extractEmailFromImage = async (imgSrc) => {
    try {
        const { data: { text } } = await tesseract.recognize(imgSrc)
        return text.trim();
    } catch (error) {
        console.error('Error recognizing email image:', error.message)
        return 'Not Found';
    }
};

const extractFullEmail = async (emailElement) => {
    try {
        const emailParts = await emailElement.evaluate((node) => {
            const parts = []
            node.childNodes.forEach((child) => {
                if (child.nodeType === Node.TEXT_NODE) {
                    parts.push({ type: 'text', value: child.textContent.trim() })
                } else if (child.nodeName === 'IMG') {
                    parts.push({ type: 'image', src: child.src })
                }
            })
            return parts;
        })

        let fullEmail = '';
        for (const part of emailParts) {
            if (part.type === 'text') {
                fullEmail += part.value;
            } else if (part.type === 'image') {
                const recognizedText = await extractEmailFromImage(part.src)
                fullEmail += recognizedText
            }
        }
        return fullEmail.trim();
    } catch (error) {
        console.error('Error extracting full email:', error.message);
        return 'Not Found';
    }
};

const scrapeEmailsWithPagination = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    let allEmails = [];
    const visitedPages = new Set();

    try {
        // First page
        await page.goto(BASE_URL, { waitUntil: 'load', timeout: 0 })

        // Main pagination loop
        while (true) {
            const currentUrl = page.url()
            if (visitedPages.has(currentUrl)) break; // If page was visited - get out
            visitedPages.add(currentUrl) // Add unique page to the Set

            console.log(`Visiting page: ${currentUrl}`)

            // Collecting all companies links on current page
            const companyLinks = await page.$$eval(SELECTOR_COMPANY_LINK, links => links.map(link => ({ name: link.textContent.trim(), url: link.href })))
            // Getting through every company
            for (const company of companyLinks) {
                if (!company.url) continue;
                console.log(`Visiting company page: ${company.name} (${company.url})`)
                try {
                    await page.goto(company.url, { waitUntil: 'load', timeout: 0 })
                    // Scrapping all rows from table
                    const tableRows = await page.$$eval(SELECTOR_TABLE_ROWS, rows => rows.map(row => (row.textContent || '').trim()))
                    // Looking for string's index that includes "E-mail:"
                    const emailIndex = tableRows.findIndex(row => row.includes('E-mail:'))
                    let email = 'Not found'

                    if (emailIndex !== -1) {
                        const emailElement = await page.$(
                            `table tbody tr:nth-child(${emailIndex + 1}) td:nth-child(2)`
                        );
                        if (emailElement) {
                            email = await page.evaluate(el => el.textContent.trim(), emailElement)
                            email = await extractFullEmail(emailElement)
                        }
                    }

                    // Saving data
                    allEmails.push({ company: company.name, email })
                    // Go back to the pages list
                    await page.goBack({ waitUntil: 'load', timeout: 0 })
                } catch (error) {
                    console.error(error.message)
                }
            }
            // go to the next pagination page
            const nextPage = await page.$$eval(SELECTOR_PAGINATION, (paginationLinks, visitedArray) => {
                const visitedSet = new Set(visitedArray);
                for (const link of paginationLinks) {
                    const url = link.href
                    if (!visitedSet.has(url))
                        return link.href;
                }
                return null;
            }, Array.from(visitedPages))

            if (!nextPage) break;
            await page.goto(nextPage, { waitUntil: 'load', timeout: 0 })
        }
    } catch (error) {
        console.error('Error during scraping:', error)
    } finally {
        await browser.close()
    }

    const fileContent = allEmails.map(entry => `${entry.company}: ${entry.email}`).join('\n')
    fs.writeFileSync(OUTPUT_FILE, fileContent)
    console.log(`Emails saved to ${OUTPUT_FILE}`)

    console.table(allEmails)
};

scrapeEmailsWithPagination();