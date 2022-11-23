const sendEmail = require('../sendEmail')
const express = require('express')
const crypto = require('crypto')
const app = express()
const auth = require('../auth')
// model
const Mentor = require('../models/Mentor')
// route
app.get('/', async (req, res, next) => {
  const mentors = await Mentor.find({})
  try {
    res.send(mentors)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Register
app.post('/mentor-register', async (req, res) => {
  try {
    const isUser = await Mentor.find({ email: req.body.email })
    console.log(isUser)
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: 'Email already in use'
      })
    }
    const mentor = new Mentor({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password.password,
      career: req.body.career
    })
    const data = await mentor.save()
    const token = await mentor.generateAuthToken() // here it is calling the method that we created in the model
    res.status(201).json({ data, token })
  } catch (err) {
    res.status(400).json({ err })
  }
})
// Login
app.post('/mentor-login', async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const mentor = await Mentor.findByCredentials(email, password)
    if (!mentor) {
      return res.status(401).json({ message: 'Login failed! Check your email or password' })
    }
    const token = await mentor.generateAuthToken()
    res.status(201).json({ mentor, token })
  } catch (error) {
    res.status(400).json({ error })
  }
})
// Get profile
app.get('/mentor-profile/:id', auth, async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id)
    res.json(mentor)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Update profile
app.put('/mentor-update/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      career: req.body.career,
      birth_date: req.body.birth_date,
      company_name: req.body.company_name,
      location: req.body.location,
      year_of_experience: req.body.year_of_experience,
      office_hour: req.body.office_hour,
      linkedin: req.body.linkedin,
      introduction: req.body.introduction
    })
    const token = await mentor.generateAuthToken()
    res.status(201).json({ mentor, token })
  } catch (error) {
    res.status(500).send(error)
  }
})
// Get mentors by career
app.get('/:career', async (req, res, next) => {
  const mentors = await Mentor.find({ 'career.onet_code': `${req.params.career}` })
  try {
    res.send(mentors)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Get mentor detail
app.get('/mentor-detail/:id', async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id)
  try {
    res.send(mentor)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Forgot password
app.post('/forgot-password', async (req, res, next) => {
  const mentor = await Mentor.findOne({ email: req.body.email })
  if (!mentor) {
    return res.status(404).json({ message: 'Email does not exist' })
  }
  const resetToken = mentor.getResetPasswordToken()
  await mentor.save({ validateBeforeSave: false })
  // Create reset url
  const resetUrl = `${process.env.BASE_URI}/mentor-reset-password/${resetToken}`
  const message = `You have requested the reset of a password. Click this link to reset your password: ${resetUrl}.`
  try {
    await sendEmail({
      from_email: `GetMentored <${process.env.SMTP_EMAIL}>`,
      to_email: mentor.email,
      subject: 'Reset GetMentored.com Password',
      message
    })
    res.status(200).json({ success: true, message: 'Email sent' })
  } catch (error) {
    mentor.reset_password_token = undefined
    mentor.reset_password_expire = undefined
    await mentor.save({ validateBeforeSave: false })
    return res.status(500).json({ message: 'Email could not be sent' })
  }
})
// Reset password
app.put('/reset-password/:resetToken', async (req, res, next) => {
  try {
    // Get hashed token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex')
    const mentor = await Mentor.findOne({
      reset_password_token: resetPasswordToken,
      reset_password_expire: { $gt: Date.now() }
    })
    if (!mentor) {
      res.status(400).json({ message: 'Invalid token' })
    }
    // Set new password
    mentor.password = req.body.password
    mentor.reset_password_token = undefined
    mentor.reset_password_expire = undefined
    await mentor.save()
    res.status(200).json({ mentor })
  } catch (error) {
    res.status(500).send(error)
  }
})

// // Delete
// app.delete('/delete-mentor/:id', (req, res, next) => {
//     Mentor.findByIdAndRemove(req.params.id, (error, data) => {
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
