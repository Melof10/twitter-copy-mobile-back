const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    // user, text, file, createdAt
    user: {
        type: Number        
    },
    text: {
        type: String
    },
    file: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Publication', publicationSchema);