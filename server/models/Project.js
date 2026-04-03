const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  type: String,
  location: String,
  year: Number,
  image: String
});

module.exports = mongoose.model("Project", projectSchema);