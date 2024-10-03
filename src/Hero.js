import React from "react";
import background from "./assets/1.jpg";
import SocialIcons from "./SocialIcons";
import group from "./assets/Group 69.png";
import zbooma from "./assets/Group 88.png";
import watch from "./assets/clock.png";
import background1 from "./assets/Group 80.png";
import background2 from "./assets/Group 86.png";
import img1 from "./assets/Group 74.png";
import img2 from "./assets/Group 75.png";
import img3 from "./assets/Group 76.png";
import img4 from "./assets/Group 77.png";
import owl from "./assets/Group 71.png";
import owl1 from "./assets/Group 73.png";
import emplyee1 from "./assets/Group 83.png";
import emplyee2 from "./assets/Group 82.png";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen absolute">
        <img
          src={background}
          className="w-full h-screen object-cover object-top"
        />
      </div>

      <div className="w-full h-screen absolute flex pb-4">
        {/* LEFT COLUMN */}
        <div className="flex-[0.25] space-y-20 flex flex-col justify-end">
          {/* UPPER DIV */}
          <div className="space-y-1 ">
            <div className=" w-full h-fit flex justify-end">
              <div className="w-fit h-fit flex justify-center relative">
                <img src={background1} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start">
                  <p className="text-[#0cffaa]">News</p>
                  <p className="text-white">Programming Party</p>
                </div>
              </div>
            </div>
            <div className=" w-full h-fit flex justify-end">
              <div className="w-fit h-fit flex justify-center relative">
                <img src={background2} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start">
                  <p className="text-[#0cffaa]">News</p>
                  <p className="text-white">Dubai Trip</p>
                </div>
              </div>
            </div>
          </div>
          {/* LOWER DIV */}
          <div className="flex flex-col items-end w-full h-fit space-y-52 ">
            <div className="flex-[0.25] w-fit bg-[#25322B] flex justify-end items-center pt-4 px-6 rounded-[40px]">
              <img src={img1} />
              <img src={img2} />
            </div>
            <div className="flex-[0.75] bg-[#0b1618] relative w-[69%] flex items-end justify-start h-fit rounded-2xl">
              <div className="w-full text-center pl-[200px] pb-2">
                <h2 className="text-[#0cffaa] text-6xl">GM</h2>
                <p className="text-white text-xs">MUHAMMED MOUNIR</p>
              </div>
              <img src={owl} className="absolute" />
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="flex-[0.5] flex justify-center items-end">
          <div className=" w-8/12 h-[350px] overflow-hidden text-center text-4xl font-medium text-white [word-spacing:5px]">
            <h2>WELCOME TO OUR FAMILY</h2>
            <h2>
              INFO@<span className="text-[#0cffaa]">ZBOOMA</span>.COM
            </h2>
            <div className="w-full h-fit rounded-[42px] flex justify-between bg-[rgb(15,_19,_17)] bg-[linear-gradient(315deg,_rgba(15,_19,_17,_1)_44%,_rgba(72,_93,_82,_1)_100%)]">
              <div className="flex flex-col justify-center items-center spacy-[-1]">
                <img src={zbooma} className="opacity-20" />
                <p className="font-semibold">WE ALL</p>
                <p className="font-normal">BELONG TO</p>
                <img src={zbooma} />
                <img src={watch} className="rounded-xl" />
              </div>
              <img src={group} className="" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-[0.25] flex flex-col justify-end ">
          <div className="flex-[0.25] space-y-20 flex flex-col justify-start">
            {/* UPPER DIV */}
            <div className="space-y-1 ">
              <div className=" w-full h-fit flex justify-start">
                <div className=" h-[152px] flex justify-end relative w-[330px] bg-[#25322B] rounded-[40px]">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-white">The Best Employee</p>
                    <p className="text-[#0cffaa]">Muhammed Adel</p>
                  </div>
                  <img src={emplyee1} />
                </div>
              </div>
              <div className=" w-full h-fit flex justify-start">
                <div className=" h-[152px] flex justify-end relative w-[330px] bg-[#25322B] rounded-[40px]">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-white">The Best Employee</p>
                    <p className="text-[#0cffaa]">Al-Shaima Usri</p>
                  </div>
                  <img src={emplyee2} />
                </div>
              </div>
            </div>
            {/* LOWER DIV */}
            <div className="flex flex-col items-start w-full h-fit space-y-52 ">
              <div className="flex-[0.25] w-fit bg-[#25322B] flex justify-end items-center pt-4 px-6 rounded-[40px]">
                <img src={img3} />
                <img src={img4} />
              </div>
              <div className="flex-[0.75] bg-[#0b1618] relative w-[69%] flex items-end justify-start h-fit rounded-2xl">
                <div className="w-full text-center pl-[200px] pb-2">
                  <h2 className="text-[#0cffaa] text-6xl">CEO</h2>
                  <p className="text-white text-xs">SAMI AL-METWALLY</p>
                </div>
                <img src={owl1} className="absolute" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-28 left-4">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Hero;
