const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { getTestimonials, createTestimonial } = require("../controllers/testimonialController");

// Fetch all clients
router.get("/", getTestimonials);

// Add new client testimonial
router.post("/", upload.single("image"), createTestimonial);

module.exports = router;
