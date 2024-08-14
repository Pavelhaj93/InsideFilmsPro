"use client";

const VideoSection = () => {
  return (
    <section
      id="aboutUsSection"
      className="relative w-full py-12 md:py-24 px-4 lg:py-32 h-[900px]"
    >
      {/* Background for Desktop */}
      <video
        autoPlay
        loop
        src="/videos/INSIDEPRO_WEB_HD_CROP.mp4"
        muted
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Background for Mobile */}
      <video
        autoPlay
        loop
        muted
        src="/videos/INSIDEPRO_MOBILE.mp4"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />
    </section>
  );
};

export default VideoSection;
