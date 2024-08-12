"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="bg-black w-full min-h-[400px]">
      <div className="relative z-10 mx-4 md:mx-20 max-w-7xl 2xl:w-[1500px] justify-center flex my-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="space-y-4"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="inline-block rounded-lg py-1 text-2xl text-white"
          >
            O NÁS
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="lg:leading-tighter text-4xl text-white font-bold tracking-normal sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
          >
            Tvoříme vizuály, výmýšlíme kampaně, točíme reklamy na míru vašim
            potřebám
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            className="max-w-[700px] md:text-4xl/relaxed text-white"
          >
            JSME FILMOVÁ A FULL SERVICE KREATIVNÍ PRODUKCE
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
