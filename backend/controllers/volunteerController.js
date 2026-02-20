const Volunteer = require("../models/Volunteer");
const sendMail = require("../utils/mailSender");

exports.registerVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);

    await sendMail(
      process.env.EMAIL_USER,
      "New Volunteer Registration",
      `New Volunteer:
      Name: ${req.body.name}
      Email: ${req.body.email}
      Phone: ${req.body.phone}
      City: ${req.body.city}
      Skills: ${req.body.skills}
      Availability: ${req.body.availability}`,
    );

    res.status(201).json(volunteer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
