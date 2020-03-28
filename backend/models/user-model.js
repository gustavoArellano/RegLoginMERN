const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    firstName: { 
        type: String, 
        require: true,
    },

    lastName: { 
        type: String, 
        require: true,
    },

    email: { 
        type: String, 
        require: true 
    },

    userName: { 
        type: String, 
        require: true,
    },

    password: { 
        type: String, 
        require: true 
    },

    confirmPassword: { 
        type: String, 
        require: true 
    }

}, {timestamp: true});

const User = mongoose.model('User', UserSchema);
module.exports = User
