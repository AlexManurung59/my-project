import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] h-[50px] fixed z-[10000] top-0 has-[12vh] bg-[#37a6b0] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto px-[50px] h-[100%]">
        <div>
          <h1>
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="photo"
                width={150}
                height={50}
              />
            </Link>
          </h1>
        </div>
        {/* Navigation links using Link component */}
        <Link className="nav-link " href="/">
          Home
        </Link>
        <div className="nav-link">
          <Link href="/about">About Us</Link>
        </div>
        <div className="nav-link">
          <Link href="/product">Products</Link>
        </div>
        <div className="nav-link">
          <Link href="/team">Our Team</Link>
        </div>
        <div className="nav-link">
          <Link href="/testimonial">Testimonials</Link>
        </div>
        <div className="nav-link">
          <Link href="/contact">Contact</Link>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
