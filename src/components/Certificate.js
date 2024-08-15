import React from "react";

const AWSBadge = ({ title, category, level }) => {
  return (
    <div
      className=" group m-2"
      onClick={() =>
        window.open(
          "https://www.cloudskillsboost.google/public_profiles/a9834c5e-0c9c-4dd0-b897-341ca1beffaf",
          "_blank",
          "noreferrer"
        )
      }
    >
      <div className=" flex flex-col w-[300px] h-52 rounded-[1.25rem] p-6 border border-b-4 border-[#787579] bg-cover my-3 bg-[url('/src/assets/images/bg3.png')] shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:z-200 group-hover:translate-x-6 group-hover:translate-y-[-10px]">
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
    </div>
  );
};

const Badge = ({ img }) => {
  return (
    <div
      className=" group m-2"
      onClick={() =>
        window.open(
          "https://www.credly.com/users/christan-wilbert",
          "_blank",
          "noreferrer"
        )
      }
    >
      <div className="flex flex-col w-[300px] h-52 rounded-[1.25rem] p-6 border border-b-4 border-[#787579] bg-cover my-3 bg-[url('/src/assets/images/bg3.png')] object-contain shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:z-200 group-hover:translate-x-6 group-hover:translate-y-[-10px]">
        <img
          className="object-contain w-full h-full"
          src={require(`../assets/images/${img}`)}
        />
      </div>
    </div>
  );
};

const Certificate = () => {
  return (
    <div
      id="certificate"
      className=" relative h-max mx-8 my-[100px] text-[#C0BAC3] bg-fixed bg-cover rounded-xl bg-[url('/src/assets/images/bg21.png')] font-['Helvetica']"
    >
      <div className="absolute top-[-.5%] md:top-[-50px] px-8 font-['Weimar'] text-[#ffffff] text-3xl md:text-[80px]">
        CERTIFICATES
      </div>
      <p className="w-[70%] px-10 py-16 text-lg">
        Skill Badges and Certification earned while mastering various tools and
        technologies
      </p>
      <div className="absolute top-[50px] right-[50px] px-8 ">
        <img src={require("../assets/images/badge.png")} />
      </div>
      <div className="mx-auto w-[80%] flex flex-wrap justify-center pb-8 space-x-[-80px]">
        <AWSBadge
          title={"Perform Foundational Infrastructure Tasks in Google Cloud"}
          category={"Infrastructure Modernization"}
          level={"PROFESSIONAL"}
        />
        <AWSBadge
          title={"Set Up and Configure a Cloud Environment in Google Cloud"}
          category={"Infrastructure Modernization"}
          level={"INTERMEDIATE"}
        />

        <AWSBadge
          title={"Create and Manage Cloud Resources"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <AWSBadge
          title={"Getting Startd with Google Kubernetes Engine"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <AWSBadge
          title={"Elastic Google Cloud Infrastructure: Scaling and Automation"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <AWSBadge
          title={"Essential Google Cloud Infrastructure: Core Services"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <AWSBadge
          title={"Essential Google Cloud Infrastructure: Foundation"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <AWSBadge
          title={"Essential Google Cloud Infrastructure: Core Infrastructure"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <AWSBadge
          title={"Preparing for Associate Cloud Engineering"}
          category={"Infrastructure Modernization"}
          level={"INTRODUCTORY"}
        />
        <Badge img="aws_cloud _foundations _badge.png" />

        <Badge img="cloud-digital-leader-certification.png" />
        <Badge img="aws-certified-cloud-practitioner (1).png" />
      </div>
    </div>
  );
};
export default Certificate;
