"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeadingSection from "@/components/HeadingSection/HeadingSection";
import { Dialog, DialogContent } from "@/components/Dialog";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CustomImage = {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      const nextIndex = (selectedImageIndex + 1) % imageData.length;
      setSelectedImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      const prevIndex =
        (selectedImageIndex - 1 + imageData.length) % imageData.length;
      setSelectedImageIndex(prevIndex);
    }
  };

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
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      // width={image.width}
                      // height={image.height}
                      width={400}
                      height={400}
                      className="object-cover aspect-square w-full h-full rounded-lg shadow-lg cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                      loading="lazy"
                      quality={100}
                    />
                  </DialogTrigger>
                  <DialogContent className="flex items-center h-[90vh] md:w-[90vw] bg-black/80">
                    {selectedImageIndex !== null && (
                      <>
                        <Image
                          src={imageData[selectedImageIndex].src}
                          alt={imageData[selectedImageIndex].alt}
                          // width={imageData[selectedImageIndex].width}
                          // height={imageData[selectedImageIndex].height}
                          // width={imageData[selectedImageIndex].modalWidth}
                          // height={imageData[selectedImageIndex].modalHeight}
                          sizes="100vw"
                          fill
                          quality={100}
                          className="h-full object-contain max-h-full w-full"
                        />

                        <button
                          type="button"
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none"
                          aria-label="Previous Image"
                        >
                          <ArrowLeft />
                        </button>

                        <button
                          type="button"
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none"
                          aria-label="Next Image"
                        >
                          <ArrowRight />
                        </button>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
