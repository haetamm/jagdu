import { type ReactNode } from "react";
import { cn } from "../../lib/utils/helper";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
