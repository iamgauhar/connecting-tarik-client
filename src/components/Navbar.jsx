import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { PiToggleRightFill, PiToggleLeftLight } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import ReactLogo from '../assets/react.svg';

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleNav = (e) => {
        setIsOpen(!isOpen);
    };
    return (
        <header className=" flex justify-between md:justify-around md:p-0 px-14 h-20 items-center w-full">
            <div>
                <img src={ReactLogo} alt="logo" />
            </div>
            <nav className="">
                <ul
                    className={`flex shadow-xl pt-24 md:translate-x-0 md:pt-0 w-full left-0 right-0 md:justify-center gap-4 md:gap-8 text-lg flex-col md:flex-row fixed md:relative top-20 md:top-0 h-screen items-center md:h-0 md:transition-none transition-all duration-700 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>

                    <div
                        onClick={setDarkMode}
                        className=" md:pl-14 flex justify-between items-center w-[270px] md:w-auto px-6 rounded-3xl bg-gray-50 md:bg-white md:rounded-none "
                    >
                        <p className="text-sm md:hidden font-normal text-gray-500 ">
                            Appearance
                        </p>
                        {darkMode ? (
                            <PiToggleRightFill size={40} className="" />
                        ) : (
                            <PiToggleLeftLight size={40} />
                        )}
                    </div>
                </ul>
                <hr className="fixed top-20 left-0 right-0 w-[90%] mx-auto" />

                <div className="md:hidden cursor-pointer" onClick={handleNav}>
                    {!isOpen ? <LuMenu size={30} /> : <LuX size={30} />}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
