const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  purpose: String,
  paymentStatus: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Donation", donationSchema);
