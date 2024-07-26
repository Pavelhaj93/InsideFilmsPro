/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YbyJzB4HDP0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { services } from "@/public/data/services";
import Link from "next/link";
import { FC } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  imageUrl: string;
};

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  imageUrl,
}) => (
  <div className="relative rounded-lg flex flex-col min-h-52 items-center bg-background p-6 shadow-sm group cursor-pointer overflow-hidden">
    {/* Background Overlay */}
    <div
      className="absolute inset-0 z-10 rounded-lg bg-cover bg-center transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-3 group-hover:grayscale"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black transition-opacity duration-300 group-hover:opacity-50 opacity-0 group-hover"></div>
    </div>

    {/* Icon */}
    {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary z-10 group-hover:hidden">
      <Icon className="h-10 w-10 text-primary" />
    </div> */}

    {/* Title */}
    <h3 className="mt-16 text-2xl group-hover:opacity-0 opacity-100 transition-all duration-500 z-20 text-white">
      {title}
    </h3>

    {/* Description */}
    <p className="absolute m-2 inset-0 flex items-center justify-center text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-xl">
      {description}
    </p>
  </div>
);

const OurServiceSection = () => {
  return (
    <>
      {/* Section 1: Title and Background Image */}
      <section
        id="ourServicesSection"
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/kinclRemake.jpg')" }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-9xl">
                Naše služby
              </h2>
              <p className="md:text-2xl tracking-wider">
                Jako progresivní <strong>filmová a reklamní produkce</strong> se
                specializujeme na tvorbu{" "}
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

      {/* Section 2: Service Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-6 text-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
            <h4 className="text-2xl text-center text-white">
              Více informací naleznete v naši PDF prezentaci ...
            </h4>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex text-white border-white border-2 h-10 items-center justify-center rounded-md bg-primary px-8 text-xl text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Stáhnout prezentaci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServiceSection;
