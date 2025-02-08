"use client";

import { motion } from "framer-motion";

interface EmojiProps {
  emoji: string;
}

export const Emoji = (props: EmojiProps) => {
  const { emoji } = props;

  if (!emoji) {
    return null;
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{ duration: 1, bounce: 0.5, type: "spring" }}
      drag
      dragSnapToOrigin
      className="emoji cursor-default select-none text-4xl"
    >
      {emoji}
    </motion.span>
  );
};
