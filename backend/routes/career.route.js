const express = require('express')
const app = express()
// model
const CareerModel = require('../models/Career')
// route
app.get('/', async (req, res, next) => {
  const careers = await CareerModel.find({})

  try {
    res.send(careers)
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = app
