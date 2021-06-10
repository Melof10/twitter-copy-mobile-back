const {
    SUCCESS_CODE,
    ERROR_CLIENT_CODE,
    ERROR_SERVER_CODE,
    SUCCESS_MESSAGE,
    ERROR_SERVER,
    ERROR_DATA_NOT_FOUND_MESSAGE,                           
} = require('../constants');

exports.responseSuccess = (res, data) => {
    return res.status(SUCCESS_CODE).send({
        status: SUCCESS_CODE,
        message: SUCCESS_MESSAGE,        
        data: data
    });
}

exports.responseErrorClient = (res) => {
    return res.status(ERROR_CLIENT_CODE).send({
        status: ERROR_CLIENT_CODE,
        message: ERROR_DATA_NOT_FOUND_MESSAGE
    });
}

exports.responseErrorServer = (res, data) => {
    return res.status(ERROR_SERVER_CODE).send({
        status: ERROR_SERVER_CODE,
        message: ERROR_SERVER,        
        error: data
    });
}