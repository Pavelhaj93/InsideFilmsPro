"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import mainLogo from "../../public/images/logo.svg";
import Button from "../Button";
import { motion } from "framer-motion";
import SocialMediaIcons from "../SocialMediaIcons";
import DownloadPDFLink from "../DownloadPDFLink";

const links = [
  {
    id: 1,
    name: "O nás",
    href: "#aboutUsSection",
  },
  {
    id: 2,
    name: "Služby",
    href: "#ourServicesSection",
  },
  {
    id: 3,
    name: "Kontakt",
    href: "#contactSection",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleNavigation() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500' ${
        isOpen || isScrolled ? "bg-black" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <div className="h-20 w-36 group">
            <Image
              src={mainLogo}
              className="h-full w-full transition duration-300 ease-in-out fill-current text-white group-hover:text-gray-500"
              alt="inside films main logo"
            />
          </div>
          <span className="sr-only">Inside Films</span>
        </Link>
        <nav className="hidden items-baseline gap-6 text-sm font-medium md:flex text-white">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="uppercase hover:text-gray-600 transition duration-300 ease-in-out text-xl [text-shadow:_0_0_3px_rgb(0_0_0_/_100%)]"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://www.youtube.com/watch?v=Ak5tPI3f8q8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white hover:text-gray-600 duration-500 rounded-full text-white bg-primary px-6 border-white border-2 text-xl font-medium pt-1 font-bebas"
          >
            Showreel
          </Link>
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
          <ul className="relative top-20 flex flex-col items-center gap-10 text-2xl p-4">
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
              
          </ul>
          <div className="fixed bottom-32">
            <DownloadPDFLink />
          </div>
          <div className="fixed bottom-20 xl:bottom-10">
            <SocialMediaIcons />
          </div>
        </motion.nav>
      )}
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
