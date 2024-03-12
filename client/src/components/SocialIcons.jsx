import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = ({ padding }) => {
  return (
    <>
      <Link href="https://www.linkedin.com/in/mohamed-amoussa-665882212/">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <FaLinkedinIn />
        </div>
      </Link>
      <Link href="https://github.com/kephrenh">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <FaGithub />
        </div>
      </Link>
      <Link href="mailto: mohamedj81@hotmail.com">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <AiOutlineMail />
        </div>
      </Link>
      <Link href="/" title="Call">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <BsFillPersonLinesFill />
        </div>
      </Link>
    </>
  );
};

export default SocialIcons;
