"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Moon, Sun } from "@mynaui/icons-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// const navItems = [
//   {
//     label: "Privacy Policy",
//     href: "/privacy-policy",
//   },
//   {
//     label: "Terms of Service",
//     href: "/terms-of-service",
//   },
// ];

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 right-0 top-0 z-50 m-4 flex items-center justify-between rounded-lg border bg-background/90 p-4 shadow-lg backdrop-blur-sm transition-all duration-300"
    >
      <Link href="/">BytePuppy</Link>
      {/* <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium",
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div> */}
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </motion.nav>
  );
};
