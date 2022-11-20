const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const menteeSchema = new Schema({
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
  education_level: {
    type: String
  },
  work_experience: {
    type: Boolean
  },
  skills: {
    type: Array
  },
  interested_industry: {
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
  collection: 'mentee'
})

// This method will hash the password before saving the user model
menteeSchema.pre('save', async function (next) {
  const mentee = this
  if (mentee.isModified('password')) {
    mentee.password = await bcrypt.hash(mentee.password, 8)
  }
  next()
})

// This method generates an auth token for the user
menteeSchema.methods.generateAuthToken = async function () {
  const mentee = this
  const token = jwt.sign({ _id: mentee._id, first_name: mentee.first_name, last_name: mentee.last_name, email: mentee.email },
    'secret')
  mentee.tokens = mentee.tokens.concat({ token })
  await mentee.save()
  return token
}

// This method search for a user by email and password.
menteeSchema.statics.findByCredentials = async (email, password) => {
  const mentee = await Mentee.findOne({ email })
  if (!mentee) {
    return null
  }
  const isPasswordMatch = await bcrypt.compare(password, mentee.password)
  if (!isPasswordMatch) {
    return null
  }
  return mentee
}

const Mentee = mongoose.model('Mentee', menteeSchema)
module.exports = Mentee
