const sendEmail = require('../sendEmail')
const express = require('express')
const crypto = require('crypto')
const app = express()
const auth = require('../auth')
// model
const Mentee = require('../models/Mentee')
// route
app.get('/', async (req, res, next) => {
  const mentees = await Mentee.find({})
  try {
    res.send(mentees)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Register
app.post('/mentee-register', async (req, res) => {
  try {
    const isUser = await Mentee.find({ email: req.body.email })
    console.log(isUser)
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: 'Email already in use'
      })
    }
    const mentee = new Mentee({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password.password
    })
    const data = await mentee.save()
    const token = await mentee.generateAuthToken() // here it is calling the method that we created in the model
    res.status(201).json({ data, token })
  } catch (err) {
    res.status(400).json({ err })
  }
})
// Login
app.post('/mentee-login', async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const mentee = await Mentee.findByCredentials(email, password)
    if (!mentee) {
      return res.status(401).json({ message: 'Login failed! Check your email or password' })
    }
    const token = await mentee.generateAuthToken()
    res.status(201).json({ mentee, token })
  } catch (error) {
    res.status(400).json({ error })
  }
})
// Get profile
app.get('/mentee-profile/:id', auth, async (req, res) => {
  try {
    const mentee = await Mentee.findById(req.params.id)
    res.json(mentee)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Update profile
app.put('/mentee-update/:id', async (req, res) => {
  try {
    const mentee = await Mentee.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birth_date: req.body.birth_date,
      education_level: req.body.education_level,
      work_experience: req.body.work_experience,
      year_of_experience: req.body.year_of_experience,
      skills: req.body.skills,
      interested_industry: req.body.interested_industry,
      linkedin: req.body.linkedin
    })
    const token = await mentee.generateAuthToken()
    res.status(201).json({ mentee, token })
  } catch (error) {
    res.status(500).send(error)
  }
})
// Forgot password
app.post('/forgot-password', async (req, res, next) => {
  const mentee = await Mentee.findOne({ email: req.body.email })
  if (!mentee) {
    return res.status(404).json({ message: 'Email does not exist' })
  }
  const resetToken = mentee.getResetPasswordToken()
  await mentee.save({ validateBeforeSave: false })
  // Create reset url
  const resetUrl = `${process.env.BASE_URI}/mentee-reset-password/${resetToken}`
  const message = `You have requested the reset of a password. Click this link to reset your password: ${resetUrl}.`
  try {
    await sendEmail({
      from_email: `GetMentored <${process.env.SMTP_EMAIL}>`,
      to_email: mentee.email,
      subject: 'Reset GetMentored.com Password',
      message
    })
    res.status(200).json({ success: true, message: 'Email sent' })
  } catch (error) {
    mentee.reset_password_token = undefined
    mentee.reset_password_expire = undefined
    await mentee.save({ validateBeforeSave: false })
    return res.status(500).json({ message: 'Email could not be sent' })
  }
})
// Reset password
app.put('/reset-password/:resetToken', async (req, res, next) => {
  try {
    // Get hashed token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex')
    const mentee = await Mentee.findOne({
      reset_password_token: resetPasswordToken,
      reset_password_expire: { $gt: Date.now() }
    })
    if (!mentee) {
      res.status(400).json({ message: 'Invalid token' })
    }
    // Set new password
    mentee.password = req.body.password
    mentee.reset_password_token = undefined
    mentee.reset_password_expire = undefined
    await mentee.save()
    res.status(200).json({ mentee })
  } catch (error) {
    res.status(500).send(error)
  }
})

// // Delete
// app.delete('/delete-mentee/:id', (req, res, next) => {
//     Mentee.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })
module.exports = app
