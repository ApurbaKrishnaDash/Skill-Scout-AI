const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    studyHoursPerWeek: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
