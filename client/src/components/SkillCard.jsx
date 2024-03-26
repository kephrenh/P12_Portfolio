import React from "react";

const SkillCard = ({ skills }) => {
  return (
    <>
      {skills.map(({ text, img }, index) => {
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
    </>
  );
};

export default SkillCard;
