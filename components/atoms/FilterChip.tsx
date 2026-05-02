"use client";

interface FilterChipProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function FilterChip({
  active,
  onClick,
  children,
}: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
      }`}
    >
      {children}
    </button>
  );
}
