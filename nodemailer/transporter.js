const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars'); // Новый синтаксис для express-handlebars
const path = require('path');

const app = express();
require('dotenv').config();

const PORT = 3000;

// View engine setup middleware
app.engine(
    'handlebars',
    engine({
        layoutsDir: path.join(__dirname, 'views/layouts'), // Путь к макетам
        defaultLayout: 'main', // Имя основного макета
    }),
);
app.set('view engine', 'handlebars');

// Static folder middleware
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    };

    const transporter = nodemailer.createTransport(config);

    const emailOptions = {
        from: 'jangofrett9982@gmail.com',
        to: 'jangofrett9982@gmail.com', // list of receivers
        subject: 'Nodemailer test',
        text: req.body.message,
        html: output, // html body
    };

    transporter
        .sendMail(emailOptions)
        .then(info => {
            console.log('Email sent successfully!', info);
            console.log('Message ID:', info.messageId); // Идентификатор письма
            console.log('Preview URL:', nodemailer.getTestMessageUrl(info)); // URL для просмотра

            res.render('contact', { msg: 'Email has been sent' });
        })
        .catch(err => console.log(err));
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
