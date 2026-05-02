export function ScoreBadge({ score }: { score: number | null }) {
  if (score === null) return null;
  const color =
    score >= 70
      ? "text-emerald-400 bg-emerald-400/10"
      : score >= 45
        ? "text-yellow-400 bg-yellow-400/10"
        : "text-red-400 bg-red-400/10";
  return (
    <span
      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${color}`}
    >
      {score}/100
    </span>
  );
}
