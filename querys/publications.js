const mongoose = require('mongoose');
const Publication = mongoose.model('Publication');

exports.create = async(data) => {
    return await Publication.create(data);
}

exports.getAll = async() => {
    return await Publication.find();
}

exports.getOne = async(id) => {
    return await Publication.findById(id);
}