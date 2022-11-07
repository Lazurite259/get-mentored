const express = require('express');
const menteeRoute = express.Router();
// model
let MenteeModel = require('../models/Mentee');
menteeRoute.route('/create-mentee').post((req, res, next) => {
    MenteeModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
menteeRoute.route('/').get((req, res, next) => {
    MenteeModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
menteeRoute.route('/edit-mentee/:id').get((req, res, next) => {
    MenteeModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Update
menteeRoute.route('/update-mentee/:id').put((req, res, next) => {
    MenteeModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Mentee successfully updated!')
        }
    })
})
// Delete
menteeRoute.route('/delete-mentee/:id').delete((req, res, next) => {
    MenteeModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = menteeRoute;