import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">{"// La curiosité me définirait bien"}</p>
          <p className="py-2 text-gray-600">
            {
              "La lecture et l'écriture, mes activités favorites m'ont conduite sur la voie du code. Tombé par hasard sur un cours de HTML, je me rappelle m'être dit que ce n'était pas si différent d'écrire avec Word. Malgré ma curiosité pour cette connaissance complètement nouvelle, il m'a fallu un peu plus que ça pour me décider à emprunter la voie du développement."
            }
          </p>
          <p className="py-2 text-gray-600">
            {
              "Originellement comptable, je cherchais naturallement un emploi dans le domaine, et mon premier obejectif était de me former sur l'un des logiciels comptables les plus utlisés. Pour je ne sais quelle raison, l'idée de construire mon proper logiciel comptable m'a traversé l'esprit, et j'ai immédiatement fait des recherches dans ce sens."
            }
          </p>
          <p className="py-2 text-gray-600">
            {
              "Un an plus tard, me voilà conscient de la difficulté que présente mon idée. Je n'abandonne par ce projet, cela me prendra du temps, mais en attendant je gagnerai les compétences et connaissances nécessaires une application web après une autre."
            }
          </p>
          <a href="#works" className="py-2 text-gray-600 underline cursor-pointer">
            Quelques-uns de mes projects
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="/assets/about.jpg" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
