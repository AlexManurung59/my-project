import OurTeamsSlider from "@/Components/OurTeamsSlider";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Particle from "@/Components/Particle";

const OurTeams = () => {
  return (
    <div className="bg-[#67C6E3] pt-[4rem] md:pt-[8rem] bg-cover h-[100vh]">
      <Particle />
      <div className="absolute left-0 top-0 h-160 w-160">
        <h1>
          <Link href="/">
            <Image src="/images/Logo.png" alt="photo" width={150} height={50} />
          </Link>
        </h1>
      </div>
      <h1 className="heading">
        Our <span className="text-orange-500">Teams</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        {/* Our Team Slider */}
        <OurTeamsSlider />
      </div>
    </div>
  );
};

export default OurTeams;
