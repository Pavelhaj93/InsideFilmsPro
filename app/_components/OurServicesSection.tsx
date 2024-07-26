import DownloadPDFLink from "@/components/DownloadPDFLink";
import { services } from "@/public/data/services";
import React from "react";

const OurServicesSection = () => {
  return (
    <section className="bg-black text-white w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Naše Služby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
          {services.map((service, index) => (
            <div key={index} className="relative p-6 rounded-lg shadow-lg">
              <div className="text-7xl absolute -top-2 -left-2 text-opacity-20 z-0">
                {service.icon}
              </div>
              <h3 className="relative text-5xl font-semibold mb-4 text-left z-10">
                {service.title}
              </h3>
              <p className="relative text-lg text-left font-sans font-extralight leading-7 tracking-widest z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center text-2xl mt-10">
          <p>Více informací naleznete v naši PDF prezentaci</p>
        </div>
        <DownloadPDFLink />
      </div>
    </section>
  );
};

export default OurServicesSection;
