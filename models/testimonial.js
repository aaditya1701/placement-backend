const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: String,
    role: String, // e.g., "Home Buyer"
    description: String,
    image: String, // URL to uploaded image
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
