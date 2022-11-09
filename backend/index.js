const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');

dotenv.config()
const app = express()
app.use(express.json());
// Connect mongoDB
const uri = process.env.MONGODB_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
// Configuration
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan("dev"))
// API
const occupationAPI = require('./routes/occupation.route')
const mentorAPI = require('./routes/mentor.route')
const menteeAPI = require('./routes/mentee.route')
app.use('/mentor', mentorAPI)
app.use('/mentee', menteeAPI)
app.use('/occupation', occupationAPI)
// Create port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Connected to port ' + port)
})
// Find 404
app.use((req, res, next) => {
    next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})