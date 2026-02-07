/* Create imports */
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth");
const { requireAuth } = require("../middleware/auth");

/* Create routes */
router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.post("/logout", requireAuth, authControllers.logout);
router.get("/profile", requireAuth, authControllers.currentProfile);

/* Create exports */
module.exports = router;
