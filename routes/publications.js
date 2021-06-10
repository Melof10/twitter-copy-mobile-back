var express = require('express');
var router = express.Router();
const { POST_PUBLICATION } = require('../constants');
const { createPublication } = require('../controllers/publicationController');

/* POST publication */
router.post(POST_PUBLICATION, createPublication);

module.exports = router;