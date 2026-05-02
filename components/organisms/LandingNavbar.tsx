"use client";

import { urlPage } from "@/lib/utils/constans";
import Link from "next/link";
import ThemeToggle from "../atoms/ThemeToggle";
import LandingButton from "../molecules/LandingButton";

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-[20px] border-b border-border">
      {/* Logo */}
      <Link href={urlPage.LANDING} className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold bg-primary text-primary-foreground">
          J
        </div>
        <span className="font-bold text-lg tracking-tight text-foreground">
          Jagdu
        </span>
        <span className="hidden sm:block text-xs text-muted-foreground">
          / think before you spend
        </span>
      </Link>

      {/* Nav */}
      <div className="hidden md:flex items-center gap-8">
        {["Home", "Features", "How It Works"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm transition-colors duration-200 hover:text-foreground text-muted-foreground"
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <ThemeToggle />
        <LandingButton size="sm" />
      </div>
    </nav>
  );
}
