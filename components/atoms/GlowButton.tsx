import { cn } from "@/lib/utils/helper";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
}

const variantClasses = {
  accent:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(200,255,0,0.25)] hover:shadow-[0_0_50px_rgba(200,255,0,0.4)]",
  ghost: "bg-transparent text-foreground hover:bg-accent border border-border",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary/10 shadow-[0_0_20px_rgba(200,255,0,0.1)]",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export function GlowButton({
  variant = "accent",
  size = "md",
  href,
  showArrow = false,
  children,
  className,
  ...props
}: GlowButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-wide",
    "transition-all duration-300 ease-out cursor-pointer",
    "active:scale-95",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <FiArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
          size={size === "lg" ? 20 : size === "md" ? 18 : 16}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(base, "group")} {...props}>
      {content}
    </button>
  );
}
