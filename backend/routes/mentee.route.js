const express = require('express');
const app = express();
const auth = require('../auth')
// model
let Mentee = require('../models/Mentee');
// route
app.get("/", async (req, res, next) => {
    Mentee.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
app.post("/mentee-register", async (req, res) => {
    try {
        // console.log(isUser);
        // if (isUser.length >= 1) {
        //     return res.status(409).json({
        //         message: "email already in use"
        //     });
        // }
        const mentee = new Mentee({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
        let data = await mentee.save();
        const token = await mentee.generateAuthToken(); // here it is calling the method that we created in the model
        res.status(201).json({ data, token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
})
app.post("/mentee-login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const mentee = await Mentee.findByCredentials(email, password);
        if (!mentee) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" });
        }
        const token = await mentee.generateAuthToken();
        res.status(201).json({ mentee, token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
})
app.get("/mentee-profile", auth, async (req, res) => {
    res.json(req.userData);
})

// menteeRoute.route('/edit-mentee/:id').get((req, res, next) => {
//     MenteeModel.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })
// // Update
// menteeRoute.route('/update-mentee/:id').put((req, res, next) => {
//     MenteeModel.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data)
//             console.log('Mentee successfully updated!')
//         }
//     })
// })
// // Delete
// menteeRoute.route('/delete-mentee/:id').delete((req, res, next) => {
//     MenteeModel.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })
module.exports = app;