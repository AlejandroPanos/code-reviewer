/* Create imports */
const User = require("../models/user");
const Review = require("../models/review");

/* Create controllers */
exports.getReviews = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const reviews = await Review.find({ userId });

    if (!reviews) {
      return res.status(401).json({ error: "Reviews for user not found" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getReview = async (req, res) => {
  try {
    const userId = req.user.id;
    const reviewId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.userId.toString() !== userId) {
      return res.status(401).json({ error: "Review does not correspond to user" });
    }

    res.status(200).json(review);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.saveReview = async (req, res) => {
  try {
    const { title, code, summary, structure, accessibility, scalability } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!title || !code || !summary || !structure || !accessibility || !scalability) {
      return res.status(401).json({ error: "All inputs are required" });
    }

    const review = await Review.create({
      userId,
      title,
      code,
      summary,
      structure,
      accessibility,
      scalability,
    });

    res.status(200).json(review);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const userId = req.user.id;
    const reviewId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not authrised" });
    }

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.userId.toString() !== userId) {
      return res.status(401).json({ error: "Review does not correspond to user" });
    }

    await review.deleteOne();

    res.status(200).json({ msg: "Review deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
