import React from "react";
import { skillsData } from "../data/database";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">Compétences</p>
        <h2 id="skills" className="py-4">
          Langages
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <SkillCard skills={skillsData} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
