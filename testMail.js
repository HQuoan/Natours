const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'huyvodtan@gmail.com',
//         pass: 'Huyvo0703@',
//     },
//     tls: {
//         rejectUnauthorized: false,
//     },
// });

const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '80ac16eed3a5ef',
        pass: 'c317acce4da76f',
    },
});

const mailOptions = {
    from: 'huyvodtan@gmail.com',
    to: 'vuongvodtan@gmail.com',
    subject: 'send mail with node',
    text: `chao vuong nhe`,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Email sent: ${info.response}`);
    }
});
