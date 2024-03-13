const Project = require("../models/project.model");
const asyncHandler = require("express-async-handler");

// Fetch All Projects
module.exports.getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Fetch A Project By Id
module.exports.getProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Add A New Project
module.exports.createProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Edit A Project
module.exports.editProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body);
    // Project not found in database
    if (!project) {
      res.status(404);
      throw new Error(`Cannot find any project with ID ${id}`);
    }
    const updatedProject = await Project.findById(id);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Update A Project
module.exports.updateProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const project = await Project.findByIdAndUpdate(id, { $set: updates });
    if (!project) {
      res.status(404);
      throw new Error(`Cannot find any project with ID ${id}`);
    }
    const updatedProject = await Project.findById(id);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Delete A Project
module.exports.deleteProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    // Project not found in database
    if (!project) {
      res.status(404);
      throw new Error(`Cannot find any project with ID ${id}`);
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
