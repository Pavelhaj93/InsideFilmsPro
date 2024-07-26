import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const services = [
  {
    title: "Kreativní kampaně",
    description:
      "Tvorba poutavých příběhů značek a efektivních marketingových kampaní.",
  },
  {
    title: "Produkční služby",
    description: "Bezproblémová produkce filmů, reklam a brandového obsahu.",
  },
  {
    title: "Audiovizuální produkce",
    description: "Vysoce kvalitní video, audio a multimediální produkce.",
  },
  {
    title: "Fotografie",
    description: "Zachycení úžasných vizuálů pro vaši značku a kampaně.",
  },
  {
    title: "Animovaná videa",
    description: "Oživování vašich nápadů pomocí poutavých animací.",
  },
  {
    title: "3D grafika",
    description: "Tvorba pohlcujících 3D vizuálů a prostředí.",
  },
  {
    title: "VFX",
    description:
      "Vylepšování vašich vizuálů nejmodernějšími vizuálními efekty.",
  },
  {
    title: "Grafický design",
    description: "Navrhování efektivních vizuálů a brandingových prvků.",
  },
  {
    title: "A další...",
    description: "Prozkoumejte náš kompletní rozsah služeb v naší prezentaci.",
  },
];

type ServiceProps = {
  title: string;
  description: string;
};

const Service: FC<ServiceProps> = ({ title, description }) => (
  <div className="grid gap-3 mb-10">
    <h3 className="text-4xl font-semibold text-white">{title}</h3>
    <p className="text-lg text-white">{description}</p>
  </div>
);

const OurServicesSection = () => {
  return (
    <section
      id="ourServicesSection"
      className="relative border-t border-red-500 w-full py-12 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/KinclRemake.jpg"
          alt="image with Patrik Kincl in front of a camera"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative px-4 md:px-6 z-10">
        <div className="mx-auto max-w-7xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-7xl">
              Naše služby
            </h2>
            <p className="text-white md:text-xl/relaxed lg:text-xl/relaxed xl:text-4xl/relaxed mb-40">
              Nabízíme širokou škálu služeb, které pomohou realizovat vaši
              kreativní vizi.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <Service
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link
            download
            href="/pdf/INSIDEPRO-2024.pdf"
            target="_blank"
            className="inline-flex text-white h-10 items-center justify-center rounded-md bg-primary px-8 border-white border-2 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Stáhnout prezentaci v PDF
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
