const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  type: String,
  area: String,
  budget: String,
  location: String,
  requirements: String,
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", inquirySchema);