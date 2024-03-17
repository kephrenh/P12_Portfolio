import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const data = projects.find(project => project._id === id);
  document.title = data?.name;

  const getProjects = async () => {
    try {
      const response = await axios.get("/projects");
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {data ? (
        <div className="w-full">
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
            <img className="absolute object-cover w-full h-full" src={data.banner} alt="/" />
            <div className="absolute z-10 p-2 text-gray-100 top-[70%] max-w-[1240px] w-full  left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="py-2">{data.name}</h2>
              <p className="font-semibold tracking-widest">{data.description}</p>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
            <div className="col-span-4">
              <p className="uppercase text-[#5651e5] tracking-widest text-xl ">Project</p>
              <h2>Overview</h2>
              {data.overview.map((content, index) => {
                return (
                  <p key={"overview_" + index} className="grid grid-cols-1 gap-3 py-4">
                    {content}
                  </p>
                );
              })}
              <div className="flex gap-8">
                <Link to={data.github} target="_blank">
                  <button className="px-8 py-2 mt-4 uppercase shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                    code
                  </button>
                </Link>
                <Link to={data.website} target="_blank">
                  <button className="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                    demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
              <div className="p-2">
                <p className="pb-2 font-bold text-center">Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  {data.technologies.map((item, index) => {
                    return (
                      <p
                        key={"data-techno_" + index}
                        className="flex items-center py-2 text-gray-600">
                        <RiRadioButtonFill className="pr-1" />
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Project;
