"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuFolderSearch } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneIncoming } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const ContactSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        id="contactSection"
        className="w-full py-12 md:py-16 lg:py-20 px-4 h-auto mx-auto justify-center items-center flex bg-[url('/images/new/kincl.jpg')] bg-cover bg-center animate-glow relative"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container md:px-6 mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-0 md:gap-10 max-w-7xl z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="flex flex-col mb-4 md:mb-6 xl:mb-0 w-full lg:w-1/2 gap-4 md:gap-6"
          >
            <h2 className="text-5xl font-bold sm:text-4xl md:text-7xl text-center xl:text-left text-white">
              Vaše vize
              <br /> naše kreativa
            </h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed text-center xl:text-left xl:w-5/6 text-2xl leading-9 text-white tracking-wide font-oswald">
              Prezentuje se a prodávejte se s naši pomocí.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 px-4 xl:p-6 mt-4 rounded-lg shadow-lg lg:left-10 lg:relative gap-4 flex flex-col"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 xl:gap-6">
                <MdOutlineEmail className="w-8 h-8" color="white" />
                <Link
                  href="mailto:produkce@insidepro.cz"
                  className="hover:underline text-2xl xl:text-3xl tracking-wider text-white [text-shadow:_0_0_3px_rgb(0_0_0_/_100%)]"
                >
                  produkce@insidepro.cz
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <FiPhoneIncoming className="h-8 w-8" color="white" />
                <Link
                  href="tel:+420731727306"
                  className="hover:underline text-2xl xl:text-3xl text-white"
                >
                  +420 731 727 306
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <SlLocationPin className="h-8 w-8" color="white" />
                <div className="flex flex-col sm:flex-row">
                  <p className="xl:text-3xl text-2xl tracking-wider text-white">
                    R&T Production s.r.o.,
                  </p>
                  <p className="xl:text-3xl text-2xl tracking-wider text-white">
                    Hradec Králové / Praha
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <LuFolderSearch className="h-8 w-8" color="white" />
                <p className="xl:text-3xl text-2xl text-white">IČ: 02146142</p>
              </div>
              <p className="text-sm xl:text-md tracking-wider font-oswald text-white mt-4 md:mt-0">
                Společnost je zapsána v obchodním rejstříku vedeném Krajským
                soudem v Hradci Králové, oddíl C, vložka 35789.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="w-full bg-black text-white py-4 text-center">
        <p className="text-lg tracking-wider">
          &copy; {new Date().getFullYear()} R&T Production s.r.o. - All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default ContactSection;
