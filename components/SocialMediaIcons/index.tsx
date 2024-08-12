"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaVimeoV, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

// Define your social media links
const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/insidefilmscz/",
    icon: <FaInstagram size={24} />, // Instagram icon
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://www.facebook.com/insideFILMScz",
    icon: <FaFacebookF size={24} />, // Facebook icon
  },
  {
    id: 3,
    name: "Vimeo",
    url: "https://vimeo.com/insidefilmscz",
    icon: <FaVimeoV size={24} />, // Vimeo icon
  },
  {
    id: 4,
    name: "Youtube",
    url: "https://www.youtube.com/@INSIDEPROCZ",
    icon: <FaYoutube size={24} />, // Youtube icon
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-8 space-x-4">
      {socialLinks.map(({ id, name, url, icon }) => (
        <motion.div
          key={id}
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            y: -5,
            transition: {
              yoyo: Infinity, // Makes the animation loop back and forth
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
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
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
