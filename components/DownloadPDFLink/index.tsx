import Link from "next/link";

const DownloadPDFLink = () => {
  return (
    <div className="text-center my-6">
      <Link
        download
        href="/pdf/INSIDEPRO-2024.pdf"
        target="_blank"
        className="hover:bg-white hover:text-black duration-500 rounded-full inline-flex text-white items-center justify-center bg-primary px-8 border-white border-2 text-xl font-medium pt-1 font-bebas"
      >
        Stáhnout prezentaci v PDF
      </Link>
    </div>
  );
};

export default DownloadPDFLink;
