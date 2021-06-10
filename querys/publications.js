const mongoose = require('mongoose');
const Publication = mongoose.model('Publication');

exports.create = async(data) => {
    return await Publication.create(data);
}