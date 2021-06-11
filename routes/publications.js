var express = require('express');
var router = express.Router();
const { POST_PUBLICATION, GET_PUBLICATIONS } = require('../constants');
const { createPublication, getPublications } = require('../controllers/publicationController');
const { publicationValidate, validate } = require('../middlewares/validatePublication');

/* POST publication */
router.post(POST_PUBLICATION, publicationValidate(), validate, createPublication);

/* GET ALL publications */
router.get(GET_PUBLICATIONS, getPublications);

module.exports = router;