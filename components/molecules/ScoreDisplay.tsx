import { Badge } from "@/components/ui/badge";
import { getScoreConfig } from "@/lib/utils/helper";

interface ScoreDisplayProps {
  score: number;
}

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  const config = getScoreConfig(score);
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            className="stroke-muted"
            strokeWidth="12"
          />
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke={config.border}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-black ${config.color}`}>{score}</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            Score
          </span>
        </div>
      </div>
      <Badge
        className={`${config.bg} ${config.color} border-0 uppercase tracking-widest font-black`}
      >
        {config.label}
      </Badge>
    </div>
  );
}
