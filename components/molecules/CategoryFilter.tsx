"use client";

import { FilterCategory } from "@/lib/utils/types";
import CategoryChip from "../atoms/CategoryChip";

interface CategoryFilterProps {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  isDesktop?: boolean;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
  isDesktop = true,
}: CategoryFilterProps) {
  const categories: { id: FilterCategory; label: string; icon: string }[] = [
    { id: "all", label: "All", icon: "" },
    { id: "purchase", label: "Purchases", icon: "🛍️" },
    { id: "topup", label: "Top Up", icon: "➕" },
  ];

  if (!isDesktop) {
    return (
      <div className="flex gap-2">
        {categories.map((cat) => (
          <CategoryChip
            key={cat.id}
            label={cat.label === "Purchases" ? "Buy" : cat.label}
            icon={cat.icon}
            isActive={activeCategory === cat.id}
            onClick={() => onCategoryChange(cat.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="hidden lg:flex gap-2">
      {categories.map((cat) => (
        <CategoryChip
          key={cat.id}
          label={cat.label}
          icon={cat.icon}
          isActive={activeCategory === cat.id}
          onClick={() => onCategoryChange(cat.id)}
        />
      ))}
    </div>
  );
}
