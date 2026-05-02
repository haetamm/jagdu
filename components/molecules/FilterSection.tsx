"use client";

import { FilterCategory, FilterPeriod } from "@/lib/utils/types";
import FilterToggleButton from "../atoms/FilterToggleButton";
import CategoryFilter from "./CategoryFilter";
import PeriodFilter from "./PeriodFilter";

interface FilterSectionProps {
  period: FilterPeriod;
  category: FilterCategory;
  isFilterOpen: boolean;
  onPeriodChange: (period: FilterPeriod) => void;
  onCategoryChange: (category: FilterCategory) => void;
  onFilterToggle: () => void;
}

export default function FilterSection({
  period,
  category,
  isFilterOpen,
  onPeriodChange,
  onCategoryChange,
  onFilterToggle,
}: FilterSectionProps) {
  return (
    <div
      id="transaction-section"
      className="bg-card border border-border rounded-2xl overflow-hidden"
    >
      <div className="p-4 flex flex-wrap items-center justify-between gap-3">
        <PeriodFilter activePeriod={period} onPeriodChange={onPeriodChange} />

        <div className="flex items-center gap-2">
          <FilterToggleButton
            isOpen={isFilterOpen}
            hasActiveFilter={category !== "all"}
            onClick={onFilterToggle}
          />
          <CategoryFilter
            activeCategory={category}
            onCategoryChange={onCategoryChange}
            isDesktop={true}
          />
        </div>
      </div>

      {isFilterOpen && (
        <div className="p-4 pt-0 border-t border-border lg:hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <p className="text-xs text-muted-foreground mb-2">Kategori</p>
          <CategoryFilter
            activeCategory={category}
            onCategoryChange={onCategoryChange}
            isDesktop={false}
          />
        </div>
      )}
    </div>
  );
}
