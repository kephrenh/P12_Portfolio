import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get("/project");
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section id="works" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Works</p>
        <h2 className="py-4">What {"I've"} Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
