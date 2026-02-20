const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  skills: String,
  availability: String,
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
