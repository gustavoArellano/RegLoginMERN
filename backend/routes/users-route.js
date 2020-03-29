const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const router = require('express').Router();
const users = require('../controllers/users-controller');

router.route('/').get((req, res) => {
    users.index(req, res);
});

router.route('/register').post((req, res) => {
    users.create(req, res);
});

module.exports = router