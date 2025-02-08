"use client";

import { FaGithub, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/avapuppygurl",
    icon: <FaTwitter />,
    color: "text-blue-500",
  },
  {
    name: "GitHub",
    url: "https://github.com/avanastar",
    icon: <FaGithub />,
    color: "text-gray-500",
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
          <Link
            href={link.url}
            className={cn(
              "text-2xl transition-colors duration-300 hover:text-gray-400",
              link.color,
            )}
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
