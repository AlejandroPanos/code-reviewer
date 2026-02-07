/* Create imports */
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/* Create middleware */
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, function (error, decodedToken) {
      if (error) {
        return res.status(401).json({ error: "User not authorised" });
      }
      next();
    });
  } else {
    return res.status(401).json({ error: "User not authorised" });
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, async function (error, decodedToken) {
      if (error) {
        req.user = null;
        next();
      } else {
        try {
          const user = await User.findById(decodedToken.id);
          req.user = user;
          next();
        } catch (error) {
          req.user = null;
          next();
        }
      }
    });
  } else {
    req.user = null;
    next();
  }
};

/* Create exports */
module.exports = { requireAuth, checkUser };
