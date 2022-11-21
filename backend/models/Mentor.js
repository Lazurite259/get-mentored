const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mentorSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  birth_date: {
    type: Date
  },
  occupation_title: {
    type: String
  },
  company_name: {
    type: String
  },
  location: {
    type: String
  },
  year_of_experience: {
    type: String
  },
  office_hour: {
    type: Array
  },
  linkedin: {
    type: String
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
}, {
  collection: 'mentor'
})

// This method will hash the password before saving the user model
mentorSchema.pre('save', async function (next) {
  const mentor = this
  if (mentor.isModified('password')) {
    mentor.password = await bcrypt.hash(mentor.password, 8)
  }
  next()
})

// This method generates an auth token for the user
mentorSchema.methods.generateAuthToken = async function () {
  const mentor = this
  const token = jwt.sign({ _id: mentor._id, first_name: mentor.first_name, last_name: mentor.last_name, email: mentor.email },
    'secret')
  mentor.tokens = mentor.tokens.concat({ token })
  await mentor.save()
  return token
}

// this method search for a user by email and password.
mentorSchema.statics.findByCredentials = async (email, password) => {
  const mentor = await Mentor.findOne({ email })
  if (!mentor) {
    throw new Error({ error: 'Invalid login details' })
  }
  const isPasswordMatch = await bcrypt.compare(password, mentor.password)
  if (!isPasswordMatch) {
    throw new Error({ error: 'Invalid login details' })
  }
  return mentor
}

const Mentor = mongoose.model('Mentor', mentorSchema)
module.exports = Mentor
