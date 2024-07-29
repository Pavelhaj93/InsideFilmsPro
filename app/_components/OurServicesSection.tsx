"use client";

import DownloadPDFLink from "@/components/DownloadPDFLink";
import { services } from "@/public/data/services";
import { motion } from "framer-motion";

const OurServicesSection = () => {
  return (
    <>
      <section
        id="ourServicesSection"
        className="w-full h-auto py-12 md:py-24 lg:py-32 bg-cover bg-center bg-[url('/images/KinclRemake.jpg')] filter saturate-0"
      >
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-6xl space-y-6"
          >
            <p className="md:text-2xl tracking-widest drop-shadow-xl text-[rgb(74, 72, 70)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              specializujeme se na tvorbu{" "}
              <strong>
                celovečerních dokumentárních filmů, reklam, online spotů
              </strong>{" "}
              a poskytujeme komplexní řešení pro firmy a společnosti v oblasti
              <strong>
                tvorby a distribuce jejich grafického a digitálního obsahu,
                včetně marketingové podpory.
              </strong>
            </p>
          </motion.div>
        </div>
      </section>
      <section
        id="ourServicesSection"
        className="bg-black text-white w-full py-12"
      >
        <div className="container mx-auto px-4 h-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-3xl tracking-normal text-center mb-14 mt-8 md:text-7xl xl:text-7xl font-bebas"
          >
            Naše služby
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
                className="relative p-6 rounded-lg shadow-lg"
              >
                <div
                  className={`text-7xl absolute -top-2 -left-2 text-opacity-20 z-0 ${
                    index === 1 || index === 2 ? "left-0" : ""
                  } `}
                >
                  {service.icon}
                </div>
                <h3 className="relative text-5xl font-semibold mb-4 text-left z-10 font-bebas">
                  {service.title}
                </h3>
                <p className="relative text-lg text-left font-extralight font-oswald leading-7 tracking-widest z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: services.length * 0.15,
            }}
            className="text-center text-2xl my-10 font-bebas"
          >
            <p>Více informací naleznete v naši PDF prezentaci</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: services.length * 0.2,
            }}
          >
            <DownloadPDFLink />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
