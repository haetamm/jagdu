import HealthScoreCard from "@/components/organisms/HealthScoreCard";
import InsightsAdvice from "@/components/organisms/InsightsAdvice";
import { useInsights } from "@/lib/hooks/useInsights";
import InsightsSummary from "./InsightsSummary";

interface InsightsLeftColumnProps {
  hasBudget: boolean;
}

export default function InsightsLeftColumn({
  hasBudget,
}: InsightsLeftColumnProps) {
  const { totalSpent, avgScore, lowScoreCount, impulsiveRate } = useInsights();

  return (
    <div className="lg:col-span-5 space-y-6 sm:space-y-8">
      <HealthScoreCard score={avgScore} />
      <InsightsSummary
        purchasesCount={avgScore}
        totalSpent={totalSpent}
        lowScoreCount={lowScoreCount}
      />
      <InsightsAdvice impulsiveRate={impulsiveRate} hasBudget={hasBudget} />
    </div>
  );
}
