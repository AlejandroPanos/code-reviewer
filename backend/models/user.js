/* Create imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { isEmail } = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

/* Create schema */
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      validate: isEmail,
    },
    password: {
      type: String,
      minlenght: 6,
      required: [true, "Password is required"],
      select: false,
    },
    dailyReviewsGenerated: {
      type: Number,
      default: 0,
    },
    lastResetDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

/* Create methods */
userSchema.virtual("gravatarUrl").get(function () {
  const email = this.email.toLowerCase().trim();
  const hash = crypto.createHash("sha256").update(email).digest("hex");
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
});

userSchema.statics.register = async function (name, email, password) {
  if (!name || !email || !password) {
    throw new Error("All fields required");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("User already exists");
  }

  const newUser = await this.create({
    name,
    email,
    password,
  });

  return this.findById(newUser._id).select("-password");
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields required");
  }

  const currentUser = await this.findOne({ email }).select("+password");
  if (!currentUser) {
    throw new Error("User does not exist. Register first.");
  }

  const match = await bcrypt.compare(password, currentUser.password);
  if (!match) {
    throw new Error("Passwords do not match.");
  }

  const user = await this.findOne({ email }).select("-password");

  return user;
};

userSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) {
    return;
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    throw new Error(error.message);
  }
});

/* Create export */
module.exports = mongoose.model("User", userSchema);
