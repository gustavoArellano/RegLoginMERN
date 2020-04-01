const mongoose = require('mongoose');
const Schema = mongoose.Schema


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
        required: [true, "Email is required!"],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email format!'],
    },

    userName: { 
        unique: [true, "That username is already in use!"],
        type: String, 
        required: [true, "Username is required!"],
        minlength: [4, "Username must contain at least 4 charachters!"],
        match: [/^[a-zA-Z0-9]+$/, 'Invalid user name format!'],
    },

    password: { 
        type: String, 
        required: [true, "Password required!"],
        minlength: [6, "Password must contain at least 6 characthers minimum!"],
        match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Password must contain at least one number, one lowercase, and one uppercase letter!"]
    },

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User
