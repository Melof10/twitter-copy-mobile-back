const { create, getAll, getOne, update, remove } = require('../querys/user');
const { 
    responseSuccess, 
    responseErrorClient, 
    responseErrorServer 
} = require('../utils/responseRequest');

exports.createUser = async(req, res) => {
    try {
        const user = await create(req.body);
        user ? responseSuccess(res, user) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await getAll();
        users ? responseSuccess(res, users) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.getUser = async(req, res) => {
    try {
        const user = await getOne(req.params.id);
        user ? responseSuccess(res, user) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.updateUser = async(req, res) => {
    try {
        const user = await update(req.params.id, req.body);
        user ? responseSuccess(res, user) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const user = await remove(req.params.id);
        user ? responseSuccess(res, user) : responseErrorClient(res);
    } catch (error) {
        responseErrorServer(res, error);
    }
}