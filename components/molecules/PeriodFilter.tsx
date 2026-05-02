"use client";

import { FilterPeriod } from "@/lib/utils/types";
import PeriodButton from "../atoms/PeriodButton";

interface PeriodFilterProps {
  activePeriod: FilterPeriod;
  onPeriodChange: (period: FilterPeriod) => void;
}

export default function PeriodFilter({
  activePeriod,
  onPeriodChange,
}: PeriodFilterProps) {
  const periods = [
    { id: "all" as FilterPeriod, label: "All" },
    { id: "month" as FilterPeriod, label: "This Month" },
    { id: "3month" as FilterPeriod, label: "3 Months" },
  ];

  return (
    <div className="flex gap-1 bg-secondary/50 rounded-xl p-1">
      {periods.map((p) => (
        <PeriodButton
          key={p.id}
          period={p.id}
          label={p.label}
          isActive={activePeriod === p.id}
          onClick={() => onPeriodChange(p.id)}
        />
      ))}
    </div>
  );
}
