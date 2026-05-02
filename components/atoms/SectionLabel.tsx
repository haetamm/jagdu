import { cn } from "@/lib/utils/helper";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="h-px w-8 block bg-primary" />
      <span className="text-xs tracking-[0.2em] uppercase text-primary">
        {children}
      </span>
      <span className="h-px w-8 block bg-primary" />
    </div>
  );
}
