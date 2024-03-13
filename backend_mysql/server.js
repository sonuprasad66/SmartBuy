const express = require("express");
require("dotenv").config();
const app = express();
const connection = require("../backend_mysql/Config/db");
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send({ status: "success", message: "Welcome to Main Routes !" });
});

app.listen(PORT, () => {
  try {
    console.log("DB Connection Successfull!");
  } catch (error) {
    console.log("DB Connection faild!");
    console.log(error);
  }
});
