"use client";

import { Button } from "../ui/button";

interface CategoryChipProps {
  label: string;
  icon?: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryChip({
  label,
  icon,
  isActive,
  onClick,
}: CategoryChipProps) {
  return (
    <Button
      onClick={onClick}
      className={`px-3 py-2 rounded-xl text-xs transition-all ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground hover:text-foreground"
      }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </Button>
  );
}
