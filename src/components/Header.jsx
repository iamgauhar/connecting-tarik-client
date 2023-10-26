import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full px-6 md:px-14 h-[60px] bg-blue-500 text-white fixed top-0 z-40">
      <div className="flex items-center justify-between leading-[60px] pt-3 md:pt-0">
        <div className="flex items-center gap-4">
          <p
            className="cursor-pointer md:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <RxHamburgerMenu size={21} />
          </p>
          <p className="cursor-pointer text-2xl">
            <NavLink to="/">eCom</NavLink>
          </p>
        </div>
        <div className={`flex md:items-center gap-6 relative`}>
          <div
            className={`${
              toggle ? "w-[250px] md:w-full" : "left-[-250px] md:left-0"
            } flex flex-col md:flex-row md:gap-6 pl-10 md:pl-0 md:items-center pt-[100px] md:pt-0 fixed left-0 top-0 h-[100vh] md:h-auto md:relative z-20 bg-blue-500 text-white transition-all`}
          >
            <div
              className="absolute top-[24px] right-[25px] cursor-pointer md:hidden text-2xl"
              onClick={() => setToggle(!toggle)}
            >
              <AiOutlineClose />
            </div>

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="cursor-pointer text-[25px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <FiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
