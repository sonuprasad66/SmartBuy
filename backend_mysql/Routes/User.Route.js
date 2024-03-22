const express = require("express");
const {
  userSignup,
  userLogin,
  currentUser,
} = require("../Controllers/User.Controller");
const { authenticate } = require("../Middlewares/Authentication");
const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.get("/currentUser", authenticate, currentUser);

module.exports = {
  userRouter,
};
