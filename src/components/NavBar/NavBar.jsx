import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { Hamburger } from "./Hamburger";
import { navLinks } from "../../utils";

const Option = ({ name, link }) => {
  return (
    <li className="mx-2">
      <NavHashLink smooth to={`/#${link}`} activeClassName="text-purple-600">
        {name}
      </NavHashLink>
    </li>
  );
};

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-row justify-center z-40 bg-white">
      <nav className="border-b-2 w-full md:w-11/12 p-1 md:p-4 flex flex-row justify-between items-center">
        <h3 className="font-extrabold">nullBrains.</h3>
        <ul className="md:flex flex-row hidden ">
          {navLinks.map(({ name, link }) => (
            <Option name={name} link={link} key={name} />
          ))}
        </ul>
        <div className="flex">
          <button className="sec-btn mr-2">Sign Up</button>
          <button className="sm-pry-btn">Sign Up</button>
          <Hamburger />
        </div>
      </nav>
    </div>
  );
};
