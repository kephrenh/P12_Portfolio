import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RepoProjectCard from "./RepoProjectCard";

const RepoProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjects = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/projects");
      // console.log(response.data);
      setProjects(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container h-screen px-4 pt-20 mx-auto">
      <h1>Repository</h1>
      <div className="gap-4 mt-5 grid sm:grid-cols-2 lg:grid lg:grid-cols-4">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {projects.length > 0 ? (
              <>
                {projects.map((project, index) => {
                  return (
                    <RepoProjectCard key={index} project={project} getProjects={getProjects} />
                  );
                })}
              </>
            ) : (
              <div>There is no project</div>
            )}
          </>
        )}
      </div>
      <div className="inline-block px-4 py-2 mt-4 text-white bg-blue-700 rounded-sm cursor-pointer hover:bg-blue-600">
        <Link to="/create" target="_blank">
          Create a Project
        </Link>
      </div>
    </div>
  );
};

export default RepoProjectsSection;
