var express = require('express');
var router = express.Router();
const { POST_PUBLICATION } = require('../constants');
const { createPublication } = require('../controllers/publicationController');
const { publicationValidate, validate } = require('../middlewares/validatePublication');

/* POST publication */
router.post(POST_PUBLICATION, publicationValidate(), validate, createPublication);

module.exports = router;