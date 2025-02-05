"use client";

import { FaGithub, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/avapuppygurl",
    icon: <FaTwitter />,
  },
  {
    name: "GitHub",
    url: "https://github.com/avanastar",
    icon: <FaGithub />,
  },
];

export const Socials = () => {
  return (
    <div className="flex gap-4 pt-4">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={link.url} className="text-2xl">
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
