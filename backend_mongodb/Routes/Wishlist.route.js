const express = require("express");
const {
  getWaitListData,
  addToWishlist,
  deleteFromWishlist,
} = require("../Controllers/Wishlist.controller");
const { authentication } = require("../Middlewares/authenticate");

const wishlistRouter = express.Router();
wishlistRouter.use(authentication);

wishlistRouter.get("/", getWaitListData);
wishlistRouter.post("/", addToWishlist);
wishlistRouter.delete("/:id", deleteFromWishlist);

module.exports = { wishlistRouter };
