const Donation = require("../models/Donation");
const sendMail = require("../utils/mailSender");

exports.createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    await sendMail(
      process.env.EMAIL_USER,
      "New Donation Interest",
      `Donation Request:
      Name: ${req.body.name}
      Email: ${req.body.email}
      Amount: ${req.body.amount}
      Purpose: ${req.body.purpose}`,
    );

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
