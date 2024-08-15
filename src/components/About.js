import React from "react";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <div className="overflow-hidden w-full">
      <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
        <div className=" flex flex-col md:flex-row relative mx-2 md:mx-10 text-[#C0BAC3] bg-cover my-10 rounded-3xl bg-[url('/src/assets/images/bg1.png')] font-['impact']">
          <div className="w-full md:w-[60%]">
            <p className="absolute md:leading-[5rem] top-[-3%] md:top-[-50px] left-[50px] md:w-[35%] text-2xl md:text-[5vw] ">
              HEY THERE,
              <br /> I'M CHRISTAN
            </p>
            <p className="pt-[12vw] px-6 md:pl-[4.8rem] font-['Helvetica'] text-justify md:text-left text-sm md:text-base">
              It is more than business to me to ensure that all the business out
              their get the exposure that they deserve to ensure their products
              and services reach the customers in a seamless and continuious
              fashion. I would personaly make sure that everythig runs smooth
              with the application of the latest technology.
            </p>
            <div className="px-auto md:px-10">
              <p className="p-8 font-['impact'] text-[30px]">Contact</p>
              <div className="inline m-8 rounded-xl border-2 border-[#787579] text-[#787579] p-6">
                cwchristan@gmail.com
              </div>
            </div>
          </div>
          <div className="mx-auto width-full md:w-[40%] font-['Helvetica']">
            <div className="p-[3.5rem] m-10 rounded-[90px] border-2 border-[#151412]">
              <div className="text-[20px] text-[#C0BAC3] px-4">QUICK LINKS</div>
              <div className="text-[40px] text-white pb-4 pl-4">
                Social Handles
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row w-full justify-around align-baseline">
                  <div>
                    <img src={require("../assets/images/insta.png")}></img>
                  </div>
                  <div className="my-auto">
                    <p className="font-bold text-[24px]"> Instagram</p>
                    <p className="text-[16px]">@christan_wilbert</p>
                  </div>
                  <a href="">
                    <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                      GO
                    </div>
                  </a>
                </div>
                <div className="flex flex-row w-full justify-around align-baseline">
                  <div>
                    <img
                      src={require("../assets/images/linkedinlogo.png")}
                    ></img>
                  </div>
                  <div className="my-auto">
                    <p className="font-bold text-[24px]">Linkedin</p>
                    <p className="text-[16px]">@christan_wilbert</p>
                  </div>
                  <a href="https://www.linkedin.com/in/christan-wilbert/">
                    <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                      GO
                    </div>
                  </a>
                </div>
                <div className="flex flex-row w-full justify-around align-baseline">
                  <div>
                    <img
                      src={require("../assets/images/discordlogo.png")}
                    ></img>
                  </div>
                  <div className="my-auto">
                    <p className="font-bold text-[24px]">Discord</p>
                    <p className="text-[16px]">@christan_wilbert</p>
                  </div>
                  <a href="https://discordapp.com/users/christan6016">
                    <div className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3">
                      GO
                    </div>
                  </a>
                </div>
                <div className="flex flex-row w-full justify-around align-baseline">
                  <div>
                    <img src={require("../assets/images/gitlogo.png")}></img>
                  </div>
                  <div className="my-auto">
                    <p className="font-bold text-[24px]">GitHub</p>
                    <p className="text-[16px]">@christan_wilbert</p>
                  </div>
                  <a href="https://github.com/ChristanWilbert">
                    <div
                      id="certificate"
                      className="my-auto rounded-l-full rounded-r-full text-[20px] text-white bg-[#2E2E2F] px-6 py-3"
                    >
                      GO
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default About;
