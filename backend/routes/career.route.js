const express = require('express')
const app = express()
// model
const Career = require('../models/Career')
// route
app.get('/', async (req, res, next) => {
  const careers = await Career.find({}).sort({ occupation_title: 'asc' })

  try {
    res.send(careers)
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = app
