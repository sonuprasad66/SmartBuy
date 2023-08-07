const express = require("express");
const {
  getCartData,
  addToCart,
  deleteCartProduct,
  updateCartProduct,
} = require("../Controllers/CartController");
const { authentication } = require("../Middlewares/authenticate");

const cartRouter = express.Router();
cartRouter.use(authentication);

cartRouter.get("/cart", getCartData);
cartRouter.post("/cart", addToCart);
cartRouter.delete("/cart/:id", deleteCartProduct);
cartRouter.patch("/cart/:id", updateCartProduct);

module.exports = { cartRouter };
