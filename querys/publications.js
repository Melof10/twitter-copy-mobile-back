const Publication = require('../models/publication');

exports.create = async(data) => {
    return await Publication.create(data);
}