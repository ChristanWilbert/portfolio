import React from "react";

const Home = () => {
  return (
    <div className="flex mx-[2vw]">
      <div className="w-2/5">
        <div className="bg-white p-2 mx-auto rounded-lg relative max-w-[370px]">
          <img
            className="absolute top-0 right-0"
            src={require("../assets/images/curved-arrow.png")}
          ></img>
          <div className="w-full">
            <img
              className="mx-auto rounded-sm p-6"
              src={require("../assets/images/pic.png")}
            ></img>
          </div>
          <div className="flex-column justify-center text-center">
            <p className="bold font-['impact'] text-5xl">CHRISTAN WILBERT</p>
            <div className="p-3 font-['Helvetica']">DEVELOPER & MENTOR</div>
            <img
              className="mx-auto"
              src={require("../assets/images/fire.png")}
            />
            <p className="p-5 font-['Helvetica'] text-[12px]">
              Laboris dolore laborum sit eiusmod exercitation ad id excepteur
              irure Lorem minim elit commodo. Sint aliquip aliqua consequat
              eiusmod Lorem com
            </p>
          </div>
        </div>
        <div className="flex rounded-l-full rounded-r-full p-4 mx-[8vw] my-10 bg-[#787579] ">
          <p className=" p-1 w-full font-['Helvetica'] text-[2vw] font-bold text-white text-center">
            Get In Touch
          </p>
          <img
            className="h-[3vw]"
            src={require("../assets/images/Group 2.png")}
          />
        </div>
      </div>
      <div className="w-3/5 flex-column">
        <div className="text-white font-['Weimar'] text-8xl font-bold py-2 mt-5">
          SOFTWARE
        </div>
        <div class="text-[#454346] font-['Weimar'] text-8xl font-bold">
          DEVELOPER
        </div>
        <div class="flex">
          <div className="w-[70%] text-xl text-[#787579]">
            Veniam esse aute elit dolor est aliquip officia sunt veniam
            incididunt. Do incididunt quis ex tempor pariatur exercitation nisi
            id dolor. Lorem quis ullamco cillum do elit excepteur Lorem
            adipisicing deser
          </div>
          <div>
            <img src={require("../assets/images/ASTERIKS.png")}></img>
          </div>
        </div>
        <div className="flex">
          <div className="w-[30%] rounded-lg bg-[#F46C38] h-[250px] my-10 relative">
            apple
            <img
              className="absolute bottom-[20px] right-[20px]"
              src={require("../assets/images/Group 4.png")}
            />
          </div>
          <div className="w-[45%] rounded-lg bg-[#D5FF2F] h-[250px] m-10 relative">
            mango
            <img
              className="absolute bottom-[20px] right-[20px]"
              src={require("../assets/images/Group 5.png")}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-[50%]">
            <div className="text-white text-3xl font-bold">
              What I Do For My Customers
            </div>
            <div className=" text-[#787579]">
              Amet ad voluptate dolore sint exercitation aliqua voluptate
              deserunt elit ipsum tempor. Commodo veniam excepteur non occaecat
              do officia e
            </div>
          </div>
          <div className="flex flex-wrap w-[30%] flex-row-reverse text-[28px] text-[#151412] font-bold text-neutral-900">
            <div className="font-['Weimar'] text-xl rounded-lg bg-[#D5FF2F] p-1 m-2">
              PYTHON
            </div>
            <div className="font-['Weimar'] text-xl rounded-lg bg-[#F46C38] p-1 m-2">
              JAVA
            </div>
            <div className="px-4 font-['Weimar'] text-xl rounded-lg bg-[#F46C38] p-1 m-2">
              C++
            </div>
            <div className="px-1 font-['Weimar'] text-xl rounded-lg bg-[#F46C38] p-1 m-2">
              REACT
            </div>
            <div className="px-4 font-['Weimar'] text-xl rounded-lg bg-[#D5FF2F] p-1 m-2">
              GCP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
