import type { FC } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-7xl h-[calc(100vh-10%)]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Ak5tPI3f8q8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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
