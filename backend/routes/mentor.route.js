const express = require('express');
const app = express();
const auth = require('../auth')
// model
const Mentor = require('../models/Mentor');
// route
app.get("/", async (req, res, next) => {
    Mentor.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
app.post("/mentor-register", async (req, res) => {
    try {
        // console.log(isUser);
        // if (isUser.length >= 1) {
        //     return res.status(409).json({
        //         message: "email already in use"
        //     });
        // }
        const mentor = new Mentor({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
        let data = await mentor.save();
        const token = await mentor.generateAuthToken(); // here it is calling the method that we created in the model
        res.status(201).json({ data, token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
})
app.post("/mentor-login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const mentor = await Mentor.findByCredentials(email, password);
        if (!mentor) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" });
        }
        const token = await mentor.generateAuthToken();
        res.status(201).json({ mentor, token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
})
app.get("/mentor-profile", auth, async (req, res) => {
    res.json(req.userData);
})

// mentorRoute.route('/edit-mentor/:id').get((req, res, next) => {
//     MentorModel.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })
// // Update
// mentorRoute.route('/update-mentor/:id').put((req, res, next) => {
//     MentorModel.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data)
//             console.log('Mentor successfully updated!')
//         }
//     })
// })
// // Delete
// mentorRoute.route('/delete-mentor/:id').delete((req, res, next) => {
//     MentorModel.findByIdAndRemove(req.params.id, (error, data) => {
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