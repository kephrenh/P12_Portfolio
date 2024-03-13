import React from "react";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
  return (
    <section className="w-full h-screen text-center">
      <div
        id="home"
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            {"your website, my passion"}
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, je suis <span className="text-[#5651e5]">Mohamed</span>
          </h1>
          <h1 className="py-2 text-gray-700">Un Développeur Front-End</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {
              "Je suis un Développeur Front-End qui se spécialise dans la construction d'expériences         digitales exceptionnelles. Je me concentre actuellement sur l'élaboration le responsive design d'applications web pour maîtriser les fondamentaux et monter en compétences."
            }
          </p>
          <div className="flex items-center justify-between m-auto max-w-[330px]">
            <SocialIcons padding="p-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
