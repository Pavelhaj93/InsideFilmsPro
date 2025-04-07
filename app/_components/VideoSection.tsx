import { MobileVideoImage } from "./MobileVideoImage";

const VideoSection = () => {
  return (
    <section
      id="videoSection"
      className="relative w-full overflow-hidden md:h-auto"
    >
      {/* Desktop Video */}
      <div className="hidden md:block w-full h-full">
        <video
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/eu8vo1at2ksf46nszokq`}
          className="w-full h-full max-h-screen pointer-events-none bg-black"
          autoPlay
          loop
          muted
          playsInline
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
