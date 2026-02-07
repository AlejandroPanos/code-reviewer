/* Create imports */

/* Create controllers */
exports.getReviews = async (req, res) => {
  try {
    res.status(200).json({ msg: "All reviews from user" });
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
