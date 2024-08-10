import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-black text-white p-4 flex flex-col md:flex-row justify-center items-center z-50 m-0">
      <div className="visible md:hidden h-20 ">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Hamburger Menu Icon */}
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "rgb(5, 5, 5)",
            }}
          >
            <motion.div
              className="w-6 h-1"
              initial={{ rotate: 0, marginBottom: 5 }}
              animate={{
                rotate: isOpen ? 45 : 0,
                marginBottom: isOpen ? -4 : 5,
              }}
              style={{
                backgroundColor: "rgb(230, 230, 230)",
              }}
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? -45 : 0 }}
              className="w-6 h-1 "
              style={{
                backgroundColor: "rgb(230, 230, 230)",
              }}
            ></motion.div>
          </div>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } w-full bg-black md:relative md:w-auto flex flex-col md:flex-row items-center`}
      >
        <li className="p-2">
          <a href="#home" className="hover:text-white">
            HOME
          </a>
        </li>
        <li className="p-2">
          <a href="#about" className="hover:text-white">
            ABOUT
          </a>
        </li>
        <li className="p-2">
          <a href="#projects" className="hover:text-white">
            PROJECTS
          </a>
        </li>
        <li className="p-2">
          <a href="#certificate" className="hover:text-white">
            CERTIFICATES
          </a>
        </li>
        <li className="p-2">
          <a href="#skills" className="hover:text-white">
            SKILLS
          </a>
        </li>
        <li className="p-2">
          <a href="#contact" className="hover:text-white">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
