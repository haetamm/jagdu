import { cn } from "@/lib/utils/helper";

interface StepIndicatorProps {
  current: number;
}

export default function StepIndicator({ current }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {[1, 2, 3].map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          {/* Circle */}
          <div
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
              step < current && "bg-kira-accent scale-90",
              step === current &&
                "bg-kira-accent text-primary ring-2 ring-primary/30 scale-110",
              step > current &&
                "bg-transparent border-muted text-muted-foreground",
            )}
          >
            {step < current ? <span className="text-base">✓</span> : step}
          </div>

          {/* Line connector */}
          {index < 2 && (
            <div
              className={cn(
                "h-[3px] w-10 rounded-full transition-all",
                step < current ? "bg-kira-accent" : "bg-border",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
