import { cn, getScoreLabel } from "../../lib/utils/helper";
import { ProgressBar } from "../atoms/ProgressBar";

interface HealthScoreCardProps {
  score: number;
  className?: string;
}

export default function HealthScoreCard({
  score,
  className,
}: HealthScoreCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border border-emerald-500/30 rounded-3xl p-8 shadow-lg shadow-emerald-500/5",
        className,
      )}
    >
      <h2 className=" text-xs font-bold uppercase tracking-widest">
        Financial Health Score
      </h2>
      <div className="flex items-baseline gap-2 mt-4">
        <div className="text-7xl lg:text-8xl font-black leading-none tracking-tighter">
          {score}
        </div>
        <div className="text-2xl font-bold">/ 100</div>
      </div>
      <p className=" font-medium mt-6 italic text-lg leading-snug">
        {getScoreLabel(score)}
      </p>
      <div className="mt-8">
        <ProgressBar
          value={score}
          className="h-1.5"
          barClassName="bg-emerald-500"
        />
      </div>
    </div>
  );
}
