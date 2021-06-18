const { development } = require('../config/config');

const errorMinCharacters = (character) => {
    return `Este campo debe tener mínimo ${character} carácteres`;
};

const errorMaxCharacters = (character) => {
    return `Este campo debe tener máximo ${character} carácteres`;
};

module.exports = {
    /***** CONNECT MONGODB *****/
    MONGODB_URI: development.host +':'+ development.port +'/'+ development.database,

    /***** STATUS CODE *****/
    SUCCESS_CODE: 200,
    ERROR_CLIENT_CODE: 400,
    ERROR_SERVER_CODE: 500,
    ERROR_VALIDATE_MIDDLEWARE: 422,

    /*****  ROUTES for request  *****/   
    // publications     
    POST_PUBLICATION: '/', 
    GET_PUBLICATIONS: '/',
    GET_PUBLICATIONS_USER: '/:user',
    GET_PUBLICATION: '/:id',
    PUT_PUBLICATION: '/:id',
    DELETE_PUBLICATION: '/:id',
    // user
    POST_USER: '/', 
    GET_USERS: '/',
    GET_USER: '/:id',
    PUT_USER: '/:id',
    DELETE_USER: '/:id',

    /***** MESSAGES *****/    
    // success
    SUCCESS_MESSAGE: "INFORMACION ENCONTRADA",
    // failed
    ERROR_SERVER: "ERROR EN EL SERVIDOR",
    ERROR_DATA_NOT_FOUND_MESSAGE: "NO SE ENCONTRÓ LA INFORMACION SOLICITADA",
    ERROR_NOT_EMPTY: "Este campo es requerido",
    errorMinCharacters,
    errorMaxCharacters,
}