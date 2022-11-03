const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let occupationSchema = new Schema({
    onet_code: {
        type: String
    },
    occupation_title: {
        type: String
    },
}, {
    collection: 'occupations'
})
module.exports = mongoose.model('Occupation', occupationSchema)