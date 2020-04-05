const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model');
const Bcrypt = require('bcryptjs');




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

        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let userName = req.body.userName;
        let password = req.body.password;
        let confirmPassword = req.body.confirmPassword


        // User.findOne({email: email})
        //     .then(user => {
        //         if(!user) {
        //             console.log("user does not exist")
        //         } else {
        //             console.log("An Account is already associated with this email!")

        //         }
        //     })
        //     .catch(err => {
        //         res.send('error: ' + err)
        //     })

        // User.findOne({userName: userName})
        //     .then(user => {
        //         if(!user) {
        //             console.log("user does not exist")
        //         } else {
        //             console.log("That username is already in use!")
        //         }
        //     })
        //     .catch(err => {
        //         res.send('error: ' + err)
        //     })

        //PASSWORD VALIDATION
        if (password != confirmPassword) {

            console.log("Password's do not match!");
            res.json("Password's do not match!")

        } else {

            console.log("Passwords match!")
            password = Bcrypt.hashSync(req.body.password, 10);

            const newUser = new User({firstName, lastName, email, userName, password});

            newUser.save( (err) => {
                if (err) {
                    console.log('something went wrong in create');
                    res.json(err)
                } else {
                        console.log('successfully added user!');
                        res.json("User Successfully added!")
                        return
                };
            });
        }
    },

    login: async (req, res) => {

        let email = req.body.email;
        let password = req.body.password

        try {
            var user = await User.findOne({email: email}).exec();
            if (!user) {
                return res.status(400).send({message: "User does not exist!"});
            }
            if (!Bcrypt.compareSync(password, user.password)) {
                return res.status(400).send({message: "The password is invalid!"})
            }
            res.send({message: "The email and password combination is correct!"});
        } catch (error) {
            res.status(500).send(error);
        }

    }
}
