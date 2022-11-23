const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
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
  year_of_experience: {
    type: Number
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
  ],
  reset_password_token: {
    type: String
  },
  reset_password_expire: {
    type: Date
  }
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

// This method generates and hashes password token
menteeSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex')
  // Hash token and set to reset_password_token
  this.reset_password_token = crypto.createHash('sha256').update(resetToken).digest('hex')
  // Set expire
  this.reset_password_expire = Date.now() + 10 * 60 * 1000
  return resetToken
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
