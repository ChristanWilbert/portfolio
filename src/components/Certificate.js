import React from "react";

const Badge = ({ title, category, level }) => {
  return (
    <div className="flex flex-col w-[290px] rounded-[1.25rem] p-6 border border-b-4 border-[#787579] bg-cover m-3 bg-[url('/src/assets/images/bg3.png')]">
      <img className="mx-auto" src={require("../assets/images/badge2.png")} />
      <div className="text-center font-['Helvetica'] text-[18px] text-[#C0BAC3]">
        {title}
      </div>
      <div className="text-center p-1 font-['HelveticaNueRoman'] text-[10px] text-[#787579]">
        {category}
      </div>
      <hr className="w-[50px] p-1 h-10px mx-auto" />
      <div className="flex flex-row justify-evenly mx-8 font-['DM Mono'] text-[8.5px] text-[#787579]">
        <div>SKILL BADGE</div>
        <div>&#183;</div>
        <div>{level}</div>
      </div>
    </div>
  );
};

const Certificate = () => {
  return (
    <div className=" relative mx-8 my-[100px] text-[#C0BAC3] bg-cover my-10 rounded-xl bg-[url('/src/assets/images/bg2.png')] font-['Helvetica']">
      <div className="absolute top-[-50px] px-8 font-['Weimar'] text-[#ffffff] text-[80px]">
        CERTIFICATES
      </div>
      <p className="w-[70%] px-8 py-[60px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <div className="absolute top-[50px] right-[50px] px-8 ">
        <img src={require("../assets/images/badge.png")} />
      </div>
      <div className="mx-auto w-[80%] flex flex-wrap justify-center pb-8">
        <Badge
          title={"Create and Manage Cloud Resources"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge
          title={"Set Up and Configure a Cloud Environment in Google Cloud"}
          category={"Infrastructure Modernization"}
          level={"INTERMEDIATE"}
        />
        <Badge
          title={"Perform Foundational Infrastructure Tasks in Google Cloud"}
          category={"Infrastructure Modernization"}
          level={"PROFESSIONAL"}
        />
        <Badge
          title={"Getting Startd with Google Kubernetes Engine"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge
          title={"Elastic Google Cloud Infrastructure: Scaling and Automation"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge
          title={"Essential Google Cloud Infrastructure: Core Services"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge
          title={"Essential Google Cloud Infrastructure: Foundation"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge
          title={"Essential Google Cloud Infrastructure: Core Infrastructure"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge
          title={"Preparing for Associate Cloud Engineering"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
      </div>
    </div>
  );
};
export default Certificate;
