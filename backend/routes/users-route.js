const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const router = require('express').Router();
const users = require('../controllers/users-controller');


router.route('/users').get((req, res) => {
    users.index(req, res);
});

router.route('/register').post((req, res) => {
    users.create(req, res);
});

router.route('/login').get(async (req, res) => {
    users.login(req, res);
})

module.exports = router