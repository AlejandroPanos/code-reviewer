/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;

/* Create schema */
const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
    summary: {
      totalScore: {
        type: Number,
        min: 0,
        max: 100,
      },
      text: {
        type: String,
        required: true,
      },
    },
    structure: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: String,
    },
    accessibility: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: String,
    },
    scalability: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      feedback: String,
    },
  },
  { timestamps: true },
);

/* Create export */
module.exports = mongoose.model("Review", reviewSchema);
