const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model')
const Bcrypt = require('bcryptjs')
const validate = require('../models/user-validations');
const assert = require('assert')




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
        const encrypt = Bcrypt.hashSync(req.body.password, 10)
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: encrypt
        });

        newUser.save( (err, data) => {
            if (err) {

                let errorMessages = [];

                for(var key in err.errors){
                    errorMessages.push(err.errors[key].message);
                }

                console.log('somthing went wrong in create');
                res.json(errorMessages)
                

            } else {
                console.log('successfully added user!');
                // res.redirect('/users')
                res.json("User Successfully added!", data)
            };
        });
    }
}
