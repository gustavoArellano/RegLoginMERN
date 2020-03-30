const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model');
const Bcrypt = require('bcryptjs');
const validate = require('../models/user-validations');




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
        });
        
        

        newUser.save( (err) => {
            let errorMessages = []
            let confirmPassword = req.body.confirmPassword
            if (err) {

                for (var key in err.errors) {
                    errorMessages.push(err.errors[key].message);
                }
                
                validate.emailExits

                var findExistingEmail = User.findOne({ email: newUser.email});
                if ( findExistingEmail != null) {
                    errorMessages.push("An Account is already associated with this email!")
                }

                var findExistingUserName = User.findOne({ username: newUser.userName});
                if ( findExistingUserName != null) {
                    errorMessages.push("Username is already taken!")
                }
                
                if ( confirmPassword != newUser.password ) {
                    errorMessages.push("Passwords do not match!")
                } 

                console.log('something went wrong in create');
                res.json(errorMessages)
                return;

            } else {

                if ( confirmPassword != newUser.password ) {

                    errorMessages.push("Passwords do not match!")
                    res.json(validate.errorMessages)

                } else {

                    newUser.password = Bcrypt.hashSync(newUser.password, 10);
                    console.log(newUser.password, "This PW has been encrypted!")
                    console.log('successfully added user!');
                    res.json("User Successfully added!")
                    return
                }
            };
        });
        
    }
}
