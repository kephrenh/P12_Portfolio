import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">{"// I am not your normal developper "}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem quibusdam
            tempora ab, exercitationem veniam placeat minima, minus quia dolorem tempore laborum
            praesentium saepe magni facilis, illum quod deserunt dolorum!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique repellendus nobis
            animi qui cumque rerum quod quis voluptatum, ratione ipsum aliquam temporibus
            consequatur dicta id, cum in minus, facere distinctio?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="/assets/about.jpg" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
