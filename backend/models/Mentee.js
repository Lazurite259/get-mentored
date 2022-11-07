const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let menteeSchema = new Schema({
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
}, {
    collection: 'mentee'
})
module.exports = mongoose.model('Mentee', menteeSchema)