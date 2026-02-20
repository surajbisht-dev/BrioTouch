const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
  title: String,
  description: String,
  location: String,
  beneficiaries: Number,
  startDate: Date,
  endDate: Date,
  status: String,
});

module.exports = mongoose.model("Program", programSchema);
