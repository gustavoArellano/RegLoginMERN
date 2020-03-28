const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model')


module.exports = {

    index: (req, res) => {
        User.find({}, (err, data) => {
            if (err) {
                res.json({ message: 'Error in Index!' });
            } else {
                res.json(data);
            }
        });
    },

    create: (req, res) => {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            confirmPassword: req.body.password
        });

        newUser.save( (err) => {
            if(err) {
                console.log('somthing went wrong in create');
                res.redirect('/users')
            } else {
                console.log('successfully added user!');
                res.redirect('/users')
            };
        });
    }
}
