/* Create imports */
const express = require("express");
const router = express.Router();
const aiControllers = require("../controllers/ai");

/* Create routes */
router.post("/review", aiControllers.generateReview);

/* Create exports */
module.exports = router;
