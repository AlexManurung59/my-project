import React from "react";
import Image from "next/image";
import Link from "next/link";
import Particle from "@/Components/Particle";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";

const Products = () => {
  return (
    <div className="bg-[#CCD3CA] pt-[4rem] md:pt-[8rem] pb-[5rem] h-[100vh]">
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
      <div>
        <h1 className="heading text-black">
          Our <span className="text-orange-600">Products</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src="/images/p1.png" alt="photo" width={100} height={100} />
          </div>
          <p>
            makes wear packs of all sizes with high-quality materials and
            affordable prices
          </p>
        </div>
        <div>
          <div className="bg-orange-600 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/p2.png"
                alt="photo"
                width={100}
                height={100}
              />
            </div>
            <p>
              makes uniforms for sailors of all sizes with high quality
              materials and affordable prices
            </p>
          </div>
        </div>
        <div>
          <div className="bg-green-400 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/p3.png"
                alt="photo"
                width={100}
                height={100}
              />
            </div>
            <p>
              We can also customize names, logos, and companies and ship names
              according to orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
