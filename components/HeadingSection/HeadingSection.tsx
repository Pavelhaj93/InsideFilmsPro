import Image from "next/image";

type HeadingSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  heading: string;
  description: string;
  videoSrc?: string;
};

const HeadingSection = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  videoSrc,
}: HeadingSectionProps) => {
  // Add query parameters for muted autoplay and hiding controls
  const modifiedVideoSrc = `${videoSrc}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getVideoId(
    videoSrc ?? ""
  )}&modestbranding=1&showinfo=0&rel=0`;

  return (
    <section className="relative mt-16">
      {imageSrc && (
        <div
          className={`relative w-full h-[40vh] md:h-[66vh] ${
            videoSrc && "md:hidden"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      )}
      {videoSrc && (
        <div className="h-[66vh] w-full relative pt-[56.25%] md:block hidden">
          <iframe
            width="100%"
            height="100%"
            src={modifiedVideoSrc}
            title="YouTube video"
            className="absolute inset-0 w-full h-full pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      {/* Overlay */}
      <div className="absolute inset-1 top-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-xl flex flex-col gap-20">
            <h1 className="mb-4 text-7xl xl:text-9xl font-extralight text-white lg:text-[180px]">
              {heading}
            </h1>
            <p className="text-lg hidden lg:block tracking-wide text-gray-200 md:text-xl lg:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Utility function to extract the video ID from the YouTube URL
const getVideoId = (url: string) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=|v\/|.+?\/v\/|.+?\/embed\/)?([^&?/]+)|(?:youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : "";
};

export default HeadingSection;
