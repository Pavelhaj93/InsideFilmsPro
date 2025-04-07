import HeadingSection from "@/components/HeadingSection/HeadingSection";
import type { Metadata } from "next";
import PhotoGalleryDialog from "../_components/FotoPage/PhotoGalleryDialog";

export const metadata: Metadata = {
  title: "Naše foto reference | R&T Production s.r.o. | INSIDEPRO",
  description: "Naše foto reference | R&T Production s.r.o. | INSIDEPRO",
};

export type CustomImage = {
  id: number;
  src: string;
  alt: string;
  width: number | string;
  height: number;
  modalWidth: number;
  modalHeight: number;
};

const imageData: CustomImage[] = Array.from({ length: 58 }, (_, index) => ({
  id: index + 1,
  src: `/foto/${index + 1}.jpg`,
  alt: `Photo ${index + 1}`,
  width:
    (index + 1) % 7 === 0 || index === 0
      ? "(max-width: 640px) calc(100vw - 16px), (max-width: 768px) 288px,  "
      : 400,
  height: (index + 1) % 7 === 0 || index === 0 ? 900 : 400,
  modalWidth: 1920,
  modalHeight: 1080,
}));

export default function PhotoGallery() {
  // 4xl: 2560
  // 3xl: 1920
  // 2xl: 1536
  // xl: 1280
  // lg: 1024
  // md: 768
  // sm: 640
  // xs: 375

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="FOTOGALERIE"
        description="Posilte vizuální stránku vaší značky prostřednictvím
profesionální fotografie zachycující jedinečné okamžiky.
Pomůžeme vám sjednotit vizuální identitu vašich videí a fotografií tak,
aby dokonale odrážela charakter vaší značky."
        imageSrc="/images/background/foto.jpg"
        imageAlt="Foto production background"
      />

      {/* New Photo Gallery Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-white text-center mb-14">
            Naše foto reference
          </h2>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-8">
            {imageData.map((image, index) => (
              <div
                key={image.id}
                className={`${
                  (index + 1) % 7 === 0 || index === 0
                    ? "lg:col-span-2 lg:row-span-2"
                    : "lg:col-span-1 lg:row-span-1"
                }`}
              >
                <PhotoGalleryDialog
                  image={image}
                  imageData={imageData}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
