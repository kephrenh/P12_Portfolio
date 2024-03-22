import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = ({ padding }) => {
  return (
    <>
      <Link
        aria-label="Visitez ma page linkedin"
        to="https://www.linkedin.com/in/mohamed-amoussa-665882212/">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <FaLinkedinIn />
        </div>
      </Link>
      <Link aria-label="Visitez ma page GitHub" to="https://github.com/kephrenh">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <FaGithub />
        </div>
      </Link>
      <Link aria-label="Envoyez-moi un email" to="mailto: mohamedj81@hotmail.com">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <AiOutlineMail />
        </div>
      </Link>
    </>
  );
};

export default SocialIcons;
