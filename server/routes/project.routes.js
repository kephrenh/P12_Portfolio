const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  editProject,
  deleteProject,
  updateProject,
} = require("../controllers/project.controllers");

// Fetch all projects
router.get("/", getProjects);

// Fetch a project by id
router.get("/:id", getProject);

// Add a new project
router.post("/", createProject);

// Edit a project
router.put("/:id", editProject);

// Update a project
router.patch("/:id", updateProject);

// Delete a project
router.delete("/:id", deleteProject);

module.exports = router;
