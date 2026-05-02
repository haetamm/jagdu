"use client";

import { Filter } from "lucide-react";
import { Button } from "../ui/button";

interface FilterToggleButtonProps {
  isOpen: boolean;
  hasActiveFilter: boolean;
  onClick: () => void;
}

export default function FilterToggleButton({
  isOpen,
  hasActiveFilter,
  onClick,
}: FilterToggleButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
        isOpen || hasActiveFilter
          ? "bg-primary/10 text-primary border border-primary/20"
          : "bg-secondary text-muted-foreground hover:text-foreground"
      }`}
    >
      <Filter size={14} />
      Filter
      {hasActiveFilter && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      )}
    </Button>
  );
}
