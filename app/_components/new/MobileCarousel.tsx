import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/Carousel/Carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import type { FC } from "react";
import type { Company } from "../ReferencesSection";

interface MobileCarouselProps {
  companies: Company[];
}

const MobileCarousel: FC<MobileCarouselProps> = ({ companies }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 0.9,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full lg:mb-5 mt-5 lg:hidden"
    >
      <CarouselContent>
        {companies.map((company, index) => (
          <CarouselItem
            key={index}
            // className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6 2xl:basis-1/7"
            className="basis-auto pl-10"
          >
            <div className="flex items-center w-full h-[100px] justify-center">
              <Image
                src={company.logo}
                alt={`Partner ${company.name}`}
                height={100}
                width={140}
                className={`w-auto max-h-12 object-cover ${company.height} filter grayscale hover:grayscale-0 [transition: filter] duration-300 ease-in-out`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MobileCarousel;
