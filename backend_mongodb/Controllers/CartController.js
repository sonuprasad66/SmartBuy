const express = require("express");
const Cart = require("../Models/Cart.model");

const app = express.Router();

const getCartData = async (req, res) => {
  try {
    let items = await Cart.find({
      user: req.body.user_id,
    }).populate("product");
    res.send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const addToCart = async (req, res) => {
  try {
    let cartItem = await Cart.findOne({
      $and: [{ user: req.body.user_id }, { product: req.body.product }],
    });
    if (cartItem) {
      let item = await Cart.findByIdAndUpdate(
        cartItem.id,
        {
          qty: cartItem.qty + req.body.qty,
        },
        {
          new: true,
        }
      );
      return res.json({
        msg: "Product is already in the cart quantity increases",
        data: item,
        status: "info",
      });
    } else {
      let item = await Cart.create({
        ...req.body,
        user: req.body.user_id,
      });
      return res.json({
        msg: "Product added to the cart",
        data: item,
        status: "success",
      });
    }
  } catch (e) {
    return res.json({
      msg: e.message,
      status: "info",
    });
  }
};

const deleteCartProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let deletedData = await Cart.findByIdAndDelete(id).populate("product");
    res.status(200).json({
      msg: "Product deleted successfull from the cart",
      data: deletedData,
    });
  } catch (er) {
    res.status(500).send({ msg: e.message });
  }
};

const updateCartProduct = async (req, res) => {
  const id = req.params.id;

  try {
    let cartItem = await Cart.findOne({ _id: id });
    if (cartItem) {
      let item = await Cart.findByIdAndUpdate(
        cartItem.id,
        {
          qty: cartItem.qty + req.body.qty,
        },
        {
          new: true,
        }
      );
      return res.json({
        msg: "Quantity increases successfully",
        data: item,
      });
    } else {
      res.status(404).json({ msg: "Something went wrong" });
    }
  } catch (er) {
    res.status(500).json({ msg: er.message });
  }
};



module.exports = {
  getCartData,
  addToCart,
  deleteCartProduct,
  updateCartProduct,
};
