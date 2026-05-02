import AuthGuard from "@/components/organisms/AuthGuard";
import BottomNav from "@/components/organisms/BottomNav";
import Modal from "@/components/organisms/Modal";
import SidebarNav from "@/components/organisms/SidebarNav";
import { urlPage } from "@/lib/utils/constans";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Top bar untuk mobile */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href={urlPage.LANDING} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                J
              </div>
              <span className="font-bold text-lg text-foreground">Jagdu</span>
            </Link>
            <p className="text-xs text-muted-foreground">Think before spend</p>
          </div>
        </header>

        {/* Container utama untuk desktop */}
        <div className="relative max-w-[2100px] mx-auto">
          <div className="lg:flex lg:gap-3">
            {/* Sidebar - ini akan berada di dalam container yang centered */}
            <div className="hidden lg:block lg:w-45 xl:w-64 lg:flex-shrink-0">
              <div className="sticky top-0">
                <SidebarNav />
              </div>
            </div>

            {/* Main content */}
            <main className="flex-1 min-w-0 pb-24 lg:pb-6">{children}</main>
          </div>
        </div>

        {/* Bottom Navigation untuk mobile */}
        <BottomNav />
        <Modal />
      </div>
    </AuthGuard>
  );
}
