const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    firstName: { 
        type: String, 
        required: [true, "First name is required!"],
        minlength: [2, "First name must contain at least 2 letters!"],
        trim: true
    },

    lastName: { 
        type: String, 
        required: [true, "Last name is required!"],
        minlength: [2, "Last name must contain at least 2 letters!"],
        trim: true
    },

    email: { 
        type: String, 
        require: true,
        unique: [true, "Account with this email already exists!"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },

    userName: { 
        type: String, 
        required: [true, "Username is required!"],
        minlength: [4, "Username must contain at least 4 charachters!"],
        unique: [true, "That username is already in use!"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },

    password: { 
        type: String, 
        required: [true, "Password required!"],
        minlength: [8, "Password must contain at least 6 characthers minimum!"]
    },

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User
