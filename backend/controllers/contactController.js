const Contact = require("../models/Contact");
const sendMail = require("../utils/mailSender");

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    await sendMail(
      process.env.EMAIL_USER,
      "New Contact Message",
      `Contact Details:
      Name: ${req.body.name}
      Email: ${req.body.email}
      Message: ${req.body.message}`,
    );

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
