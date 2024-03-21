import React from "react";
import { skillsData } from "../data/database";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">Compétences</p>
        <h2 id="skills" className="py-4">
          Langages
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map(({ text, img }, index) => {
            return (
              <div
                key={"skills-logo_" + index}
                className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
                <div className="grid items-center justify-center grid-cols-2 gap-4">
                  <div className="m-auto">
                    <img className="w-[64px] h-[64px]" src={img} alt={text} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="uppercase">{text}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
