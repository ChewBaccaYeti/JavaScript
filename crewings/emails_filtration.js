const fs = require('fs');

const INPUT_FILE = 'ua_email.txt';
const OUTPUT_FILE = 'ua_emails_unique.txt';

const removeDuplicates = () => {
    try {
        // read file content
        const fileContent = fs.readFileSync(INPUT_FILE, 'utf-8')

        // separating rows and deleting same strings
        const lines = fileContent.split('\n').filter(line => line.trim() !== '')

        // using Set for auto deletion for duplicates
        const uniqueLines = Array.from(new Set(lines));

        // writing new, unique lines in new file
        fs.writeFileSync(OUTPUT_FILE, uniqueLines.join('\n'), 'utf-8')

        console.log(`Файл без дубликатов сохранён как ${OUTPUT_FILE}`)
        console.log(`Удалено дубликатов: ${lines.length - uniqueLines.length}`)
    } catch (error) {
        console.error('Ошибка при обработке файла:', error.message);
    }
};

removeDuplicates();