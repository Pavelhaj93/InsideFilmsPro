"use client";

const VideoSection = () => {
  return (
    <section
      id="aboutUsSection"
      className="relative w-full h-[900px] overflow-hidden pt-[56.25%]"
    >
      {/* TODO: Add mobile video*/}

      {/* Desktop */}
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/qMNJB4Uq3ZY?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=0&loop=1&playlist=qMNJB4Uq3ZY"
        title="Inside Films Showreel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute inset-0 w-full h-full"
      />
    </section>
  );
};

export default VideoSection;
