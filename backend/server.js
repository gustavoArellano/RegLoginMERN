const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('./config/mongoose', { useUnifiedTopology: true })

const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const UsersRouter = require('./routes/users-route');
app.use('/user', UsersRouter);

const port = 8000;
app.listen(port, () => {
    console.log("We are live on " + port + ", from the backend!")
})
