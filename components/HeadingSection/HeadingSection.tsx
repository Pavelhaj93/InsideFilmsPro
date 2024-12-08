import Image from "next/image";

type HeadingSectionProps = {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
};

const HeadingSection = ({
  imageSrc,
  imageAlt,
  heading,
  description,
}: HeadingSectionProps) => {
  return (
    <section className="relative mt-16">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1920}
        height={1080}
        className="object-cover w-full h-[calc(66vh)]"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      {/* Overlay */}
      <div className="absolute inset-1 bottom-20 flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="mb-4 text-9xl font-light text-white font-bebas lg:text-[220px]">
              {heading}
            </h1>
            <p className="text-lg tracking-wide text-gray-200 md:text-xl lg:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
