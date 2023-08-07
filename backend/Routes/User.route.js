const express = require("express");
const userRouter = express.Router();
const {
  userSignup,
  userLogin,
  userProfile,
  userAddress,
} = require("../Controllers/User.controller");
const { authentication } = require("../Middlewares/authenticate");

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.get("/profile", authentication, userProfile);
userRouter.patch("/address", authentication, userAddress);

module.exports = {
  userRouter,
};
