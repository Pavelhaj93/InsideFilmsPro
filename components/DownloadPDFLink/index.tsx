import Link from "next/link";
import type { FC } from "react";

interface DownloadPDFLinkProps {
  size: "sm" | "md" | "lg";
}

const DownloadPDFLink: FC<DownloadPDFLinkProps> = ({ size }) => {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  const sizeVar = sizes[size];

  return (
    <div className="text-center">
      <Link
        download
        href="/pdf/INSIDEPRO_2024.pdf"
        target="_blank"
        className={`hover:bg-white hover:text-black duration-500 rounded-full inline-flex text-white items-center justify-center bg-primary px-8 border-white border-2 font-medium pt-1 font-bebas ${sizeVar}`}
      >
        Stáhnout prezentaci v PDF
      </Link>
    </div>
  );
};

export default DownloadPDFLink;
