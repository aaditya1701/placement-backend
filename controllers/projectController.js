const Project = require("../models/Project");

// GET all
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new
exports.createProject = async (req, res) => {
  try {
    const { title, projectName, location, image, description } = req.body;

    if (!title || !projectName || !image) {
      return res.status(400).json({ error: "title, projectName and image are required" });
    }

    const project = new Project({
      title,
      projectName,
      location,
      image,
      description
    });

    await project.save();

    res.status(201).json({ message: "Project added", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
