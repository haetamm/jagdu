"use client";

import { urlPage } from "@/lib/utils/constans";
import { cn } from "@/lib/utils/helper";
import {
  ChartPie,
  ClockArrowUp,
  LayoutDashboard,
  ScanSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../atoms/ThemeToggle";

const NAV_ITEMS = [
  { href: urlPage.DASHBOARD, label: "Dashboard", icon: LayoutDashboard },
  { href: urlPage.ANALYZE, label: "Analyze", icon: ScanSearch },
  { href: urlPage.HISTORY, label: "History", icon: ClockArrowUp },
  { href: urlPage.INSIGHTS, label: "Insights", icon: ChartPie },
] as const;

interface SidebarNavProps {
  className?: string;
}

export default function SidebarNav({ className }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden lg:block fixed top-0 h-full lg:w-45 xl:w-64 z-50",
        className,
      )}
    >
      <div className="relative h-full lg:w-45 xl:w-64 bg-card/80 backdrop-blur-xl border-r border-border flex flex-col">
        {/* Logo + Theme Toggle */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Link href={urlPage.LANDING} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              J
            </div>
            <span className="font-bold text-lg text-foreground">Jagdu</span>
          </Link>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            No cloud • Your data
          </p>
        </div>
      </div>
    </aside>
  );
}
