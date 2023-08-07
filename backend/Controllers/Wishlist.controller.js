const express = require("express");
const Wishlist = require("../Models/Wishlist.model");

const app = express.Router();

const getWaitListData = async (req, res) => {
  try {
    let items = await Wishlist.find({
      user: req.body.user_id,
    }).populate("product");
    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const addToWishlist = async (req, res) => {
  try {
    let wishlistData = await Wishlist.findOne({
      $and: [{ user: req.body.user_id }, { product: req.body.product }],
    });
    if (wishlistData) {
      res.status(200).send("This product is already in wishlist");
    } else {
      let data = new Wishlist({ ...req.body, user: req.body.user_id });
      await data.save();
      res.status(200).send(data);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteFromWishlist = async (req, res) => {
  const { id } = req.params;
  let data = await Wishlist.findOne({
    product: id,
  });
  try {
    if (!data) {
      let deletedData = await Wishlist.findByIdAndDelete({ _id: id });
      res.status(200).json({
        msg: "Product removed successfully from the wishlist",
        data: deletedData,
      });
    } else {
      let deletedData = await Wishlist.deleteOne({ product: id });
      res.status(200).json({
        msg: "Product removed successfully from the wishlist",
        data: deletedData,
      });
    }
  } catch (er) {
    res.status(500).send({ msg: er.message });
  }
};

module.exports = { getWaitListData, addToWishlist, deleteFromWishlist };
