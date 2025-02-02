"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MobileCarousel from "./new/MobileCarousel";

export type Company = {
  name: string;
  logo: string;
  height?: string;
  width?: string;
};

export default function ReferencesSection() {
  const companies: Company[] = [
    // { name: "A S A", logo: "/images/companies/A S A_logo_FINAL_white.svg" },
    {
      name: "Beyond Menu",
      logo: "/images/companies/beyond-menu-logo.svg",
    },
    {
      name: "Camel",
      logo: "/images/companies/camel.svg",
      height: "h-7",
    },
    {
      name: "Česká Televize Flat",
      logo: "/images/companies/ct_flat.svg",
      height: "h-10",
    },
    {
      name: "Dadic Tatto",
      logo: "/images/companies/dadic_tattoo.svg",
    },
    {
      name: "David Dvorak",
      logo: "/images/companies/david_dvorak.svg",
      height: "max-h-16",
    },
    {
      name: "Embassy of India",
      logo: "/images/companies/embassy_of_india.svg",
    },

    {
      name: "Logo FIT-PRO",
      logo: "/images/companies/fit_pro.svg",
    },
    { name: "Fitmin", logo: "/images/companies/fitmin.svg", height: "h-7" },
    // { name: "Fource B", logo: "/images/companies/Fource-B.webp" }, TODO: nemam logo
    {
      name: "Generali",
      logo: "/images/companies/generali.svg",
      height: "h-8",
    },
    {
      name: "Gladiator Race",
      logo: "/images/companies/gladiator.svg",
    },
    {
      name: "Heliczech",
      logo: "/images/companies/heliczech_logo.svg",
    },
    {
      name: "Hospoda U Baby",
      logo: "/images/companies/hospoda_u_baby.svg",
    },
    {
      name: "ISCARE",
      logo: "/images/companies/iscare_flat.svg",
      height: "h-9",
    },
    { name: "JIP", logo: "/images/companies/JIP_logo_CMYK.svg", height: "h-6" },
    { name: "Kaufland", logo: "/images/companies/kaufland.svg", height: "h-9" },
    { name: "Kik Logo", logo: "/images/companies/kik.svg", width: "w-12" },
    { name: "Konopí", logo: "/images/companies/konopi.svg", height: "h-9" },
    // { name: "Koupelny Syrový", logo: "/images/companies/koupelny_syrovy.webp" }, //TODO: rajnoha nechtel
    {
      name: "Matěj Boxing",
      logo: "/images/companies/matej_boxing.svg",
      height: "max-h-14",
    },
    {
      name: "mBank",
      logo: "/images/companies/mbank_coloured.svg",
      height: "h-10",
    },
    {
      name: "MBC International",
      logo: "/images/companies/mbc_international.svg",
      height: "max-h-14",
    },
    {
      name: "ML Základní",
      logo: "/images/companies/ML_zakladni.svg",
      height: "max-h-14",
    },
    // {
    //   name: "Moidaimo",
    //   logo: "/images/companies/moidaimo.svg", //TODO: nemuzu sehnat logo
    // },
    {
      name: "Mystic Sk8",
      logo: "/images/companies/mystic_sk8.svg",
      height: "max-h-14",
    },
    {
      name: "Nudz",
      logo: "/images/companies/nudz.svg",
      width: "w-56",
    },
    {
      name: "Obecný zájem",
      logo: "/images/companies/obecny_zajem.svg",
    },
    {
      name: "Pod Lipkami",
      logo: "/images/companies/PODLIPKAMI.svg",
    },
    {
      name: "PR Klub",
      logo: "/images/companies/prklub.svg",
      height: "h-10",
    },
    {
      name: "Red Bull",
      logo: "/images/companies/redbull.svg",
      height: "h-11",
    },
    {
      name: "Round XII",
      logo: "/images/companies/round_xii_bily.svg",
      height: "h-6",
    },
    {
      name: "Samsung",
      logo: "/images/companies/Samsung.svg",
    },
    // { name: "Studanka", logo: "/images/companies/STUDANKA.svg" }, // TODO: nemaj poradny logo na stazeni
    {
      name: "Tipsport",
      logo: "/images/companies/tipsport.svg",
      height: "h-10",
    },
    { name: "UCBANK", logo: "/images/companies/UCBANK.svg", height: "h-9" },
    { name: "Vidia", logo: "/images/companies/vidia-logo.svg", width: "w-20" },
    { name: "Vodafone", logo: "/images/companies/vodafone.svg" },
    // {
    //   name: "Wayusa",
    //   logo: "/images/companies/wayusa_logo.webp",
    //   height: "h-12",
    // }, // TODO: nemaj poradny logo na stazeni
    { name: "Your Body", logo: "/images/companies/your_body.svg" },
    {
      name: "Život Postaru",
      logo: "/images/companies/zivot_postaru.svg",
    },
  ];

  const partners = [
    {
      name: "Sony",
      logo: "/images/companies/sony.svg",
      height: "h-6",
    },
    {
      name: "Fomei",
      logo: "/images/companies/FOMEI-transp.svg",
      height: "h-8",
    },
    {
      name: "Analog Vision White",
      logo: "/images/companies/analog_vision_bila.svg",
      height: "h-10",
    },
    {
      name: "Dron Pro",
      logo: "/images/companies/dron_pro.svg",
    },
    {
      name: "Sigma",
      logo: "/images/companies/sigma.svg",
      height: "h-8",
    },
  ];

  return (
    <section
      id="referencesSection"
      className="relative lg:pb-20 py-16 bg-black gap-20 flex flex-col w-full overflow-hidden"
    >
      {/* Gradients on both sides */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 bottom-0 w-2/5 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute top-0 right-0 bottom-0 w-2/5 bg-gradient-to-l from-black to-transparent z-20" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-6xl tracking-normal text-center mb-14 mt-8 font-bebas text-white"
        >
          Naše reference
        </motion.h2>
        <div className="lg:flex flex-wrap gap-10 justify-center hidden">
          {companies.map((company, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={100}
                  className={`w-auto ${company.width} max-h-12 object-cover ${company.height} filter grayscale hover:grayscale-0 [transition: filter] duration-300 ease-in-out`}
                />
              </div>
            );
          })}
        </div>
        <MobileCarousel companies={companies} />
      </div>
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-6xl tracking-normal text-center mb-14 mt-8 font-bebas text-white"
        >
          Naši partneři
        </motion.h2>
        <div className="lg:flex flex-wrap gap-10 justify-center hidden">
          {partners.map((partner, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={100}
                  className={`w-auto max-h-12 object-cover ${partner.height} filter grayscale hover:grayscale-0 [transition: filter] duration-300 ease-in-out`}
                />
              </div>
            );
          })}
        </div>
        <MobileCarousel companies={partners} />
      </div>
    </section>
  );
}
