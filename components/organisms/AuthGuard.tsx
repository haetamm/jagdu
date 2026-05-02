"use client";

import { useAuthGuard } from "@/lib/hooks/useAuthGuard";
import type { ReactNode } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { isLoading } = useAuthGuard(true); // true = butuh profile

  if (isLoading) {
    return (
      <div className="min-h-screen bg-kira-bg flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-kira-accent border-t-transparent animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
