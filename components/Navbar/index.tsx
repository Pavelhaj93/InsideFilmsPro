"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import SocialMediaIcons from "../SocialMediaIcons";
import DownloadPDFLink from "../DownloadPDFLink";
import VideoModal from "@/app/_components/modals/VideoModal";
import Image from "next/image";

type CustomLink = {
  id: number;
  name: string;
  href: string;
  submenu?: CustomLink[];
};

const links: CustomLink[] = [
  {
    id: 1,
    name: "O nás",
    href: "/",
  },
  {
    id: 2,
    name: "Reference",
    href: "#",
    submenu: [
      { id: 1, name: "Reference", href: "#" },
      { id: 2, name: "Video", href: "/video" },
      { id: 3, name: "Foto", href: "/foto" },
      { id: 4, name: "Filmy", href: "/filmy" },
      { id: 5, name: "Grafika", href: "/grafika" },
    ],
  },
  {
    id: 3,
    name: "Kontakt",
    href: "/kontakt",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<CustomLink[] | null>(null);

  function toggleNavigation() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-colors duration-500 bg-black">
      <div className="mx-auto flex h-16 container items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="">
            <Image
              src="/images/insidepro_logo_cut.png"
              alt="Inside Films"
              width={100}
              height={50}
              className="object-cover"
            />
          </div>
          <span className="sr-only">Inside Films</span>
        </Link>
        <nav className="hidden text-sm font-medium md:flex text-white">
          <ul className="flex items-baseline gap-6 relative">
            {links.map((link) => (
              <li
                key={link.id}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(link.submenu || null)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href || "#"}
                  className="uppercase hover:text-gray-600 mt-4 transition duration-300 ease-in-out text-xl [text-shadow:_0_0_3px_rgb(0_0_0_/_100%)]"
                >
                  {link.name}
                </Link>
                {link.submenu && activeSubmenu === link.submenu && (
                  <ul className="absolute -left-4 -top-6 mt-2 text-white flex flex-col gap-2 p-4">
                    {link.submenu.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="uppercase hover:text-gray-600 mt-4 transition duration-300 ease-in-out text-xl [text-shadow:_0_0_3px_rgb(0_0_0_/_100%)]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="hover:bg-white hover:text-gray-600 duration-500 rounded-full text-white bg-primary px-6 border-white border-2 text-xl font-medium py-1 font-bebas"
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
          className="md:hidden bg-black min-h-screen w-screen text-white absolute top-0 flex-col flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-4 right-4">
            <Button variant="outline" onClick={toggleNavigation}>
              <XIcon className="h-8 w-8 text-white" />
            </Button>
          </div>
          <ul className="relative overflow-auto w-full top-10 flex flex-col items-center gap-4 text-4xl p-4">
            {links.map((link) => {
              if (link.submenu) {
                return (
                  <li key={link.id}>
                    <ul className="flex flex-col gap-4 items-center">
                      {link.submenu.map((submenuItem, index) =>
                        index !== 0 ? (
                          <li key={submenuItem.id}>
                            <Link
                              href={submenuItem.href || "#"}
                              className="uppercase hover:underline"
                              onClick={() => setIsOpen(false)}
                              prefetch={false}
                            >
                              {submenuItem.name}
                            </Link>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={link.id}>
                  <Link
                    href={link.href || "#"}
                    className="uppercase hover:underline"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="hover:bg-white hover:text-gray-600 duration-500 rounded-full text-white bg-primary border-white border-2 text-4xl font-medium pt-2 pb-1 px-10 font-bebas"
              >
                Showreel
              </button>
            </li>
            <li className="my-2">
              <DownloadPDFLink size="md" />
            </li>
            <li className="fixed bottom-10">
              <SocialMediaIcons />
            </li>
          </ul>
        </motion.nav>
      )}
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
      <title>Menu Icon</title>
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
      <title>Close Icon</title>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
