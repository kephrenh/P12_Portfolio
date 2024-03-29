import React, { useEffect, useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import { linksData } from "../data/database.js";
import NavbarLinks from "./NavbarLinks";
import SocialIcons from "./SocialIcons.jsx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname === `/project/${id}`) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [location, id]);

  useEffect(() => {
    window.addEventListener("resize", e => {
      if (e.target.innerWidth >= 640) {
        setNav(false);
      }
    });
    return () => {
      window.addEventListener("resize", () => {});
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? "fixed  w-full h-20 shadow-xl z-[100]" : "fixed  w-full h-20 z-[100]"}>
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link to="/">
          <span id="logo" className="text-xl text-[#5651e5] kaushan">
            MA
          </span>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden gap-10 uppercase md:flex">
            <NavbarLinks onClick={() => setNav(false)} links={linksData} />
            <li>
              <Link
                className="text-sm hover:text-[#5651e5] hidden font-semibold transition-all duration-300"
                to="/login">
                login
              </Link>
            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            className="cursor-pointer md:hidden"
            onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-110%] top-0 p-10 ease-in duration-500 "
          }>
          <div>
            <div className="flex items-center justify-between wfull">
              <Link to="/">
                <span className="text-3xl text-[#5651e5] kaushan">MA</span>
              </Link>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                {"Construisons ensemble un site exceptionnel"}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="flex flex-col gap-10 uppercase">
              <NavbarLinks onClick={() => setNav(false)} links={linksData} />
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">{"Restons en contact"}</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <SocialIcons padding="p-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
