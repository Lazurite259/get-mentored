const nodemailer = require('nodemailer')

const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  })
  const message = {
    from: `GetMentored <${process.env.EMAIL_ADDRESS}>`,
    to: option.email,
    subject: 'Reset GetMentored.com Password',
    text: option.message
  }
  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

module.exports = sendEmail
