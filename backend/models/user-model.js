const mongoose = require('mongoose');
const Schema = mongoose.Schema
const emailRegex = require('email-regex');

const UserSchema = new Schema ({

    firstName: { 
        type: String, 
        trim: true,
        require: [true, "First name required!"],
        minlength: [ 2, "First name must be at least 2 characters!"]
    },

    lastName: { 
        type: String, 
        trim: true,
        require: [true, "Last name required!"],
        minlength: [ 2, "Last name must be at least 2 characters!"]
    },

    email: { 
        type: String, 
        trim: true,
        unique: [true, "An account is already associated with this email!"],
        require: [true, "Email is required!"],
        minlength: [ 2, "Email name must be at least 2 characters!"],
        match: [emailRegex({exact: true}), "Invalid email format!"]
    },

    userName: { 
        type: String, 
        trim: true,
        require: [true, "Username required!"],
        minlength: [ 4, "Username must be at least 4 characters!"],
        match: [/^[a-zA-Z0-9]+$/, "Invalid username format!"],
        unique: [true, "Username already exists!"]
    },

    password: { 
        type: String, 
        match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Password must contain at least one number, one lowercase, and one uppercase letter!"],
        require: [true, "Password required!"],
        minlength: [ 2, "Password must be at least 2 characters!"]
    },

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User
