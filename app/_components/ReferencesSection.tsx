"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReferencesSection() {
  type Company = {
    name: string;
    logo: string;
  };
  // Array of company logos
  const companies: Company[] = [
    // { name: "Sony", logo: "/images/companies/1280px-Sony_logo.svg_white" }, // Where logo
    { name: "A S A", logo: "/images/companies/A S A_logo_FINAL_white.svg" },
    {
      name: "Analog Vision White",
      logo: "/images/companies/analog_vision_bila.svg",
    },
    { name: "Beyond Menu", logo: "/images/companies/beyond-menu-logo.svg" },
    { name: "Buga", logo: "/images/companies/buga.svg" }, // Nejde na produkci
    {
      name: "Camel",
      logo: "/images/companies/camel.svg",
    },
    {
      name: "Česká Televize Flat",
      logo: "/images/companies/ct_flat.svg",
    },
    { name: "Dadic Tatto", logo: "/images/companies/dadic_tattoo.svg" },
    { name: "David Dvorak", logo: "/images/companies/david_dvorak.svg" },
    // {
    //   name: "Double Red",
    //   logo: "/images/companies/DOUBLE%20RED%20logo%20red.pdf",
    // },
    {
      name: "Dveře Valný Black",
      logo: "/images/companies/dvere_valny_cerna.svg",
    },
    {
      name: "Embassy of India",
      logo: "/images/companies/embassy_of_india.svg",
    },
    {
      name: "Dron Pro",
      logo: "/images/companies/dron_pro.svg",
    },
    {
      name: "Logo FIT-PRO",
      logo: "/images/companies/fit_pro.svg",
    },
    { name: "Fitmin", logo: "/images/companies/fitmin.svg" },
    { name: "Fomei", logo: "/images/companies/FOMEI-transp.svg" },
    // { name: "Fource B", logo: "/images/companies/Fource-B.webp" }, TODO: convert
    { name: "Generali", logo: "/images/companies/generali.svg" },
    {
      name: "Gladiator Race",
      logo: "/images/companies/gladiator.svg",
    },
    { name: "Heliczech", logo: "/images/companies/heliczech_logo.svg" },
    { name: "Hospoda U Baby", logo: "/images/companies/hospoda_u_baby.svg" },
    { name: "ISCARE", logo: "/images/companies/iscare_flat.svg" },
    { name: "JIP", logo: "/images/companies/JIP_logo_CMYK.svg" },
    { name: "Kaufland", logo: "/images/companies/kaufland_square.svg" },
    // { name: "Kik Logo", logo: "/images/companies/kik.svg" }, // TODO: Fix logo
    { name: "Konopí", logo: "/images/companies/konopi.svg" },
    // { name: "Koupelny Syrový", logo: "/images/companies/koupelny_syrovy.webp" },
    {
      name: "Matěj Boxing",
      logo: "/images/companies/matej_boxing.svg",
    },
    { name: "mBank", logo: "/images/companies/mbank_coloured.svg" },
    {
      name: "MBC International",
      logo: "/images/companies/mbc_international.svg",
    },
    {
      name: "ML Základní",
      logo: "/images/companies/ML_zakladni.svg",
    },
    // {
    //   name: "Moidaimo",
    //   logo: "/images/companies/moidaimo.svg", //TODO: Fix logo
    // },
    { name: "Mystic Sk8", logo: "/images/companies/mystic_sk8.svg" },
    // {
    //   name: "Nudz",
    //   logo: "/images/companies/nudz_col_nazev_zona.svg",
    // }, // TODO: Fix logo
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
    },
    {
      name: "Red Bull",
      logo: "/images/companies/redbull.svg",
    },
    {
      name: "Round XII",
      logo: "/images/companies/round_xii_bily.svg",
    },
    {
      name: "Royal Cafe Bar Opočno",
      logo: "/images/companies/royal_bar_cafe_opocno.svg",
    },
    // {g
    //   name: "Samsung",
    //   logo: "/images/companies/samsung.png",
    // }, //TODO: nejde convertnout
    // { name: "Studanka", logo: "/images/companies/STUDANKA.svg" }, // TODO: Fix logo
    {
      name: "Tipsport",
      logo: "/images/companies/tipsport.svg",
    },
    { name: "UCBANK", logo: "/images/companies/UCBANK.svg" },
    // { name: "Vidia", logo: "/images/companies/vidia_white.svg" }, TODO: Fix logo
    { name: "Vodafone", logo: "/images/companies/vodafone.svg" },
    // { name: "Wayusa", logo: "/images/companies/wayusa_logo_final.svg" }, // TODO: Fix logo
    { name: "Your Body", logo: "/images/companies/your_body.svg" },
    { name: "Život Postaru", logo: "/images/companies/zivot_postaru.svg" },
  ];

  return (
    <section id="referencesSection" className="py-16 bg-black w-full">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-6xl tracking-normal text-center mb-14 mt-8 md:text-7xl xl:text-7xl font-bebas text-white"
        >
          Naše reference
        </motion.h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {companies.map((company, index) => {
            return (
              <div key={index} className="flex items-center justify-center p-4">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={100}
                  className="w-auto max-w-60 object-cover max-h-20 h-auto filter grayscale"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
