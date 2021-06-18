const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async(data) => {
    return await User.create(data);
}

exports.getAll = async() => {
    return await User.find();
}

exports.getOne = async(id) => {
    return await User.findById(id);
}

exports.update = async(id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
}

exports.remove = async(id) => {
    return await User.findByIdAndDelete(id);
}