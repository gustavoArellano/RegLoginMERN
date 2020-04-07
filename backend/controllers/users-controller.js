const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user-model');
const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')




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

        User.findOne( {email: email} )
            .then( user => { 
                if ( !user ) {
                    if ( password != confirmPassword ) {
                        console.log("Passwords do not match!");
                        return res.json( {message: "Passwords do not match!"} );
                    } else {
                        console.log("Passwords match!");
                        password = Bcrypt.hashSync( password, 10 );
                        const newUser = new User( {firstName, lastName, email, userName, password} );
                        newUser.save()
                            .then( () => res.json('Successfully added user!') )
                            .catch( err => res.status(400).json('Error in SAVING USER: ' + err) );
                    };

                } else {
                    res.json( {error: "User already exists!"} );
                };
            })

            .catch( err => {
                console.log("Somthing went wrong in create!");
                res.send('error: ' + err);
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

    },

    // THE BELOW WILL IMPLEMENT JSONWEBTOKEN
    // User.findOne({email: req.body.email})
    //     .then(user => {
    //         if(user) {
    //             if(Bcrypt.compareSync(req.body.password, user.password)) {
    //                 const payload = {
    //                     _id: user._id,
    //                     firstName: user.firstName,
    //                     lastNmae: user.lastName,
    //                     email: user.email,
    //                     userName: user.userName
    //                 }
    //                 let token = jwt.sign(payload, "MySecretKey", {
    //                     expiresIn: 1440
    //                 })
    //                 res.send(token)
    //             } else {
    //                 res.json({error: "User does not exist!"})
    //             }
    //         } else {
    //             res.json({error: "User does not exist!"})
    //         }
    //     })
    //     .catch(err => {
    //         res.send('error: ' + err)
    //     })

    // profile: (res, req) => {
    //     User.findOne({email: email})
    //         .then(user => {if(!user) {res.json(user)}})
    //         .catch((err) => {res.json(err)})
    // }
}
