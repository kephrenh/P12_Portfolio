import React from "react";
import TabsSection from "./TabsSection";

const AboutSection = () => {
  return (
    <section className="flex items-center w-full p-2 py-16 md:h-screen" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">{"// De la comptabilité au développement"}</p>
          <p className="py-2 text-gray-600">
            {
              "En voulant devenir un meilleur comptable, j'ai fini par devenir développeur. La raison? Je voulais construire un logiciel comptable qui serait simple d'utilisation et plus intuitif. Une recherche menant à une autre, j'ai découvert l'univers du développement."
            }
          </p>
          <p className="py-2 text-gray-600">{""}</p>
          <p className="py-2 text-gray-600">
            {
              "Me voilà, un an et une formation plus tard. Ai-je construit mon logiciel comptable? Non. Mais j'ai désormais les compétences requises pour que mon idée ne soit pas simplement un rêve hors de portée."
            }
          </p>
          <TabsSection />
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <img className="rounded-xl" src="/assets/about.jpg" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
