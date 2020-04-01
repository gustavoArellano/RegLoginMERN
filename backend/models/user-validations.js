// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// const User = require('../models/user-model')
// const userController = require('../controllers/users-controller')

// // let errorMessages = []

// module.exports = {

//         emailExits: (req) => {
//             console.log("iam here*********")
//             var find = User.findOne({ email: req.body.email});
//             if ( find != null) {
//                 userController.errorMessages.push("Email exits!")
//             }
//         },

//         passwordMatching: (res, req) => {
//             if ( confirmPassword != newUser.password ) {
//                 errorMessages.push("Passwords do not match!")
//             } 
//         }

// }