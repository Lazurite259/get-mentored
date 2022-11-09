const express = require('express');
const app = express();
// model
let OccupationModel = require('../models/Occupation');
// route
app.get("/", async (req, res, next) => {
    const occupations = await OccupationModel.find({});

    try {
        res.send(occupations);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = app;