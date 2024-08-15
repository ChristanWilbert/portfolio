import React from "react";
import Tilt from "react-parallax-tilt";
const Home = () => {
  return (
    <div
      className=" flex flex-col md:flex-row mx-2 md:mx-[2vw] mt-28 md:mt-20 w-full md:w-auto"
      id="home"
    >
      <div className="w-4/5 justify-center md:w-2/5 mx-auto">
        <div className="bg-white p-2 mx-auto rounded-lg relative w-full md:max-w-[370px]">
          <img
            className="absolute top-0 right-0"
            src={require("../assets/images/curved-arrow.png")}
          ></img>
          <div className="w-full">
            <img
              className="mx-auto rounded-md bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-500 to-slate-800 gradient border-8 "
              src={require("../assets/images/pic2.png")}
            ></img>
          </div>
          <div className="flex-column justify-center text-center">
            <p className="bold font-['impact'] text-3xl md:text-5xl">
              CHRISTAN WILBERT
            </p>
            <div className="p-3 font-['Helvetica']">DEVELOPER</div>
            <img
              className="mx-auto"
              src={require("../assets/images/fire.png")}
            />
            <p className="p-5 font-['Helvetica'] text-[12px]">
              A tech afiniado with crazy skills in web and mobile application
              development with AI without the A
            </p>
          </div>
        </div>
        <div className="flex rounded-l-full rounded-r-full p-4 mx-[8vw] my-10 bg-[#303435] ">
          <p className=" p-1 w-full font-['Helvetica'] text-[2vw] font-bold text-white text-center">
            Get In Touch
          </p>
          <img
            className="h-[3vw]"
            src={require("../assets/images/Group 2.png")}
          />
        </div>
      </div>
      <div className="w-full md:w-3/5 flex-column items-center text-center md:text-left">
        <div className="text-white font-['Weimar'] text-3xl md:text-8xl font-bold py-2 mt-5">
          SOFTWARE
        </div>
        <div class="text-[#454346] font-['Weimar'] text-3xl md:text-8xl font-bold">
          DEVELOPER
        </div>
        <div class="flex flex-col md:flex-row items-center">
          <div className="w-[70%] text-lg md:text-xl text-[#787579] text-center md:text-left">
            A tech aficionado with exceptional skills in web and mobile app
            development. Mastering software, web, and app development, I also
            excel in hosting on AWS and Google Cloud. Let's build the future
            together, one innovative project at a time!
          </div>
          <div className="my-2">
            <img src={require("../assets/images/ASTERIKS.png")}></img>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-full md:w-[30%] rounded-lg content-center text-center h-[150px] md:h-[250px] my-1 md:my-10 relative bg-[url('/src/assets/projects/vpackProjectContactUs.png')] bg-contain bg-no-repeat mx-1">
            <img
              className="absolute bottom-[20px] right-[20px]"
              src={require("../assets/images/Group 4.png")}
            />
          </div>

          <div className="w-full md:w-[45%] rounded-lg content-center text-center  h-[250px] relative bg-[url('/src/assets/projects/solarometerGreenify.png')] bg-contain bg-no-repeat mx-1 md:m-10">
            <img
              className="absolute bottom-[20px] right-[20px]"
              src={require("../assets/images/Group 5.png")}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <div className="text-white text-xl md:text-3xl font-bold pb-8 md:pb-1">
              What I Do For My Customers
            </div>
            <div className=" text-[#787579] text-sm md:text-base pb-4">
              Dedicated to ensuring companies achieve optimal exposure and meet
              customer expectations. I specialize in presenting businesses with
              the best look and feel on the web, creating scalable and
              high-performing mobile and web applications, and leveraging cloud
              technologies for maximum impact.
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-[30%] flex-row-reverse text-[28px] text-[#151412] font-bold">
            <Tilt>
              <div className="font-['Weimar'] text-xl rounded-lg bg-[#D5FF2F] p-1 m-2 text-center content-center">
                PYTHON
              </div>
            </Tilt>
            <Tilt>
              <div className="font-['Weimar'] text-xl rounded-lg bg-[#F46C38] p-1 m-2 text-center content-center">
                JAVA
              </div>{" "}
            </Tilt>
            <Tilt>
              <div className="px-4 font-['Weimar'] text-xl rounded-lg bg-[#F46C38] p-1 m-2 text-center content-center">
                Flutter
              </div>{" "}
            </Tilt>
            <Tilt>
              <div className="px-1 font-['Weimar'] text-xl rounded-lg bg-[#F46C38] p-1 m-2 text-center content-center">
                REACT
              </div>{" "}
            </Tilt>
            <Tilt>
              <div className="px-4 font-['Weimar'] text-xl rounded-lg bg-[#D5FF2F] p-1 m-2 text-center content-center">
                GCP
              </div>{" "}
            </Tilt>
            <Tilt>
              <div
                id="about"
                className="px-4 font-['Weimar'] text-xl rounded-lg bg-[#D5FF2F] p-1 m-2 text-center content-center"
              >
                AWS
              </div>{" "}
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
