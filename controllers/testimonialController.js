const Testimonial = require("../models/testimonial");

exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    const { name, role, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: "Name and description are required" });
    }

    const imageUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    const testimonial = new Testimonial({
      name,
      role,
      description,
      image: imageUrl
    });

    await testimonial.save();

    res.status(201).json({ message: "Testimonial saved", testimonial });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
