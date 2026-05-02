"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  detail?: string;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  detail,
  color = "text-primary",
}: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-xl bg-primary/10 ${color}`}>
          <Icon size={18} />
        </div>
      </div>
      <p className="text-muted-foreground text-sm">{title}</p>
      <p className={`text-2xl font-bold text-foreground mt-1 ${color}`}>
        {value}
      </p>
      {detail && <p className="text-muted-foreground text-xs mt-2">{detail}</p>}
    </div>
  );
}
