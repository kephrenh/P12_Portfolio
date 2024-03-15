import React from "react";

const NavbarLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={"link_" + index}>
          <a
            className="text-sm hover:text-[#5651e5] font-semibold transition-all duration-300"
            href={link.path}>
            {link.text}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavbarLinks;
