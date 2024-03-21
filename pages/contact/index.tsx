import React from "react";
import { MapIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import Particle from "@/Components/Particle";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";

const Footer = () => {
  return (
    <div className="pt-[300px] pb-[4rem] bg-[#9BB0C1] h-[100vh]">
      <div>
        {/* NavBar Section*/}
        <Nav openNav={function (): void {}} />
        <MobileNav nav={false} closeNav={function (): void {}} />
      </div>
      <Particle />
      <div className="absolute left-0 top-0 h-160 w-160">
        <h1>
          <Link href="/">
            <Image src="/images/Logo.png" alt="photo" width={150} height={50} />
          </Link>
        </h1>
      </div>
      <div className="grid border-b-[1px] pb-[6rem] border-gray-500 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[black] uppercase">
              address
            </h1>
            <p className="text-[17px] w-[90%] text-black opacity-60">
              Jakarta-Bandung-Cirebon, Indonesia
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[black] uppercase">
              Contact Number
            </h1>
            <p className="text-[17px] w-[90%] text-black opacity-60">
              +62 812-9704-9257{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[black] uppercase">
              Email us
            </h1>
            <p className="text-[17px] w-[90%] text-black opacity-60">
              esbeks@yahoo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
