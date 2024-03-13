const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  Brand: { type: String, required: true },
  Image1: { type: String },
  Image2: { type: String },
  Image3: { type: String },
  Image4: { type: String },
  Image5: { type: String },
  Rating: { type: String, required: true },
  Product_Title: { type: String, required: true },
  category: { type: String, required: true },
  Mens: { type: String, required: true },
  Price: { type: Number, required: true },
  MRP: { type: Number, required: true },
  Discount: { type: Number, required: true },
});

const ProductsModel = mongoose.model("allproduct", productsSchema);

module.exports = { ProductsModel };
