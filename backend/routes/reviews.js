/* Create imports */
const express = require("express");
const router = express.Router();
const reviewsControllers = require("../controllers/reviews");
const { requireAuth } = require("../middleware/auth");

/* Create routes */
router.get("/", requireAuth, reviewsControllers.getReviews);
router.get("/:id", requireAuth, reviewsControllers.getReview);
router.post("/", requireAuth, reviewsControllers.saveReview);
router.delete("/:id", requireAuth, reviewsControllers.deleteReview);

/* Create exports */
module.exports = router;
