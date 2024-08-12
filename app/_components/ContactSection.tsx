"use client";

import Link from "next/link";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        id="contactSection"
        className="w-full py-12 md:py-16 lg:py-20 px-6 min-h-[300px] mx-auto justify-center items-center flex bg-[url('/images/new/kincl.jpg')] bg-cover bg-center animate-glow"
      >
        <div className="container md:px-6 mx-auto grid md:grid-cols-2 items-center gap-10 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5 }}
            className=" flex flex-col mb-8 xl:mb-0"
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
            className="space-y-4 p-4 xl:p-6 rounded-lg shadow-lg gap-4 flex flex-col mx-auto"
          >
            <div className="grid gap-4">
              <div className="flex items-center gap-4 xl:gap-6">
                <FaMailBulk className="xl:h-8 xl:w-8 w-6 h-6" color="white" />
                <Link
                  href="mailto:produkce@insidepro.cz"
                  className="hover:underline text-2xl xl:text-3xl tracking-wider font-bebas text-white [text-shadow:_0_0_3px_rgb(0_0_0_/_100%)]"
                >
                  produkce@insidepro.cz
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <FaPhone className="xl:h-8 xl:w-8 h-6 w-6" color="white" />
                <Link
                  href="tel:+420731727306"
                  className="hover:underline text-2xl xl:text-3xl font-bebas text-white"
                >
                  +420 731 727 306
                </Link>
              </div>
              <p className="xl:text-3xl text-2xl tracking-wider font-oswald text-white">
                R&T Production s.r.o., Hradec Králové / Praha
              </p>
              <p className="xl:text-3xl text-2xl font-oswald text-white">
                IČ: 02146142
              </p>
              <p className="text-sm xl:text-md tracking-wider font-oswald text-white">
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
