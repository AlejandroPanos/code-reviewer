/* Create imports */
const User = require("../models/user");
const Review = require("../models/review");

/* Create controllers */
exports.generateReview = async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not authorised" });
    }

    const review = await Review.createReview(code);

    res.status(200).json(review);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
