const { create, getAll, getOne, update, remove } = require('../querys/publications');
const { 
    responseSuccess, 
    responseErrorClient, 
    responseErrorServer 
} = require('../utils/responseRequest');

exports.createPublication = async(req, res) => {
    try {
        const publication = await create(req.body);
        publication ? responseSuccess(res, publication) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.getPublications = async(req, res) => {
    try {
        const publications = await getAll();
        publications ? responseSuccess(res, publications) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.getPubliacation = async(req, res) => {
    try {
        const publication = await getOne(req.params.id);
        publication ? responseSuccess(res, publication) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.updatePublication = async(req, res) => {
    try {
        const publication = await update(req.params.id, req.body);
        publication ? responseSuccess(res, publication) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.deletePublication = async(req, res) => {
    try {
        const publication = await remove(req.params.id);
        publication ? responseSuccess(res, publication) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}