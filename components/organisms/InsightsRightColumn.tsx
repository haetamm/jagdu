import HighlightsGrid from "@/components/organisms/HighlightsGrid";
import SpendingCharts from "@/components/organisms/SpendingCharts";
import { useInsights } from "@/lib/hooks/useInsights";
import InsightsMetrics from "./InsightsMetrics";

export default function InsightsRightColumn() {
  const {
    purchases,
    totalSpent,
    avgScore,
    categoryData,
    weeklyData,
    bestDecision,
    worstDecision,
    mostExpensive,
    balanceData,
    spendingChange,
    topCategory,
    scoreInsight,
  } = useInsights();

  return (
    <div className="lg:col-span-7 space-y-6 sm:space-y-8">
      <InsightsMetrics
        totalSpent={totalSpent}
        purchasesCount={purchases.length}
        avgScore={avgScore}
        spendingChange={spendingChange}
        topCategory={topCategory}
        scoreInsight={scoreInsight}
      />
      <SpendingCharts
        categoryData={categoryData}
        weeklyData={weeklyData}
        balanceData={balanceData}
      />
      <HighlightsGrid
        bestDecision={bestDecision}
        worstDecision={worstDecision}
        mostExpensive={mostExpensive}
      />
    </div>
  );
}
