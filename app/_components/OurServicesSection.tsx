"use client";

import DownloadPDFLink from "@/components/DownloadPDFLink";
import { services } from "@/public/data/services";
import { motion } from "framer-motion";

const OurServicesSection = () => {
  return (
    <>
      <section
        id="ourServicesSection"
        className="bg-black text-white w-full py-8 px-4"
      >
        <div className="container mx-auto px-4 h-auto max-w-7xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-6xl tracking-normal text-center mb-14 mt-8 md:text-7xl xl:text-7xl font-bebas"
          >
            Naše služby
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20 3xl:gap-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
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
            className="text-center text-2xl my-10 3xl:mt-20 font-bebas"
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
            <DownloadPDFLink size="lg" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
