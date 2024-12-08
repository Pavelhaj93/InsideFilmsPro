"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import SocialMediaIcons from "../SocialMediaIcons";
import DownloadPDFLink from "../DownloadPDFLink";
import VideoModal from "@/app/_components/modals/VideoModal";
import ReactLogo from "./ReactLogo";

const links = [
  {
    id: 1,
    name: "Domů",
    href: "/",
  },
  {
    id: 2,
    name: "Video",
    href: "/video",
  },
  {
    id: 3,
    name: "Foto",
    href: "/foto",
  },
  {
    id: 4,
    name: "Kontakt",
    href: "/kontakt",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function toggleNavigation() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-colors duration-500 bg-black">
      <div className="mx-auto flex h-16 container items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center" prefetch={false}>
          <div className="h-20 w-36 group">
            <ReactLogo
              className="h-full w-full transition-colors"
              color={isHovered ? "#6b7280" : "#fff"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <span className="sr-only">Inside Films</span>
        </Link>
        <nav className="hidden text-sm font-medium md:flex text-white">
          <ul className="flex items-baseline gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="uppercase hover:text-gray-600 mt-4 transition duration-300 ease-in-out text-xl [text-shadow:_0_0_3px_rgb(0_0_0_/_100%)]"
                  prefetch={false}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="hover:bg-white hover:text-gray-600 duration-500  rounded-full text-white bg-primary px-6 border-white border-2 text-xl font-medium py-1 font-bebas"
              >
                Showreel
              </button>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center">
          <Button variant="outline" onClick={toggleNavigation}>
            {isOpen ? (
              <XIcon className="h-8 w-8 text-white" />
            ) : (
              <MenuIcon className="h-8 w-8 text-white" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden bg-black h-screen w-screen text-white asbolute top-0 flex-col flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="relative top-10 flex flex-col items-center gap-6 text-4xl p-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="uppercase hover:underline"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  prefetch={false}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="hover:bg-white hover:text-gray-600 duration-500 rounded-full text-white bg-primary border-white border-2 text-4xl font-medium pt-2 pb-1 px-10 font-bebas"
              >
                Showreel
              </button>
            </li>
              
          </ul>
          <div className="fixed bottom-20">
            <DownloadPDFLink size="md" />
          </div>
          <div className="fixed bottom-10">
            <SocialMediaIcons />
          </div>
        </motion.nav>
      )}
      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Navbar;

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
