import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-black text-white p-4 flex flex-col md:flex-row justify-center items-center z-50 m-0">
      <div className="visible md:hidden h-20 content-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Hamburger Menu Icon */}
          <div
            className="flex flex-col "
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
        } w-full bg-black md:relative md:w-auto flex flex-col md:flex-row items-center text-lg md:text-base`}
      >
        <li className="px-2">
          <a
            href="#home"
            className="hover:text-white"
            onClick={() => {
              if (isMobile) setIsOpen(false);
            }}
          >
            HOME
          </a>
        </li>
        <li className="px-2">
          <a
            href="#about"
            className="hover:text-white"
            onClick={() => {
              if (isMobile) setIsOpen(false);
            }}
          >
            ABOUT
          </a>
        </li>
        <li className="px-2">
          <a
            href="#projects"
            className="hover:text-white"
            onClick={() => {
              if (isMobile) setIsOpen(false);
            }}
          >
            PROJECTS
          </a>
        </li>
        <li className="px-2">
          <a
            href="#certificate"
            className="hover:text-white"
            onClick={() => {
              if (isMobile) setIsOpen(false);
            }}
          >
            CERTIFICATES
          </a>
        </li>
        <li className="px-2">
          <a
            href="#skills"
            className="hover:text-white"
            onClick={() => {
              if (isMobile) setIsOpen(false);
            }}
          >
            SKILLS
          </a>
        </li>
        <li className="px-2">
          <a
            href="#contact"
            className="hover:text-white"
            onClick={() => {
              if (isMobile) setIsOpen(false);
            }}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
