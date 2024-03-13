const express = require("express");
const productsRouter = express.Router();
const {
  getAllProducts,
  getAllFilterProducts,
  getAllProductsDetails,
  getAllProductsMens,
  getAllProductsWomens,
  getAllProductsKids,
  getAllProductsElectronics,
  getAllDataSortByPrice,
  getAllDataSortByDiscount,
  getAllDataSortByRating,
  searchProductByName,
} = require("../Controllers/Products.controller");

productsRouter.get("/getAllProducts", getAllProducts);
productsRouter.get("/getAllProductsDetails/:id", getAllProductsDetails);
productsRouter.get("/getAllFilterProducts", getAllFilterProducts);

// ----------------------All Single Category--------------------------------------

productsRouter.get("/getAllProductsMens", getAllProductsMens);
productsRouter.get("/getAllProductsWomens", getAllProductsWomens);
productsRouter.get("/getAllProductsKids", getAllProductsKids);
productsRouter.get("/getAllProductsElectronics", getAllProductsElectronics);

// ------------------------All Sorting------------------------------------

productsRouter.get("/getAllProductsSortByPrice", getAllDataSortByPrice);
productsRouter.get("/getAllProductsSortByDiscount", getAllDataSortByDiscount);
productsRouter.get("/getAllProductsSortByRating", getAllDataSortByRating);

// ------------------------ Search api ------------------------

productsRouter.get("/products/search", searchProductByName);

module.exports = {
  productsRouter,
};
