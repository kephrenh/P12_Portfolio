const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a project name"],
    },
    description: {
      type: String,
      required: false,
    },
    overview: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    banner: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    technologies: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
