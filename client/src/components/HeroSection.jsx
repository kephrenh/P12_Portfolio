import React from "react";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
        <p className="text-sm tracking-widest text-gray-600 uppercase">
          {"your website, my passion"}
        </p>
        <h1 className="py-4 text-gray-700">
          Hi, {"I'm"} <span className="text-[#5651e5]">Mohamed</span>
        </h1>
        <h1 className="py-2 text-gray-700">A Front-End Web Developper</h1>
        <p className="py-4 text-gray-600 max-w-[70%] m-auto">
          I am a front-end web developper who is specializing himself in building exceptional
          digital experiences. Currently, {"I'm"} focused on building responsive front-end web
          applications to master the fundamentals and skill up.
        </p>
        <div className="flex items-center justify-between m-auto max-w-[330px]">
          <SocialIcons padding="p-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
