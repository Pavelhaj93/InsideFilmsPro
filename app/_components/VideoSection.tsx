"use client";

import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const target =
      typeof window !== "undefined" && window.innerWidth >= 768
        ? desktopVideoRef.current
        : mobileVideoRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    const target =
      typeof window !== "undefined" && window.innerWidth >= 768
        ? desktopVideoRef.current
        : mobileVideoRef.current;

    if (!target) return;

    if (isInView) {
      target.play().catch(() => {});
    } else {
      target.pause();
    }
  }, [isInView]);

  return (
    <section
      id="videoSection"
      className="relative w-full overflow-hidden md:h-auto"
    >
      {/* Desktop Video */}
      <div className="hidden md:block w-full h-full">
        <video
          ref={desktopVideoRef}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/eu8vo1at2ksf46nszokq`}
          className="w-full h-full max-h-screen pointer-events-none bg-black"
          autoPlay
          loop
          playsInline
          muted
          controls={false}
        />
      </div>

      {/* Mobile Video */}
      <div className="block md:hidden relative w-full h-full">
        <video
          ref={mobileVideoRef}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/rukll0mxoskxhl3dgxlz`}
          className="w-full h-full max-h-screen pointer-events-none bg-black"
          autoPlay
          loop
          playsInline
          muted
          controls={false}
        />
      </div>
    </section>
  );
};

export default VideoSection;
