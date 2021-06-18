var express = require('express');
var router = express.Router();
const { 
    POST_USER, 
    GET_USERS, 
    GET_USER,
    PUT_USER,
    DELETE_USER 
} = require('../constants');
const { 
    createUser, 
    getUsers, 
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

/* POST user */
router.post(POST_USER, createUser);

/* GET ALL users */
router.get(GET_USERS, getUsers);

/* GET ONE user */
router.get(GET_USER, getUser);

/* UPDATE user */
router.put(PUT_USER, updateUser);

/* DELETE user */
router.delete(DELETE_USER, deleteUser);

module.exports = router;