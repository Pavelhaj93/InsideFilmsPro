import React from "react";

const DescriptionSection = () => {
  return (
    <section
      id="aboutUsSection"
      className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl xl:text-9xl">
              HELLO
              <br /> WE ARE
              <br /> INSIDEPRO
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="max-w-[600px] font-extralight font-oswald md:text-2xl lg:text-3xl">
              Jsme progresivní{" "}
              <span className="text-gray-500 font-normal">
                filmová a reklamní produkce
              </span>{" "}
              s více než sedmnáctiletými profesními zkušenostmi.
            </p>
            <p className="max-w-[600px] font-oswald font-extralight md:text-2xl lg:text-3xl">
              Specializujeme se na tvorbu
              <span className="text-gray-500 font-normal">
                {" "}
                celovečerních dokumentárních filmů, reklam, online spotů
              </span>{" "}
              a poskytujeme komplexní řešení pro firmy a společnosti v oblasti
              <span className="text-gray-500 font-normal">
                {" "}
                tvorby a distribuce jejich grafického a digitálního obsahu,
                včetně marketingové podpory.
              </span>
            </p>
            <p className="max-w-[600px] font-extralight md:text-2xl font-oswald lg:text-3xl">
              Naše produkce se dělí na dvě odvětví:
            </p>
            <p className="max-w-[600px] md:text-4xl tracking-wider lg:text-5xl">
              INSIDE<span className="text-gray-500">FILMS</span> & INSIDE
              <span className="text-gray-500">PRODUCTION</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
