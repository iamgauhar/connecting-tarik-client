import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
// import { PiToggleRightFill, PiToggleLeftLight } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
// import ReactLogo from '../assets/react.svg';
import { BiSearch } from "react-icons/bi"

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleNav = (e) => {
        setIsOpen(!isOpen);
    };
    return (
        <header className=" flex justify-between md:justify-between md:px-12 px-14 h-[60px] items-center w-full bg-blue-500">
            <div className='text-2xl font-semibold text-white'>
                eCom
            </div>
            <nav className="text-white flex items-center gap-4
            ">

                <ul
                    className={`flex shadow-xl bg-blue-500 text-[24px] md:text-[13px] gap-5 pt-24 md:translate-x-0 md:pt-0 w-full left-0 right-0 md:justify-center md:gap-8 text-lg flex-col md:flex-row fixed md:relative top-20 md:top-0 h-screen items-center md:h-0 md:transition-none transition-all duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } text-[15px]`}
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

                </ul>


                {/* <hr className="fixed top-20 left-0 right-0 w-[90%] mx-auto" /> */}

                <div className="md:hidden cursor-pointer" onClick={handleNav}>
                    {!isOpen ? <LuMenu size={30} /> : <LuX size={30} />}
                </div>
                <p className='cursor-pointer'><BiSearch size={24} /></p>
            </nav>
        </header>
    );
}

export default Navbar;
