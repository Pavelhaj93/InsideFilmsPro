"use client";

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
          src="https://www.youtube.com/embed/5aYRpVmCLZU?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=0&loop=1&mute=1&playlist=5aYRpVmCLZU&vq=hd1080"
          title="Inside Films Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute inset-0 w-full h-full md:pointer-events-none"
        />
      </div>

      {/* Mobile Video */}
      <div className="block md:hidden relative w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/k-8D9aECRiA?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=0&loop=1&mute=1&playlist=k-8D9aECRiA"
          title="INSIDEFILMS SHWRL25 HD IG"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;
