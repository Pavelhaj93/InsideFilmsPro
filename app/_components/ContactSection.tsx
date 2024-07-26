import Link from "next/link";
import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-300 px-6 min-h-[600px] mx-auto justify-center items-center flex">
        <div className="container md:px-6 mx-auto grid md:grid-cols-2 items-center">
          <div className="space-y-4 gap-6 flex flex-col mb-8 xl:mb-0">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-7xl text-center">
              Vaše vize, naše kreativa
            </h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed text-center xl:text-left">
              Pomáháme našim klientům prezentovat a prodávat jejich produkty
              prostřednictvím našich kreativních služeb.
            </p>
          </div>
          <div className="space-y-4 bg-gray-100 p-4 xl:p-8 rounded-lg shadow-lg gap-6 flex flex-col mx-auto">
            <div className="grid gap-4">
              <div className="flex items-center gap-4 xl:gap-6">
                <FaMailBulk className="xl:h-8 xl:w-8 w-6 h-6" />
                <Link href="#" className="hover:underline text-2xl xl:text-3xl">
                  produkce@insidepro.cz
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <FaPhone className="xl:h-8 xl:w-8 h-6 w-6" />
                <Link
                  href="+420 731 727 306"
                  className="hover:underline text-2xl xl:text-3xl"
                >
                  +420 731 727 306
                </Link>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="xl:text-3xl text-2xl">
                R&T Production s.r.o., Hradec Králové / Praha
              </p>
              <p className="xl:text-3xl text-2xl">IČ: 02146142</p>
            </div>
            <p className="text-md xl:text-lg">
              Společnost je zapsána v obchodním rejstříku vedeném Krajským
              soudem v Hradci Králové, oddíl C, vložka 35789.
            </p>
          </div>
        </div>
      </section>
      <footer className="w-full bg-black text-white py-4 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} R&T Production s.r.o. - All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default ContactSection;
