const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  skills: {
    node: {
      type: Boolean,
      default: false,
    },
    react: {
      type: Boolean,
      default: false,
    },
    bun: {
      type: Boolean,
      default: false,
    },
    angular: {
      type: Boolean,
      default: false,
    },
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
