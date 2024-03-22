const { connection } = require("../Config/db");

/**
 *
 * @param {{ username: string, userid: number }} userData
 * @param {import('mysql').queryCallback} callback
 * @returns
 */

module.exports.checkUserExist = async (userData) => {
  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    const data = await connection.query(query, [userData.email]);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports.createUser = async (userData, callback) => {
  try {
    const query = `INSERT INTO users (firstname, lastname, email, mobile_number, password, profile_pic) VALUES (?)`;
    const data = connection.query(query, [userData]);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports.getUser = async function (userId, callback) {
  await connection.query(
    `SELECT * FROM users WHERE id = ?`,
    [userId],
    function (err, result) {
      if (err) {
        return callback(err, null);
      }
      if (result) {
        return callback(null, result);
      }
    }
  );
};
