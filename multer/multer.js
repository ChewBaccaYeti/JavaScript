const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const multer = require('multer');
const uploadDir = path.join(process.cwd(), 'uploads');
const storeImage = path.join(process.cwd(), 'images');

// Двигатель дискового пространства
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 1048576,
    },
});

const upload = multer({
    storage: storage,
});

app.post('/upload', upload.single('picture'), async (req, res, next) => {
    const { description } = req.body;
    const { path: temporaryName, originalname } = req.file;
    const fileName = path.join(storeImage, originalname);
    try {
        await fs.rename(temporaryName, fileName);
    } catch (err) {
        await fs.unlink(temporaryName);
        return next(err);
    }
    res.json({ description, message: 'Файл успішно завантажено', status: 200 });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ message: err.message, status: err.status });
});

const isAccessible = path => {
    return fs
        .access(path)
        .then(() => true)
        .catch(() => false);
};

const createFolderIsNotExist = async folder => {
    if (!(await isAccessible(folder))) {
        await fs.mkdir(folder);
    }
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    createFolderIsNotExist(uploadDir);
    createFolderIsNotExist(storeImage);
    console.log(`Server running. Use on port:${PORT}`);
});

const killSignal = () => {
    console.log('Kill signal.');
    setTimeout(() => {
        console.error('Forcing kill signal.');
        process.exit(1); // Тут return не нужен
    }, 5000);
};

process.once('SIGTERM', killSignal);
process.once('SIGINT', killSignal);

// Посылаем сигнал текущему процессу
process.kill(process.pid, 'SIGINT');

process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Gracefully shutting down...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Gracefully shutting down...');
    process.exit(0);
});

process.on('SIGHUP', () => {
    console.log('Received SIGHUP. Reloading configuration...');
    // код для перезагрузки конфигурации
});
