/* Create imports */
const express = require("express");
const router = express.Router();
const reviewsControllers = require("../controllers/reviews");

/* Create routes */
router.get("/", reviewsControllers.getReviews);
router.get("/:id", reviewsControllers.getReview);
router.post("/:id", reviewsControllers.saveReview);
router.delete("/:id", reviewsControllers.deleteReview);

/* Create exports */
module.exports = router;
