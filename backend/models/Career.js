const mongoose = require('mongoose')
const Schema = mongoose.Schema
const careerSchema = new Schema({
  onet_code: {
    type: String
  },
  occupation_title: {
    type: String
  }
}, {
  collection: 'career'
})

const Career = mongoose.model('Career', careerSchema)
module.exports = Career
