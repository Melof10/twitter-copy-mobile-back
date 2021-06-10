const mongoose = require('mongoose');
const { MONGODB_URI } = require('../constants');

exports.connection = () => {    
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
        .then((db) => console.log("DB is connected"))
        .catch((err) => console.log(err));
}