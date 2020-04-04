const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model');
const emailRegex = require('email-regex');
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

        var errorMessages = [];
        
        //FirstNameValidation
        if (firstName.length < 1) {

            errorMessages.push("First name is required!");

        } else if (firstName.length < 2) {

            errorMessages.push("First name must contain at least 2 letters!");
        } 

        //LastNameValidation
        if (lastName.length < 1) {

            errorMessages.push("Last name is required!");

        } else if (lastName.length < 2) {

            errorMessages.push("Last name must contain at least 2 letters!");
        } 

        //EmailValidation
        if (email.length < 1) {

            errorMessages.push("Email is required!");

        } else if (!emailRegex({exact: true}).test(email)) {

            errorMessages.push("Invalid email format!");
        }

        User.findOne({email: email})
            .then(user => {
                if(!user) {
                    console.log("user does not exist")
                } else {
                    // res.json({ error: "An Account is already associated with this email!"})
                    console.log("An Account is already associated with this email!")

                }
                
            })
            .catch(err => {
                res.send('error: ' + err)
            })

        //USERNAME VALIDATION
        var userNameRegEx = /^[a-zA-Z0-9]+$/
        if (userName.length < 1) {
            errorMessages.push("Username is required!");

        } else if (userName.length < 4) {
            errorMessages.push("Username must contain at least 4 characthers minimum!");

        } else if (!userNameRegEx.test(userName)) {
            errorMessages.push("Invalid username format!")

        }

        // RETURN TO MAIN PAGE IF ERRORS ARE TRUE
        if(errorMessages.count >= 1) {
            console.log("Theres an error!")
            res.redirect('/')
        }

        User.findOne({userName: userName})
        .then(user => {
            if(!user) {
                console.log("user does not exist")
            } else {
                errorMessages.push(user)
                console.log("That username is already in use!")
                res.json({ error: "Username already exists"})
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })

        //PASSWORD VALIDATION
        var pwRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (password.length < 1) {
            errorMessages.push("Password is required!");

        } else if (password.length < 6) {
            errorMessages.push("Password must contain at least 6 characthers minimum!");

        } else if (!pwRegEx.test(password)) {
            errorMessages.push("Password must contain at least one number, one lowercase, and one uppercase letter!")

        } else if (password != confirmPassword) {
            errorMessages.push("Password's do not match");
        } else {
            password = Bcrypt.hashSync(req.body.password, 10);
        }
        
        const newUser = new User({firstName, lastName, email, userName, password});
        newUser.save( (errorMessages) => {
            if (errorMessages) {
                console.log('something went wrong in create');
                res.json(errorMessages)
            } else {
                    console.log('successfully added user!');
                    res.redirect('/Home')
                    res.json("User Successfully added!")
                    return
            };
        });
        
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
