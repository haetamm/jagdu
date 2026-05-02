import { type Transaction } from "@/lib/utils/db";
import { formatRupiah } from "@/lib/utils/helper";
import { AlertTriangle, DollarSign, TrendingUp } from "lucide-react";
import HighlightCard from "../atoms/HighlightCard";

interface HighlightsGridProps {
  bestDecision?: Transaction;
  worstDecision?: Transaction;
  mostExpensive?: Transaction;
}

export default function HighlightsGrid({
  bestDecision,
  worstDecision,
  mostExpensive,
}: HighlightsGridProps) {
  const best = {
    value: bestDecision?.itemName ?? "No data available",
    subtitle:
      bestDecision?.aiScore != null
        ? `${bestDecision.aiScore}/100 Score • High Value`
        : "High Value • Long Term",
  };

  const worst = {
    value: worstDecision?.itemName ?? "No data available",
    subtitle:
      worstDecision?.aiScore != null
        ? `${worstDecision.aiScore}/100 Score • Low Value`
        : "Low Value • Instant Regret",
  };

  const expensive = {
    value: mostExpensive
      ? `${mostExpensive.itemName} (${formatRupiah(mostExpensive.amount)})`
      : "No data available",
    subtitle: "Significant outflow",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <HighlightCard
        icon={<TrendingUp size={20} />}
        title="Best Decision"
        value={bestDecision?.itemName || "No data available"}
        subtitle={best.subtitle}
        theme="emerald"
      />

      <HighlightCard
        icon={<AlertTriangle size={20} />}
        title="Impulse Buy"
        value={worstDecision?.itemName || "No data available"}
        subtitle={worst.subtitle}
        theme="rose"
      />

      <HighlightCard
        icon={<DollarSign size={20} />}
        title="Biggest Spending"
        value={expensive.subtitle}
        subtitle="Significant outflow"
        theme="blue"
        fullWidth
      />
    </div>
  );
}
