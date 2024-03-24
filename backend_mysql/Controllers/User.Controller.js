const { createUser, checkUserExist, getUser } = require("../Models/User.Model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config;

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

const userSignup = async (req, res) => {
  const { firstname, lastname, email, mobile_number, profile_pic, password } =
    req.body;

  if (!firstname || !lastname || !email || !mobile_number || !password) {
    return res.send({
      status: "error",
      message: "Please Enter All Creditional",
    });
  }

  bcrypt.hash(password, 5, async function (err, hashed_password) {
    if (err) {
      res.send({
        status: "error",
        message: "Error while encrypting password",
      });
    } else {
      await checkUserExist({ firstname, lastname, email, password })
        .then((result) => {
          if (result[0].length > 0) {
            res.send({
              status: "info",
              message: "User Already Exists",
              userData: result[0],
            });
          } else {
            createUser([
              firstname,
              lastname,
              email,
              mobile_number,
              hashed_password,
              profile_pic,
            ])
              .then((result) => {
                res.send({
                  status: "success",
                  message: "User Data Stored Successfully!",
                });
              })
              .catch((err) => {
                res.send({
                  status: "error",
                  message: "Error while storing user data",
                });
              });
          }
        })
        .catch((err) => {
          res.send({
            status: "error",
            message: "Error while checking existing user",
          });
        });
    }
  });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send({
      status: "error",
      message: "Please Enter the Email and Password",
    });
  } else {
    await checkUserExist({ email, password })
      .then(async (result) => {
        if (result[0].length == 0) {
          res.send({
            status: "error",
            message: "User Not Found",
          });
        } else {
          const hash_password = result[0][0].password;
          const userId = result[0][0].userid;

          await bcrypt.compare(password, hash_password, (err, result) => {
            if (err) {
              return res.send({
                status: "error",
                message: "Error while comparing the hash password",
              });
            }

            if (result) {
              let token = jwt.sign({ userId }, process.env.SECRET_KEY);

              if (token) {
                res.send({
                  status: "success",
                  message: "User Loggined Successful",
                  token: token,
                });
              } else {
                res.send({
                  status: "error",
                  message: "Error while generating token",
                });
              }
            } else {
              res.send({
                status: "error",
                message: "User Loggin Faild, wrong username/ password",
              });
            }
          });
        }
      })
      .catch((err) => {
        res.send({
          status: "error",
          message: "Error while checking existing user",
        });
      });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

const currentUser = async (req, res) => {
  const { userId } = req.body;
  await getUser(userId)
    .then((result) => {
      if (result[0].length > 0) {
        // res.send({
        //   status: "success",
        //   message: "Current User Data",
        //   currentUser: result[0][0],
        // });
        res.send(result[0][0]);
      }
    })
    .catch((err) => {
      return res.send({
        status: "error",
        message: "Error while fetching current user data",
      });
    });
};

module.exports = {
  userSignup,
  userLogin,
  currentUser,
};
