import MetricCard from "@/components/molecules/MetricCard";
import { formatRupiah } from "@/lib/utils/helper";
import { TrendingUp, Wallet } from "lucide-react";

interface InsightsMetricsProps {
  totalSpent: number;
  purchasesCount: number;
  avgScore: number;
  spendingChange: number;
  topCategory: string;
  scoreInsight: string;
}

export default function InsightsMetrics({
  totalSpent,
  purchasesCount,
  avgScore,
  spendingChange,
  topCategory,
  scoreInsight,
}: InsightsMetricsProps) {
  const isUp = spendingChange >= 0;

  const metrics = [
    {
      label: "Total Spent",
      value: formatRupiah(totalSpent),
      icon: <Wallet size={16} />,
      footer: (
        <p
          className={`text-[10px] mt-1 flex items-center gap-1 font-bold uppercase ${
            isUp ? "text-rose-400" : "text-emerald-400"
          }`}
        >
          <TrendingUp size={12} className={!isUp ? "rotate-180" : ""} />
          {Math.abs(spendingChange)}% vs last month
        </p>
      ),
    },
    {
      label: "Transactions",
      value: purchasesCount,
      footer: (
        <p className="text-[10px] text-slate-500 mt-1 italic font-medium">
          Mostly {topCategory}
        </p>
      ),
    },
    {
      label: "Avg Score",
      value: avgScore,
      footer: (
        <p className="text-[10px] text-emerald-500 mt-1 font-bold uppercase">
          {scoreInsight}
        </p>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      {metrics.map((item, i) => (
        <MetricCard key={i} {...item} />
      ))}
    </div>
  );
}
