const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  projectName: { type: String, required: true },
  location: { type: String, default: "" },
  image: { type: String, required: true },
  description: { type: String, default: "N/A" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);
