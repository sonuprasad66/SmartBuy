const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    profile_pic: { type: String, require: true },
    email: { type: String, require: true },
    mobile_number: { type: Number, require: true },
    password: { type: String, require: true },
    address: {},
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
