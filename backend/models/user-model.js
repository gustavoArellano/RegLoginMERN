const mongoose = require('mongoose');
const Schema = mongoose.Schema


const UserSchema = new Schema ({

    firstName: { 
        type: String, 
        trim: true
    },

    lastName: { 
        type: String, 
        trim: true
    },

    email: { 
        type: String, 
        trim: true,
        unique: true,
    },

    userName: { 
        type: String, 
    },

    password: { 
        type: String, 
        match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Password must contain at least one number, one lowercase, and one uppercase letter!"]
    },

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User
