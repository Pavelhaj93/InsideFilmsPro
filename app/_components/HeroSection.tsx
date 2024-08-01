"use client";

import Image from "next/image";
import React from "react";
import bannerText from "../../public/images/INSIDEFILMS_LG_B.svg";
import { motion } from "framer-motion";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen">
      <Image
        src="/images/new/intro.jpg"
        alt="image of a man in a cape from behind"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-2/5 mb-8">
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              rotate: [0, 2, -2, 2, -2, 0],
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="z-10"
          >
            <Image
              src={bannerText}
              alt="banner text Inside Films"
              className="z-10"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-20 xl:bottom-10">
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
