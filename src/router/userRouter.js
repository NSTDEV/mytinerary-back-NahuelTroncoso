const express = require('express');
const router = express.Router();

const { addUser } = require('../controllers/usersController');

router.post("/users", addUser);

module.exports = router;