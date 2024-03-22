const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();
const app = express();
const { userRouter } = require("../backend_mysql/Routes/User.Route");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(cors());

app.get("/", (req, res) => {
  res.send({ status: "success", message: "Welcome to Main Routes !" });
});

app.use(express.json());
app.use(bodyparser.json());

app.use("/", userRouter);

app.listen(PORT, () => {
  try {
    console.log("DB Connection Successfull!");
  } catch (error) {
    console.log("DB Connection faild!");
    console.log(error);
  }
});
