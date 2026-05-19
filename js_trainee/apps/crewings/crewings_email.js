const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'https://crewdata.com/crewings.php?lang=eng&country=Ukraine&mode=companies';
const SELECTOR_EMAIL = 'a[href^="mailto:"]'; // Селектор для email
const SELECTOR_PAGINATION = '.pagerBlock a.pageLink'; // Селектор для ссылок пагинации
const OUTPUT_FILE = 'emails.txt'; // Файл для сохранения результатов

const scrapeEmails = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const emails = new Set(); // Используем Set для хранения уникальных email

    try {
        // Идем на первую страницу
        await page.goto(BASE_URL, { waitUntil: 'load', timeout: 0 })

        // Извлекаем все ссылки пагинации
        const paginationLinks = await page.$$eval(SELECTOR_PAGINATION, links => links.map(link => link.href))

        // Проходим по всем страницам
        for (const link of paginationLinks) {
            console.log(`Scraping page: ${link}`)
            await page.goto(link, { waitUntil: 'load', timeout: 0 })

            // Извлекаем email с текущей страницы
            const pageEmails = await page.$$eval(SELECTOR_EMAIL, links => links.map(link => link.href.replace('mailto:', '').trim()))

            // Добавляем email в Set
            pageEmails.forEach(email => emails.add(email))
        }
    } catch (error) {
        console.error('Error during scraping:', error)
    } finally {
        await browser.close()
    }

    // Конвертируем Set в массив для дальнейшей обработки
    const emailArray = Array.from(emails);

    // Сохраняем email в файл
    fs.writeFileSync(OUTPUT_FILE, emailArray.join('\n'))
    console.log(`Emails saved to ${OUTPUT_FILE}`)

    // Выводим в консоль в виде таблицы
    const emailTable = emailArray.map((email, index) => ({ Index: index + 1, Email: email }))
    console.table(emailTable);
};

scrapeEmails();