const express = require('express');

const { register, login, logout, authenticated } = require('../controllers/authController');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyUserExists, verifyPassword, passportVerificator } = require('../middlewares/auth');

const authRouter = express.Router();

authRouter.post("/register", verifyAuthData, hashPassword, register);
authRouter.post("/login", verifyAuthData, verifyUserExists, verifyPassword, login);
authRouter.post("/authenticated", passportVerificator.authenticate("jwt", { session: false }), authenticated);
authRouter.post("/logout", passportVerificator.authenticate("jwt", { session: false }), logout);

module.exports = authRouter;