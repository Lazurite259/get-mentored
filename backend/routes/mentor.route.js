const express = require('express');
const mentorRoute = express.Router();
// model
let MentorModel = require('../models/Mentor');
mentorRoute.route('/create-mentor').post((req, res, next) => {
    MentorModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
mentorRoute.route('/').get((req, res, next) => {
    MentorModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
mentorRoute.route('/edit-mentor/:id').get((req, res, next) => {
    MentorModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Update
mentorRoute.route('/update-mentor/:id').put((req, res, next) => {
    MentorModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Mentor successfully updated!')
        }
    })
})
// Delete
mentorRoute.route('/delete-mentor/:id').delete((req, res, next) => {
    MentorModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = mentorRoute;