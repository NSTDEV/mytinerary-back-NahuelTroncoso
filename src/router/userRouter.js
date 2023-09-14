const express = require('express');
const userRouter = express.Router();

const { editUser } = require("../controllers/usersController");
const authRouter = require('../router/authRouter');

userRouter.put("/user/edit/:_id", editUser);
userRouter.use("/user", authRouter);

module.exports = userRouter;