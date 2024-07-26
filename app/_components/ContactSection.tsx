import Link from "next/link";
import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-300 px-4 min-h-[600px] justify-center items-center flex">
        <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-2 items-center">
          <div className="space-y-4 gap-6 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl">
              Vaše vize, naše kreativa
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed">
              Pomáháme našim klientům prezentovat a prodávat jejich produkty
              prostřednictvím našich kreativních služeb.
            </p>
          </div>
          <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-lg gap-6 flex flex-col">
            <div className="grid gap-4">
              <div className="flex items-center gap-6">
                <FaMailBulk className="h-8 w-8 text-muted-foreground" />
                <Link
                  href="#"
                  className="text-primary hover:underline text-3xl"
                >
                  produkce@insidepro.cz
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <FaPhone className="h-8 w-8 text-muted-foreground" />
                <Link
                  href="+420 731 727 306"
                  className="text-primary hover:underline text-3xl"
                >
                  +420 731 727 306
                </Link>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-3xl">
                R&T Production s.r.o., Hradec Králové / Praha
              </p>
              <p className="text-3xl">IČ: 02146142</p>
            </div>
            <p className="text-lg">
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
