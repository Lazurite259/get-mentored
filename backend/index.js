const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const occupationAPI = require("./routes/occupation.route")
const mentorAPI = require('./routes/mentor.route')
const menteeAPI = require('./routes/mentee.route')

const app = express()
app.use(express.json());
// Connect mongoDB
const uri = "mongodb+srv://admin:admin@mentored.kosl2ga.mongodb.net/getmentored?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: false,
//     }),
// )
app.use(cors())
// API
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