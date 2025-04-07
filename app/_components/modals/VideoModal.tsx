import type { FC } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  console.log(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/eu8vo1at2ksf46nszokq`
  );

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-full max-w-7xl h-[calc(100vh-10%)] bg-black bg-opacity-80">
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/lf4-ew5PI9w?si=VWfmamzt23S5_17A?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=0&loop=1&playlist=lf4-ew5PI9w?si=VWfmamzt23S5_17A"
          title="Inside Films Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute inset-0 w-full h-full"
        /> */}
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/lf4-ew5PI9w?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=0&loop=1&playlist=lf4-ew5PI9w"
          title="Inside Films Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute inset-0 w-full h-full"
        /> */}
        {/* <video
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/eu8vo1at2ksf46nszokq`}
          className="z-50 w-full h-full max-h-screen pointer-events-none bg-black"
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 p-2 rounded-full hover:bg-gray-600"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
