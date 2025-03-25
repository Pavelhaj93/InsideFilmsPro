"use client";

import { MobileVideoImage } from "./MobileVideoImage";

const VideoSection = () => {
  return (
    <section
      id="videoSection"
      className="relative w-full overflow-hidden h-[1200px] md:h-auto"
    >
      {/* Desktop Video */}
      <div className="hidden md:block relative w-full pt-[56.25%]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/lf4-ew5PI9w?si=VWfmamzt23S5_17A?autoplay=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Mobile Video */}
      <div className="block md:hidden relative w-full h-full">
        <MobileVideoImage />
      </div>
    </section>
  );
};

export default VideoSection;
