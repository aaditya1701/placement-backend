require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");
const projectRoutes = require("./routes/project");
const testimonialRoutes = require("./routes/testimonial");
const subscribeRoutes = require("./routes/subscribe");
const adminRoutes = require("./routes/admin");




const app = express();

app.use(cors());

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/subscribe", subscribeRoutes);
// Login route
app.use("/api/admin", adminRoutes);

// Example protected route
const verifyAdmin = require("./middleware/auth");
app.get("/api/admin/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome Admin", admin: req.admin });
});


// Test route
app.get("/", (req, res) => res.send("FLIPR Backend is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
