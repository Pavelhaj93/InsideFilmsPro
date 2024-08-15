"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

// Function to split the text into spans
const splitText = (text: string) => {
  return text
    .split("")
    .map((char, index) => <AnimatedLetter key={index} char={char} />);
};

// AnimatedLetter Component
const AnimatedLetter = ({ char }: { char: string }) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls
      .start({
        color: "#6b7280", // Change to gray on hover
        x: [0, 5, 0], // Slight movement right and back
        height: [null, "110%"], // Increase height on hover
        transition: { duration: 0.6 }, // Animation duration
      })
      .then(() => {
        // Once animation is complete, change color back to white
        controls.start({
          color: "#ffffff", // Change back to white after animation
          transition: { duration: 0.6 }, // Slightly faster transition back to white
        });
      });
  };

  return (
    <motion.span
      className="inline-block relative"
      onHoverStart={handleHoverStart}
      animate={controls}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {char}
    </motion.span>
  );
};

const AboutUsSection = () => {
  return (
    <section
      id="aboutUsSection"
      className="w-full py-12 md:py-16 lg:py-32 px-4 bg-black text-white"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="space-y-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-7xl text-center lg:text-left font-bold sm:text-6xl md:text-9xl"
            >
              {splitText("HELLO")}
            </motion.h2>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-7xl text-center lg:text-left font-bold sm:text-6xl md:text-9xl"
            >
              {splitText("WE")} {splitText("ARE")}
            </motion.h2>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-7xl text-center lg:text-left font-bold sm:text-6xl md:text-9xl"
            >
              {splitText("INSIDEPRO")}
            </motion.h2>
          </div>
          <div className="flex flex-col items-start space-y-7 my-6">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-[600px] text-center text-2xl font-extralight font-oswald lg:text-2xl"
            >
              Jsme progresivní{" "}
              <span className="text-gray-500 font-normal">
                filmová a reklamní produkce
              </span>{" "}
              s více než sedmnáctiletými profesními zkušenostmi.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="max-w-[600px] text-center text-2xl font-oswald font-extralight lg:text-2xl"
            >
              Specializujeme se na tvorbu
              <span className="text-gray-500 font-normal">
                {" "}
                celovečerních dokumentárních filmů, reklam, online spotů
              </span>{" "}
              a poskytujeme komplexní řešení pro firmy a společnosti v oblasti
              <span className="text-gray-500 font-normal">
                {" "}
                tvorby a distribuce jejich grafického a digitálního obsahu,
                včetně marketingové podpory.
              </span>
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="max-w-[600px] text-center self-center text-2xl font-extralight font-oswald lg:text-2xl"
            >
              Naše produkce se dělí na dvě odvětví:
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="max-w-[600px] text-center self-center text-3xl md:text-5xl tracking-wider lg:text-5xl"
            >
              INSIDE<span className="text-gray-500">FILMS</span> & INSIDE
              <span className="text-gray-500">PRODUCTION</span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
