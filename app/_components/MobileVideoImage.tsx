"use client";

import { useState } from "react";
import VideoModal from "./modals/VideoModal";
import Image from "next/image";

export const MobileVideoImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/background/filmy.jpg"
        alt="Inside Films"
        className="w-full h-full object-cover"
        width={375}
        height={812}
        sizes="100vw"
      />
      <button
        onClick={toggleModal}
        type="button"
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-white hover:text-gray-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Play Video</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3l14 9-14 9V3z"
          />
        </svg>
      </button>

      <VideoModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};
