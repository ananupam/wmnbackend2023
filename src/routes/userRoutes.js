const express = require("express");
const userRouter = express.Router();

const {signup, login, getUser} = require("../controllers/userController");

userRouter.get("/",getUser);
userRouter.post("/signup",signup);

userRouter.post("/login",login);

module.exports = userRouter;