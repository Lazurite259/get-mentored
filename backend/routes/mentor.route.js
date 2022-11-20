const express = require('express')
const app = express()
const auth = require('../auth')
// model
const Mentor = require('../models/Mentor')
// route
// app.get('/', async (req, res, next) => {
//   Mentor.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       return res.json(data)
//     }
//   })
// })
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
      occupation_title: req.body.occupation_title
    })
    const data = await mentor.save()
    const token = await mentor.generateAuthToken() // here it is calling the method that we created in the model
    res.status(201).json({ data, token })
  } catch (err) {
    res.status(400).json({ err })
  }
})
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
app.get('/mentor-profile/:id', auth, async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id)
    res.json(mentor)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.put('/mentor-update/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      occupation_title: req.body.occupation_title,
      birth_date: req.body.birth_date,
      company_name: req.body.company_name,
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

app.get('/:career', async (req, res, next) => {
  const mentors = await Mentor.find({ occupation_title: `${req.params.career}` })
  try {
    res.send(mentors)
  } catch (error) {
    res.status(500).send(error)
  }
})

// // Update
// mentorRoute.route('/update-mentor/:id').put((req, res, next) => {
//     MentorModel.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data)
//             console.log('Mentor successfully updated!')
//         }
//     })
// })
// // Delete
// mentorRoute.route('/delete-mentor/:id').delete((req, res, next) => {
//     MentorModel.findByIdAndRemove(req.params.id, (error, data) => {
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
