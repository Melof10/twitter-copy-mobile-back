const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({        
    text: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

mongoose.model('Publication', publicationSchema);