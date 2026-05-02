import { cn } from "@/lib/utils/helper";
import { ReactNode } from "react";

interface StepProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function HowItWorksStep({
  number,
  icon,
  title,
  description,
  isLast = false,
  className,
}: StepProps) {
  return (
    <div className={cn("flex gap-5", className)}>
      {/* Left: Number + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center text-base  font-bold z-10 flex-shrink-0 bg-secondary border border-border text-primary">
          {/* Glow behind number */}
          <span className="absolute inset-0 rounded-full blur-md opacity-40 bg-primary" />
          <span className="relative z-10 text-sm">
            {String(number).padStart(2, "0")}
          </span>
        </div>

        {/* Connector line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-3 bg-gradient-to-b from-border to-transparent"
            style={{ minHeight: "40px" }}
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl text-primary">{icon}</span>
          <h3 className=" font-semibold text-lg text-foreground">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
