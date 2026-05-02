import { cn } from "../../lib/utils/helper";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
}

export function ProgressBar({
  value,
  max = 100,
  className,
  barClassName,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={cn(
        "h-1.5 bg-slate-800 rounded-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "h-full bg-emerald-500 transition-all duration-1000 ease-out",
          barClassName,
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
