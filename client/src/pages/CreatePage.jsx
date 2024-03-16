import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  // const [overview, setOverview] = useState("");
  const [technologies, setTechnologies] = useState("");

  const createProject = async e => {
    e.preventDefault();

    if (
      name === "" ||
      description === "" ||
      image === "" ||
      banner === "" ||
      github === "" ||
      technologies === "" ||
      // overview === "" ||
      website === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("/projects", {
        name: name,
        description: description,
        image: image,
        banner: banner,
        github: github,
        website: website,
        // overview: overview,
        technologies: technologies.split(" "),
      });
      toast.success(`Project ${response.data.name} created!`);
      navigate("/repository");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-screen py-20 rounded-xl">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center w-10/12 mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-8/12 rounded-xl">
          <div className="flex flex-col justify-center w-full px-12 pb-16 lg:w-1/2 lg:py-16">
            <h2 className="mb-4 text-3xl">New Project</h2>
            <p className="mb-4">Add a new project to your portoflio.</p>
            <form onSubmit={createProject}>
              <div className="mt-5">
                <label className="hidden" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name..."
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="description">
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Descritpion..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="github">
                  Github
                </label>
                <input
                  id="github"
                  name="github"
                  type="text"
                  value={github}
                  onChange={e => setGithub(e.target.value)}
                  placeholder="Github url..."
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="website">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="Website url..."
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="website">
                  Image
                </label>
                <input
                  id="image"
                  type="text"
                  placeholder="Image..."
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="banner">
                  Banner
                </label>
                <input
                  id="banner"
                  type="text"
                  placeholder="Banner..."
                  value={banner}
                  onChange={e => setBanner(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              <div className="mt-5">
                <label className="hidden" htmlFor="technologies">
                  Technologies
                </label>
                <input
                  id="technologies"
                  type="text"
                  placeholder="Technology1 technology2 ..."
                  value={technologies}
                  onChange={e => setTechnologies(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div>
              {/* <div className="mt-5">
                <label className="hidden" htmlFor="overview">
                  Overview
                </label>
                <textarea
                  id="overview"
                  type="text"
                  placeholder="Overview..."
                  rows="10"
                  value={overview}
                  onChange={e => setOverview(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-400"
                />
              </div> */}
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full p-4 mt-4 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
