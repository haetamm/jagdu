import { cn } from "@/lib/utils/helper";
import { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
  footer?: ReactNode;
}

export default function MetricCard({
  label,
  value,
  icon,
  className,
  footer,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-sm",
        className,
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          {label}
        </p>
        {icon && <div className="text-slate-400 opacity-60">{icon}</div>}
      </div>

      <div>
        <p className="text-white font-bold text-lg tracking-tight">{value}</p>

        {footer}
      </div>
    </div>
  );
}
