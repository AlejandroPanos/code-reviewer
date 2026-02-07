/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;

/* Create schema */
const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Review title is required"],
    },
    code: {
      type: String,
      required: true,
    },
    aiReview: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

/* Create export */
module.exports = mongoose.model("review", reviewSchema);
