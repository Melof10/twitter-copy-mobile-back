const { development } = require('../config/config');

module.exports = {
    /***** CONNECT MONGODB *****/
    MONGODB_URI: development.host +':'+ development.port +'/'+ development.database,

    /***** STATUS CODE *****/
    SUCCESS_CODE: 200,
    ERROR_CLIENT_CODE: 400,
    ERROR_SERVER_CODE: 500,

    /***** MESSAGES *****/    
    // success
    SUCCESS_MESSAGE: "INFORMACION ENCONTRADA",
    // failed
    ERROR_SERVER: "ERROR EN EL SERVIDOR",
    ERROR_DATA_NOT_FOUND_MESSAGE: "NO SE ENCONTRÓ LA INFORMACION SOLICITADA",
}