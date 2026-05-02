"use client";

import { cn } from "@/lib/utils/helper";

type HeaderProps = {
  children?: React.ReactNode;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  children,
  left,
  center,
  right,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn("flex items-center justify-between mb-10", className)}
    >
      {/* Left */}
      <div className="flex-shrink-0">{left || children}</div>

      {/* Center */}
      <div className="flex-1 flex justify-center">{center}</div>

      {/* Right */}
      <div className="flex-shrink-0 flex items-center gap-3">{right}</div>
    </header>
  );
}
