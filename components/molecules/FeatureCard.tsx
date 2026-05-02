import { cn } from "@/lib/utils/helper";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  accent = "var(--primary)",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-6 border border-border bg-card transition-all duration-500",
        "hover:-translate-y-1",
        className,
      )}
    >
      {/* Hover glow top line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {/* Icon wrapper */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
        style={{
          background: `${accent}14`,
          border: `1px solid ${accent}25`,
          color: accent,
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className=" font-semibold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Corner accent */}
      <div className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M14 4 L20 4 L20 10"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20 4 L12 12"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
