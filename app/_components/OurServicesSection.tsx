import DownloadPDFLink from "@/components/DownloadPDFLink";
import { services } from "@/public/data/services";
import React from "react";

const OurServicesSection = () => {
  return (
    <>
      <section
        id="ourServicesSection"
        className="w-full h-auto py-12 md:py-24 lg:py-32 bg-cover bg-center bg-[url('/images/kinclRemake.jpg')] filter saturate-0"
      >
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="">
              <p className="md:text-2xl tracking-widest drop-shadow-xl text-[rgb(74, 72, 70)]">
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
            </div>
          </div>
        </div>
      </section>
      <section
        id="ourServicesSection"
        className="bg-black text-white w-full py-12"
      >
        <div className="container mx-auto px-4 h-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-8">Naše Služby</h2> */}
          <h2
            className="text-3xl tracking-normal text-center mb-14 mt-8 md:text-7xl xl:text-7xl
          xl"
          >
            Naše služby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20">
            {services.map((service, index) => (
              <div key={index} className="relative p-6 rounded-lg shadow-lg">
                <div
                  className={`text-7xl absolute -top-2 -left-2 text-opacity-20 z-0 ${
                    index === 1 || index === 2 ? "left-0" : ""
                  } `}
                >
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
          <div className="text-center text-2xl my-10">
            <p>Více informací naleznete v naši PDF prezentaci</p>
          </div>
          <DownloadPDFLink />
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
