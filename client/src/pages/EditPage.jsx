import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: "",
    banner: "",
    github: "",
    website: "",
    // overview: overview,
    technologies: [""],
  });

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/project/${id}`);
      setProject({
        name: response.data.name,
        description: response.data.description,
        image: response.data.image,
        banner: response.data.banner,
        github: response.data.github,
        website: response.data.website,
        technologies: response.data.technologies,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateProject = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`/project/${id}`, project);
      toast.success(`Project ${project.name} updated successfully.`);
      navigate("/repository");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="w-full h-screen py-20 rounded-xl">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center w-10/12 mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-8/12 rounded-xl">
          <div className="flex flex-col justify-center w-full px-12 pb-16 lg:w-1/2 lg:py-16">
            <h2 className="mb-4 text-3xl">Update Project</h2>
            {isLoading ? (
              "Loading"
            ) : (
              <>
                <form onSubmit={updateProject}>
                  <div className="mt-5">
                    <label className="hidden" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name..."
                      value={project.name}
                      onChange={e => setProject({ ...project, name: e.target.value })}
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
                      value={project.description}
                      onChange={e => setProject({ ...project, description: e.target.value })}
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
                      value={project.github}
                      onChange={e => setProject({ ...project, github: e.target.value })}
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
                      value={project.website}
                      onChange={e => setProject({ ...project, website: e.target.value })}
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
                      value={project.image}
                      onChange={e => setProject({ ...project, image: e.target.value })}
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
                      value={project.banner}
                      onChange={e => setProject({ ...project, banner: e.target.value })}
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
                      value={project.technologies}
                      onChange={e => setProject({ ...project, technologies: e.target.value })}
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
                      Update
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
