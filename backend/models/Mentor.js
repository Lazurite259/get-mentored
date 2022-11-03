const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let mentorSchema = new Schema({
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
    year_of_experience: {
        type: String
    },
    office_hour: {
        type: Array
    },
    linkedin: {
        type: String
    },
}, {
    collection: 'mentors'
})
module.exports = mongoose.model('Mentor', mentorSchema)