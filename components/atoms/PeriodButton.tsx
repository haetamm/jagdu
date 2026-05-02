"use client";

import { FilterPeriod } from "@/lib/utils/types";
import { Button } from "../ui/button";

interface PeriodButtonProps {
  period: FilterPeriod;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function PeriodButton({
  label,
  isActive,
  onClick,
}: PeriodButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Button>
  );
}
