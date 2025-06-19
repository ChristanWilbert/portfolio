import React from "react";
import boff from "../assets/images/boff.svg";
import bon from "../assets/images/bon.svg";
import { StaticCloud } from "./Cloud";

const skillLevel = (val) => {
  const num = [];
  for (let index = 0; index < val; index++) {
    num.push(
      <img
        className="mx-1 object-cover w-3 h-3"
        src={bon}
        key={index}
        alt="skill level"
      />
    );
  }
  for (let index = 0; index < 10 - val; index++) {
    num.push(
      <img
        className="mx-1 object-cover w-3 h-3"
        src={boff}
        key={index}
        alt="skill level"
      />
    );
  }
  return (
    <div className="flex flex-row no-wrap px-2 mr-0 items-center">{num}</div>
  );
};
const Skills = () => {
  return (
    <div
      id="skills"
      className="relative m-1 md:m-8 rounded-xl 
    p-8 bg-[url('/src/assets/images/bg4.png')] bg-cover shadow-[0_0_19px_-6px_rgba(213,255,47,0.80)_inset] bg-fixed"
    >
      <div className="absolute font-['Weimar'] top-[-10px] md:top-[-50px] text-white text-3xl md:text-[80px] font-bold">
        SKILLS
      </div>
      <div className="flex flex-col md:flex-row m-1 md:m-8 text-white">
        <div>
          <div className="font-['Weimar'] text-lg md:text-[20px] text-center tracking-[10px] p-6">
            INTERPERSONAL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="2"
              viewBox="0 0 354 2"
              fill="none"
            >
              <path
                d="M1 1H353"
                stroke="#C0BAC3"
                stroke-opacity="0.8"
                stroke-width="0.550592"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-['Geo'] px-4 ">Team Player</p>
            {skillLevel(8)}
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-['Geo'] px-4">Leadership</p>
            {skillLevel(9)}
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-['Geo'] px-4">Creative</p>
            {skillLevel(7)}
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-['Geo'] px-4">Networking</p>
            {skillLevel(8)}
          </div>
        </div>

        <div className="my-2">
          <StaticCloud />
        </div>
        <div className="w-full md:w-1/3">
          <div className="font-['Weimar'] texl-2xl md:text-[20px] text-left md:text-center tracking-[6px] p-6">
            LANGUAGES & TOOLS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="2"
              viewBox="0 0 354 2"
              fill="none"
            >
              <path
                d="M1 1H353"
                stroke="#C0BAC3"
                stroke-opacity="0.8"
                stroke-width="0.550592"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-wrap text-center text-sm md:text-base">
            Java, C, C++, Python, MySQL, MongoDB, HTML, CSS, bootstrap,
            Tailwind, javascript, ReactJS, ExpressJS, NodeJS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
