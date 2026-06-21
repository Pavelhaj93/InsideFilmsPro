"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ x: "-200px" }} // start shifted left
        animate={{ x: "0px" }} // move to normal position
        transition={{
          duration: 20, // slow, cinematic
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/1.jpg"
          alt="Insidepro background"
          width={2400}
          height={2000}
          className="object-cover min-w-[calc(100%+200px)] h-full"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-white px-6 h-1/2 top-1/2 transform -translate-y-1/2 w-3/4 mx-auto -translate-x-[100px]">
        {/* Left square */}

        <div className="bg-yellow-300 md:w-72 md:h-64 w-56 h-56 flex items-center justify-center p-6 text-center self-start">
          <p className="text-7xl font-semibold leading-snug text-black">
            HELLO
            <br />
            WE ARE
          </p>
        </div>
        {/* Vertical separator */}
        <div className="hidden md:block w-px h-[450px] bg-white mx-8"></div>

        <div className="self-end">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            INSIDE<span className="text-yellow-300">PRO</span> & INSIDE
            <span className="text-yellow-300">FILMS</span>
          </h1>
          <p className="text-lg">
            Our journey began with film production. Today we also create content
            and campaigns that connect brands with emotions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
