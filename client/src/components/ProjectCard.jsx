import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <article
            key={"Project_" + index}
            className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="object-cover w-full h-full rounded-xl group-hover:opacity-10"
              src={project.image}
              alt="Project Bg"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl tracking-wider text-center text-white">{project.name}</h3>
              <p className="pt-2 pb-6 text-center text-white">{project.description}</p>
              <Link to={`/project/${project._id}`} target="_blank">
                <p className="py-3 font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ProjectCard;
