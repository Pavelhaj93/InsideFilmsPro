"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeadingSection from "@/components/HeadingSection/HeadingSection";

type CustomImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const imageData: CustomImage[] = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  src: `/foto/${index + 1}.jpg`,
  alt: `Photo ${index + 1}`,
  width: (index + 1) % 7 === 0 || index === 0 ? 900 : 400,
  height: (index + 1) % 7 === 0 || index === 0 ? 900 : 400,
}));

export default function PhotoGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
    return () => {
      removeEventListener("keydown", () => {});
    };
  }, []);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

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

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="FOTO"
        description="Posilte vizuální stránku vaší značky prostřednictvím
                profesionální fotografie zachycující jedinečné okamžiky. Na
                každý projekt zajistíme toho nejvhodnějšího fotografa, který
                dokonale vystihne váš styl. Pomůžeme vám sjednotit vizuální
                identitu vašich videí a fotografií tak, aby dokonale odrážela
                charakter vaší značky."
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover aspect-square w-full h-full rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openModal(index)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 text-white text-5xl hover:text-gray-500 transition-colors"
            >
              &times; {/* Close button */}
            </button>

            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute top-1/2 left-0 p-4 text-white text-4xl hover:text-gray-500 transition-colors"
            >
              &#8592;
            </button>

            {/* Image Display */}
            <Image
              src={imageData[selectedImageIndex].src}
              alt={imageData[selectedImageIndex].alt}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain max-w-[90vw] max-h-[90vh]"
              quality={100}
            />

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-0 top-1/2 p-4 text-white text-4xl hover:text-gray-500 transition-colors"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
