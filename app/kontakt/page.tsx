"use client";

import HeadingSection from "@/components/HeadingSection/HeadingSection";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneIncoming } from "react-icons/fi";
import { LuFolderSearch } from "react-icons/lu";
import Image from "next/image";

export default function Kontakt() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      id: 1,
      name: "Jan Rajnoha",
      role: "Executive Producer / Director / DOP",
      phone: "+420 731 727 306",
      email: "rajnoha@insidepro.cz",
      imageSrc: "/images/team/jan.png",
    },
    {
      id: 2,
      name: "Petr Sochor",
      role: "Production Manager",
      phone: "+420 739 044 381",
      email: "sochor@insidepro.cz",
      imageSrc: "/images/team/petr.jpg",
    },
    {
      id: 3,
      name: "Ing. Sandra Bartelová",
      role: "Marketing Specialist / Production",
      phone: "+420 736 659 723",
      email: "produkce@insidepro.cz",
      imageSrc: "/images/team/sandra.jpg",
    },
    {
      id: 4,
      name: "Ondřej Marek",
      role: "Graphic Designer / Brand Strategist",
      phone: "+420 736 534 697",
      email: "marek@insidepro.cz",
      imageSrc: "/images/team/ondra.jpg",
    },
    {
      id: 5,
      name: "Pavel Hajduch",
      role: "Web Developer / SEO Specialist",
      phone: "+420 720 989 429",
      email: "hajduch@insidepro.cz",
      imageSrc: "/images/team/pavel.jpeg",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="KONTAKT"
        description="Jsme tu pro vás, abychom společně vytvořili
vizuální prezentaci, která bude odpovídat
vašim hodnotám a brand image"
        imageSrc="/images/background/kontakt.jpg"
        imageAlt="Guy riding a motorbike on rear wheel"
      />
      <section className="bg-black text-white pt-16 pb-8 md:pb-16 px-4 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Vaše vize naše kreativa
            </h2>
            <p className="text-2xl">
              Prezentujte se a prodávejte se s naši pomocí.
            </p>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-semibold text-center mb-8">Náš tým</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`${
                    index > 2 ? "relative md:left-[calc(50%+40px)]" : ""
                  }  `}
                >
                  <div className="group h-full border-gray-800 overflow-hidden transform transition-all duration-300 hover:scale-[101%] hover:shadow-xl rounded-xl">
                    <div className="p-0">
                      <div className="relative h-[400px] mb-4">
                        <Image
                          src={member.imageSrc}
                          alt={member.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-all duration-300 filter grayscale group-hover:grayscale-0"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-3xl font-semibold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 mb-2 text-2xl">
                          {member.role}
                        </p>
                        <p className="text-gray-500 text-xl">{member.email}</p>
                        {member.phone && (
                          <p className="text-gray-500 text-xl">
                            {member.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 space-y-8 flex flex-col items-center"
          >
            <div className="xl:flex grid xl:grid-cols-2 grid-cols-1 gap-6 xl:flex-row md:gap-x-20 xl:gap-x-12">
              <div className="flex items-center gap-4">
                <MdOutlineEmail className="w-8 h-8" color="white" />
                <Link
                  href="mailto:produkce@insidepro.cz"
                  className="hover:underline text-xl md:text-2xl text-white"
                >
                  produkce@insidepro.cz
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <FiPhoneIncoming className="w-8 h-8" color="white" />
                <Link
                  href="tel:+420731727306"
                  className="hover:underline text-xl md:text-2xl text-white"
                >
                  +420 731 727 306
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <SlLocationPin className="w-8 h-8" color="white" />
                <div className="flex flex-col sm:flex-row">
                  <p className="text-xl md:text-2xl text-white">
                    R&T Production s.r.o.,
                  </p>
                  <p className="text-xl md:text-2xl text-white">
                    Hradec Králové / Praha
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LuFolderSearch className="w-8 h-8" color="white" />
                <p className="text-xl md:text-2xl text-white">IČ: 02146142</p>
              </div>
            </div>
            <p className="text-sm md:text-md tracking-wider font-oswald text-white mt-4">
              Společnost je zapsána v obchodním rejstříku vedeném Krajským
              soudem v Hradci Králové, oddíl C, vložka 35789.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
