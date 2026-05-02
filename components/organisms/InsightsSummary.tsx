import { formatRupiah } from "@/lib/utils/helper";

interface InsightsSummaryProps {
  purchasesCount: number;
  totalSpent: number;
  lowScoreCount: number;
}

export default function InsightsSummary({
  purchasesCount,
  totalSpent,
  lowScoreCount,
}: InsightsSummaryProps) {
  return (
    <div className="bg-slate-900 dark:bg-indigo-950/20  border border-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-inner group transition-all">
      <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
        This month, you made{" "}
        <span className="font-black  decoration-emerald-500/50 underline decoration-2 underline-offset-4">
          {purchasesCount} transactions
        </span>{" "}
        totaling{" "}
        <span className="font-black  decoration-indigo-500/50 underline decoration-2 underline-offset-4">
          {formatRupiah(totalSpent)}
        </span>
        .
      </p>
      <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium mt-4">
        We flagged{" "}
        <span className="font-bold text-rose-400 group-hover:text-rose-300 transition-colors">
          {lowScoreCount} items
        </span>{" "}
        as impulsive decisions. These small leaks are often where your savings
        disappear silently.
      </p>
    </div>
  );
}
