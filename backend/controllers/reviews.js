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
    res.status(200).json({ msg: "One review from user" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.saveReview = async (req, res) => {
  try {
    res.status(200).json({ msg: "Review saved" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    res.status(200).json({ msg: "Review deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
