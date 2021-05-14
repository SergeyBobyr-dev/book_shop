const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'verda.christiansen22@ethereal.email',
        pass: 'qxwyJ8qExKa6buDmPY'
    }
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer