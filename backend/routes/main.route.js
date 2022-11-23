const express = require('express')
const app = express()
const sendEmail = require('../sendEmail')
// route
app.post('/contact', async (req, res, next) => {
  try {
    const message = `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    await sendEmail({
      from_email: `Costumer Message <${process.env.SMTP_EMAIL}>`,
      to_email: process.env.SMTP_EMAIL,
      subject: `Message from ${req.body.name}`,
      message
    })
    await sendEmail({
      from_email: `GetMentored <${process.env.SMTP_EMAIL}>`,
      to_email: req.body.email,
      subject: 'Message Received',
      message: `We have received your message and will respond as soon as possible!\n${message}`
    })
    res.status(200).json({ success: true, message: 'Email sent' })
  } catch (error) {
    return res.status(500).json({ message: 'Email could not be sent', error })
  }
})
module.exports = app
