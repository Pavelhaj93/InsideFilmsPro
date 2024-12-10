import HeadingSection from "@/components/HeadingSection/HeadingSection";
import Image from "next/image";

const images = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  src: `/images/filmy/${index + 1}.jpg`,
  alt: `Film ${index + 1}`,
}));

export default function Films() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="FILMY"
        description="Vytváříme kvalitní audiovizuální produkce pro všechny platformy. Od
        krátkých reklamních spotů až po celovečerní filmy a dokumenty. Naše produkce
        vzniká s láskou k detailu a s důrazem na kvalitu."
        imageSrc="/images/background/filmy.jpg"
        imageAlt="Filmy production background"
      />

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-white text-center mb-14">
            Naše Filmy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="transition-transform duration-300 hover:scale-[102%] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
