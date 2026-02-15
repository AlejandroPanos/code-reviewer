/* Create imports */
const User = require("../models/user");
const Review = require("../models/review");
const { getTodayUTC } = require("../helpers/dateHelpers");

/* Create controllers */
exports.generateReview = async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not authorised" });
    }

    const todayUTC = getTodayUTC();

    if (user.lastResetDate !== todayUTC) {
      user.dailyReviewsGenerated = 0;
      user.lastResetDate = todayUTC;
    }

    if (user.dailyReviewsGenerated >= 5) {
      return res.status(401).json({ error: "Daily limit reached. Please wait until tomorrow." });
    }

    const review = await Review.createReview(code);

    user.dailyReviewsGenerated += 1;
    await user.save();

    res.status(200).json(review);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
