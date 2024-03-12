import React from "react";
import ProjectCard from "./ProjectCard";
import bankImg from "/assets/projects/argentbank.webp";
import kasaImg from "/assets/projects/kasa.webp";
import ninaImg from "/assets/projects/ninacarducci.webp";
import foodImg from "/assets/projects/ohmyfood.webp";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Works</p>
        <h2 className="py-4">What {"I've"} Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            bgImage={kasaImg}
            name="Kasa"
            stack="React JS"
            description="Agence de location immobilière"
            projectUrl="/"
          />
          <ProjectCard
            bgImage={bankImg}
            name="Argent Bank"
            stack="React JS"
            description="Implémentation front-end de l'application"
            projectUrl="/"
          />
          <ProjectCard
            bgImage={foodImg}
            name="OhMyFood"
            stack="HTML | SASS"
            description="Intégration HTML & CSS avec animations"
            projectUrl="/"
          />
          <ProjectCard
            bgImage={ninaImg}
            name="Nina Carducci"
            stack="HTML | SEO"
            description="Optimisation SEO & Accessibilité"
            projectUrl="/"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
