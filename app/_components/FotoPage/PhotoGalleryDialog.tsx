"use client";

import type { CustomImage } from "@/app/foto/page";
import { Dialog, DialogContent } from "@/components/Dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { type FC, useState } from "react";

interface PhotoGalleryDialogProps {
  image: CustomImage;
  imageData: CustomImage[];
  index: number;
}

const PhotoGalleryDialog: FC<PhotoGalleryDialogProps> = ({
  image,
  imageData,
  index,
}) => {
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

  return (
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
  );
};

export default PhotoGalleryDialog;
