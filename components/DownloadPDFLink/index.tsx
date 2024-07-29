import Link from "next/link";
import React from "react";

const DownloadPDFLink = () => {
  return (
    <div className="text-center my-6">
      <Link
        download
        href="/pdf/INSIDEPRO-2024.pdf"
        target="_blank"
        className="hover:bg-white hover:text-black duration-500 rounded-full inline-flex text-white h-10 items-center justify-center bg-primary px-8 border-white border-2 text-xl font-medium pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-bebas pb-1"
      >
        Stáhnout prezentaci v PDF
      </Link>
    </div>
  );
};

export default DownloadPDFLink;
