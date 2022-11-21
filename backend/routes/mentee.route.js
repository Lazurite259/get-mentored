const express = require('express')
const app = express()
const auth = require('../auth')
// model
const Mentee = require('../models/Mentee')
// route
// app.get('/', async (req, res, next) => {
//   Mentee.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       return res.json(data)
//     }
//   })
// })
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

// // Update
// menteeRoute.route('/update-mentee/:id').put((req, res, next) => {
//     MenteeModel.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data)
//             console.log('Mentee successfully updated!')
//         }
//     })
// })
// // Delete
// menteeRoute.route('/delete-mentee/:id').delete((req, res, next) => {
//     MenteeModel.findByIdAndRemove(req.params.id, (error, data) => {
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
