/* Create helpers */
const jwt = require("jsonwebtoken");

/* Create helpers */
const maxAge = 2 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "2d" });
};

/* Create exports */
module.exports = { maxAge, createToken };
