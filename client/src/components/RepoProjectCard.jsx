import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RepoProjectCard = ({ project, getProjects }) => {
  const deleteProject = async id => {
    const result = await Swal.fire({
      title: "Do you really want to delete the project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(`/projects/${id}`);
        toast.success(`Project ${project.name} deleted!`);
        getProjects();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <article className="flex flex-col m-4 w-full overflow-hidden bg-white shadow-lg rounded-xl">
      <img src={project.image} className="object-cover w-full h-28" alt={project.name} />
      <div className="px-4 pt-2 pb-4 ">
        <span className="font-semibold text-lg">{project.name}</span>
        <div className="flex gap-4 mt-2">
          <Link
            to={`/edit/${project._id}`}
            className="inline-block w-full px-4 py-1 text-sm font-bold text-center text-white bg-gray-700 rounded-sm shadow-md cursor-pointer hover:bg-gray-600">
            Edit
          </Link>
          <button
            onClick={() => deleteProject(project._id)}
            className="inline-block w-full px-4 py-1 text-sm font-bold text-center text-white bg-red-700 rounded-sm shadow-md cursor-pointer hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default RepoProjectCard;
