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
        className="w-full py-12 md:py-16 lg:py-20 px-6 min-h-[300px] mx-auto justify-center items-center flex bg-[url('/images/rajnohic.jpg')] bg-cover bg-top filter invert"
      >
        <div className="container md:px-6 mx-auto grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="space-y-4 flex flex-col mb-8 xl:mb-0"
          >
            <h2 className="text-5xl font-bold sm:text-4xl md:text-7xl text-center xl:text-left text-white">
              Vaše vize, naše kreativa
            </h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed text-center xl:text-left xl:w-5/6 text-2xl leading-9 text-white tracking-wide font-oswald">
              Pomáháme našim klientům prezentovat a prodávat jejich produkty
              prostřednictvím našich kreativních služeb.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 bg-gray-100 p-4 xl:p-8 rounded-lg shadow-lg gap-6 flex flex-col mx-auto"
          >
            <div className="grid gap-4">
              <div className="flex items-center gap-4 xl:gap-6">
                <FaMailBulk className="xl:h-8 xl:w-8 w-6 h-6" />
                <Link
                  href="mailto:produkce@insidepro.cz"
                  className="hover:underline text-2xl xl:text-3xl tracking-wider font-oswald mb-1"
                >
                  produkce@insidepro.cz
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <FaPhone className="xl:h-8 xl:w-8 h-6 w-6" />
                <Link
                  href="tel:+420731727306"
                  className="hover:underline text-2xl xl:text-3xl font-oswald mb-1"
                >
                  +420 731 727 306
                </Link>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="xl:text-3xl text-2xl tracking-wider font-oswald">
                R&T Production s.r.o., Hradec Králové / Praha
              </p>
              <p className="xl:text-3xl text-2xl font-oswald">IČ: 02146142</p>
            </div>
            <p className="text-md xl:text-lg tracking-wider font-oswald">
              Společnost je zapsána v obchodním rejstříku vedeném Krajským
              soudem v Hradci Králové, oddíl C, vložka 35789.
            </p>
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
