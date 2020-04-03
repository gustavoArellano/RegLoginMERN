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

        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const userName = req.body.userName;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword

        let errorMessages = [];
        
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
        var emailFound = 0
        User.find({email: email}, () => {return emailFound = 3})
        console.log(emailFound)
        // console.log(test)
        // console.log(test.getQuery().email)
        // if ((test.getQuery()).length >= 1) {
        //     errorMessages.push("An account is already associated with this email!")
        // }

        

        // console.log(errorMessages)

        return res.json(errorMessages)

        const newUser = new User({firstName, lastName, email, userName, password});





        newUser.save( (err) => {
            if (err) {

                // for (var key in err.errors) {
                //     errorMessages.push(err.errors[key].message);
                // }
                
                // var findExistingEmail = User.findOne({email: newUser.email});
                // if (findExistingEmail != true) {
                //     errorMessages.push("An Account is already associated with this email!")
                // }

                // let findExistingUserName = User.findOne({ username: newUser.userName});
                // if (findExistingUserName != null) {
                //     errorMessages.push("Username is already taken!")
                // }
                
                // if ( confirmPassword != newUser.password ) {
                //     errorMessages.push("Passwords do not match!")
                // } 

                console.log('something went wrong in create');
                // res.json(errorMessages)
                return;

            } else {

                // if ( confirmPassword != newUser.password ) {
                //     errorMessages.push("Passwords do not match!")
                //     res.json(validate.errorMessages)

                // } else {

                //     newUser.password = Bcrypt.hashSync(newUser.password, 10);
                //     console.log(newUser.password, "This PW has been encrypted!")
                //     console.log('successfully added user!');
                    res.json("User Successfully added!")
                    return
                }
            // };
        });
        
    }
}
