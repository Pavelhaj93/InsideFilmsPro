"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaVimeoV } from "react-icons/fa";

// Define your social media links
const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram size={24} />, // Instagram icon
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebookF size={24} />, // Facebook icon
  },
  {
    id: 3,
    name: "Vimeo",
    url: "https://vimeo.com/",
    icon: <FaVimeoV size={24} />, // Vimeo icon
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-8 space-x-4">
      {socialLinks.map(({ id, name, url, icon }) => (
        <Link
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <span className="text-white hover:text-gray-400 transition duration-300 ease-in-out">
            {icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
