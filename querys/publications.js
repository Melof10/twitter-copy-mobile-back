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

exports.update = async(id, data) => {
    return await Publication.findByIdAndUpdate(id, data, { new: true });
}

exports.remove = async(id) => {
    return await Publication.findByIdAndDelete(id);
}