const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "allproduct",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Wishlist = mongoose.model("wishlist", WishlistSchema);
module.exports = Wishlist;
