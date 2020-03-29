const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model')
const Bcrypt = require('bcryptjs')



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
        const encrypted = Bcrypt.hashSync(req.body.password, 10)
        // const confirmPassword = Bcrypt.compare(encrypted, req.body.confirmPassword)
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: encrypted,
        });

        const confirmPassword = Bcrypt.compare(req.body.confirmPassword, newUser.password)
        console.log(newUser.password)
        console.log(confirmPassword)
        if (newUser.password == confirmPassword) {

            newUser.save( (err) => {
                if(err) {
                    console.log('somthing went wrong in create');
                    // res.redirect('/users')
                    res.json(err)
                } else {
                    console.log('successfully added user!');
                    // res.redirect('/users')
                    res.json(err)
                };
            });

        } else {
            res.json("Passwords do not match!")
        }
    }
}
