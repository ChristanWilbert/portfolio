import React from "react";
const About = () => {
  return (
    <div className=" flex relative mx-8 text-[#C0BAC3] bg-cover my-10 rounded-xl bg-[url('/src/assets/images/bg1.png')] font-['impact']">
      <div className="w-[60%]">
        <p className="absolute leading-[6rem] top-[-50px] left-[50px] w-[35%] text-[6.1vw] ">
          HEY THERE, I'M CHRISTAN
        </p>
        <p className="pt-[12vw] pl-[4.8rem] font-['Helvetica']">
          Cillum incididunt tempor sit culpa est sit in aute eiusmod amet fugiat
          cupidatat est et. Qui ea qui nulla do nulla sint sit sint eu tempor
          incididunt velit magna qui. Eu do nostrud ea occaecat qui ea dolor
          elit pariatur deserunt consequat.
        </p>
        <div className="px-10">
          <p className="p-8 font-['impact'] text-[30px]">Contact</p>
          <div className="inline m-8 rounded-xl border-2 border-[#787579] text-[#787579] p-6">
            cwchristan@gmail.com
          </div>
        </div>
      </div>
      <div className="mx-auto w-[40%] font-['Helvetica']">
        <div className="p-[3.5rem] m-10 rounded-[90px] border-2 border-[#151412]">
          <div className="text-[20px] text-[#C0BAC3] px-4">QUICK LINKS</div>
          <div className="text-[40px] text-white pb-4 pl-4">Social Handles</div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row w-full justify-around align-baseline">
              <div>
                <img src={require("../assets/images/insta.png")}></img>
              </div>
              <div className="my-auto">
                <p className="font-bold text-[24px]"> Instagram</p>
                <p className="text-[16px]">@christan_wilbert</p>
              </div>
              <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                GO
              </div>
            </div>
            <div className="flex flex-row w-full justify-around align-baseline">
              <div>
                <img src={require("../assets/images/linkedinlogo.png")}></img>
              </div>
              <div className="my-auto">
                <p className="font-bold text-[24px]">Linkedin</p>
                <p className="text-[16px]">@christan_wilbert</p>
              </div>
              <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                GO
              </div>
            </div>
            <div className="flex flex-row w-full justify-around align-baseline">
              <div>
                <img src={require("../assets/images/discordlogo.png")}></img>
              </div>
              <div className="my-auto">
                <p className="font-bold text-[24px]">Discord</p>
                <p className="text-[16px]">@christan_wilbert</p>
              </div>
              <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                GO
              </div>
            </div>
            <div className="flex flex-row w-full justify-around align-baseline">
              <div>
                <img src={require("../assets/images/gitlogo.png")}></img>
              </div>
              <div className="my-auto">
                <p className="font-bold text-[24px]">GitHub</p>
                <p className="text-[16px]">@christan_wilbert</p>
              </div>
              <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                GO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
