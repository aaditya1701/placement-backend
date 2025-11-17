const Subscription = require("../models/subscription");

exports.addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Avoid duplicate emails
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Already subscribed" });
    }

    await Subscription.create({ email });

    res.status(201).json({ message: "Subscribed successfully!" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
