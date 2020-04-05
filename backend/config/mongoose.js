const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose
    .connect('mongodb://localhost/reg-login', { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err))

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(file => {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});