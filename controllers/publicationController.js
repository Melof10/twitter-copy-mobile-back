const { create } = require('../querys/publications');
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