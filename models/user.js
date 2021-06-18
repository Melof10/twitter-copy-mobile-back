const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    fullname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    publications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Publication'
        }
    ]
})

mongoose.model('User', userSchema);