"use client";

import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // adjust as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);
  return (
    <section
      id="videoSection"
      className="relative w-full overflow-hidden md:h-auto"
    >
      {/* Desktop Video */}
      <div className="block w-full h-full">
        <video
          ref={videoRef}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/eu8vo1at2ksf46nszokq`}
          className="w-full h-full max-h-screen pointer-events-none bg-black"
          autoPlay
          loop
          playsInline
          muted
          controls={false}
        />
      </div>

      {/* TODO: add trigger to open modal with video on vimeo */}
      {/* Mobile Video */}
      {/* <div className="block md:hidden relative w-full h-full">
        <MobileVideoImage />
      </div> */}
    </section>
  );
};

export default VideoSection;
