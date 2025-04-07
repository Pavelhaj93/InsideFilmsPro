import HeadingSection from "@/components/HeadingSection/HeadingSection";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Grafická identita | R&T Production s.r.o. | INSIDEPRO",
  description: "Grafická identita | R&T Production s.r.o. | INSIDEPRO",
};

const images = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  src: `/images/grafika/${index + 1}.jpg`,
  alt: `Grafika ${index + 1}`,
}));

export default function Grafika() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="GRAFICKÁ IDENTITA"
        description="Vylepšete vizuální identitu vaší značky pomocí našich
        profesionálních grafických služeb. Postaráme se o to, aby váš vizuální styl byl
        konzistentní, moderní a odpovídal vaší značce."
        imageSrc="/images/background/grafika.jpg"
        imageAlt="photographer taking picture in the bathroom with wall full of graffiti"
      />
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-5xl text-white text-center mb-14">
            Naše Grafická Tvorba
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="transition-transform duration-300 hover:scale-[102%] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
