var jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

const authenticate = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    res.send({ msg: "Login Again" });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { userId } = decoded;
    if (decoded) {
      req.body.userId = userId;
      next();
    } else {
      res.send({ msg: "Please Login Again" });
    }
  }
};

module.exports = {
  authenticate,
};
