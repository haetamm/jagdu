import { Bot, Lightbulb } from "lucide-react";

interface InsightsAdviceProps {
  impulsiveRate: number;
  hasBudget: boolean;
}

export default function InsightsAdvice({
  impulsiveRate,
  hasBudget,
}: InsightsAdviceProps) {
  return (
    <div className="space-y-6">
      {/* INSIGHT */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Bot size={22} className="text-white" />
          </div>
          <h3 className="font-bold text-white text-lg tracking-tight">
            Jagdu&lsquo;s Smart Insight
          </h3>
        </div>
        <p className="text-slate-400 leading-relaxed text-sm">
          You tend to make small, frequent purchases. Individually harmless, but
          they total a significant leak in your finances. Specifically,{" "}
          <span className="text-indigo-400 font-bold">{impulsiveRate}%</span> of
          your decisions were flagged as impulsive.
        </p>
        <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
          <span className="text-slate-500 uppercase font-bold text-[10px] tracking-widest">
            Impulsive Rate
          </span>
          <span className="text-rose-400 font-bold text-lg">
            {impulsiveRate}%
          </span>
        </div>
        {!hasBudget && (
          <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-bold uppercase tracking-wider">
            <AlertTriangleIcon size={14} />
            <span>Missing Budget: High risk detected</span>
          </div>
        )}
      </div>

      {/* ADVICE */}
      <div className="bg-slate-900 dark:bg-indigo-950/20 border border-indigo-500/20 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-3 text-white font-bold mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Lightbulb size={22} className="text-slate-950" />
          </div>
          <h2 className="text-lg tracking-tight">Recommended Actions</h2>
        </div>
        <ul className="space-y-4">
          {[
            "Wait 24h before non-essential checkouts",
            "Review and cut repeated low-score items",
            "Set a strategic monthly budget limit",
            "Track categories to find hidden habits",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 text-slate-300 group"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
              <span className="text-sm font-medium group-hover:text-white transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AlertTriangleIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
