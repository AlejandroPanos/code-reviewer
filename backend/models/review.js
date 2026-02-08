/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;

/* Create schema */
// TODO: Modify schema to fit the actual AI review (structure, accessibility & scalability)
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
    aiSummary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

/* Create export */
module.exports = mongoose.model("review", reviewSchema);
