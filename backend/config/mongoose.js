const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/reg-login', { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB databse connection established succcesfully");
});

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(file => {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});