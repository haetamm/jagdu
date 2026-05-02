"use client";

import { cn, NAV_ITEMS } from "@/lib/utils/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 lg:hidden">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-t border-border" />

      <div className="relative flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <div
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                  isActive && "bg-primary/15",
                )}
              >
                {/* Active glow */}
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-primary/20 blur-md" />
                )}
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  className="relative z-10"
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium tracking-wide transition-all",
                  isActive ? "opacity-100" : "opacity-50",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
