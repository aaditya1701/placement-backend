const Contact = require("../models/contact");

// POST /api/contact
exports.createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    // Basic validation
    if (!fullName || !email) {
      return res.status(400).json({ error: "Full name and email are required" });
    }

    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();

    res.status(201).json({ message: "Contact saved successfully", contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/contact
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
