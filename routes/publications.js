var express = require('express');
var router = express.Router();
const { 
    POST_PUBLICATION, 
    GET_PUBLICATIONS, 
    GET_PUBLICATIONS_USER,
    GET_PUBLICATION,
    PUT_PUBLICATION,
    DELETE_PUBLICATION 
} = require('../constants');
const { 
    createPublication, 
    getPublications,
    getPublicationsByUser, 
    getPublication,
    updatePublication,
    deletePublication
} = require('../controllers/publicationController');
const { publicationValidate, validate } = require('../middlewares/validatePublication');

/* POST publication */
router.post(POST_PUBLICATION, publicationValidate(), validate, createPublication);

/* GET ALL publications */
router.get(GET_PUBLICATIONS, getPublications);

/* GET ALL publications users */
router.get(GET_PUBLICATIONS_USER, getPublicationsByUser);

/* GET ONE publication */
router.get(GET_PUBLICATION, getPublication);

/* UPDATE publication */
router.put(PUT_PUBLICATION, updatePublication);

/* DELETE publication */
router.delete(DELETE_PUBLICATION, deletePublication);

module.exports = router;