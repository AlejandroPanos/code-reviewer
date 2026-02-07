/* Create imports */
const express = require("express");
const router = express.Router();
const aiControllers = require("../controllers/ai");
const { requireAuth } = require("../middleware/auth");

/* Create routes */
router.post("/review", requireAuth, aiControllers.generateReview);

/* Create exports */
module.exports = router;
