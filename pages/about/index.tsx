import React from "react";
import Image from "next/image";
import Particle from "@/Components/Particle";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const About = () => {
  function closeNav(): void {
    throw new Error("Function not implemented.");
  }
  return (
    <div className="bg-[#EADFB4] pb-[3rem] pt-[4rem] md:pt-[8rem] bg-cover w-[100%] h-[100vh]">
      <div>
        {/* NavBar Section*/}
        <Nav openNav={function (): void {}} />
        <MobileNav nav={false} closeNav={function (): void {}} />
      </div>
      <Particle />
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[35px] font-bold uppercase text-orange-600 mb-[1rem]">
            ABOUT US
          </h1>
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-500 rounded-sm"></span>
          <h4 className="text-[20px] md:text-[20px] lg:text-[20px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-black">
            was founded because many sailors who sail sometimes do not get
            appropriate and suitable uniforms and wear packs when working on
            ships
          </h4>
          <h2 className="text-[35px] md:text-[35px] lg:text-[35px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-black">
            know how to make seaman{" "}
            <span className="text-[#17D5DE]">
              classy, safe, and comfortable
            </span>
          </h2>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/example1.jpeg"
            alt="photo"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[80%] h-[80%] z-[10] bg-[#1594DC] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
