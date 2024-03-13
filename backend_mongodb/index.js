const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
const { productsRouter } = require("./Routes/Products.route");
const { cartRouter } = require("./Routes/Cart.route");
const { wishlistRouter } = require("./Routes/Wishlist.route");

app.get("/", (req, res) => {
  res.send("Welcome to MainRoutes");
});
app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/", productsRouter);
app.use("/", cartRouter);
app.use("/wishlist", wishlistRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connected Successful");
    console.log(`App listening on ${process.env.PORT}`);
  } catch (err) {
    console.log("Database connected Failed");
    console.log(err);
  }
});
