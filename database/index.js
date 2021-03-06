const mongoose = require('mongoose');
const { MONGODB_URI } = require('../constants');

// import models
const Publication = require('../models/publication');
const User = require('../models/user');

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));


module.exports = {
    Publication,
    User
}