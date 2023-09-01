import React from "react";

const skillLevel = (val) => {
  const num = [];
  for (let index = 0; index < val; index++) {
    num.push(
      <img
        className="p-[3px] object-contain"
        src={require("../assets/images/bon.png")}
        key={index}
      />
    );
  }
  for (let index = 0; index < 10 - val; index++) {
    num.push(
      <img
        className="p-[3px] object-contain"
        src={require("../assets/images/boff.png")}
        key={index}
      />
    );
  }
  return <div className="flex flex-row no-wrap px-2 mr-0">{num}</div>;
};
const Skills = () => {
  return (
    <div
      className="relative m-8 rounded-xl 
    p-8 bg-[url('/src/assets/images/bg4.png')] bg-cover
    shadow-inner shadow-[0_0_19px_-6px_rgba(213,255,47,0.80)_inset]"
    >
      <div className="absolute font-['Weimar'] top-[-50px] text-white text-[80px] font-bold">
        SKILLS
      </div>
      <div className="flex flex-row m-8 text-white">
        <div>
          <div className="font-['Weimar'] text-[20px] text-center tracking-[10px] p-6">
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
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
