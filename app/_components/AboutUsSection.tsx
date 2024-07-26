import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <section
      id="showReelSection"
      className="relative w-full py-12 md:py-24 px-4 lg:py-32 h-[900px]"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(path/to/your/showreel/image.jpg)" }}
      ></div>
      <div className="relative z-10 mx-4 md:mx-20">
        <div className="space-y-4">
          <div className="inline-block rounded-lg py-1 text-2xl">O NÁS</div>
          <h1 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            JSME FILMOVÁ A FULL SERVICE KREATIVNÍ PRODUKCE
          </h1>
          <p className="max-w-[700px] md:text-3xl/relaxed">
            Tvoříme vizuály, výmýšlíme kampaně, točíme reklamy <br />
            na míru vašim potřebám
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
