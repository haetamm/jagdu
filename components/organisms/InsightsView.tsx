"use client";

import PageHeader from "@/components/atoms/PageHeader";
import InsightsLeftColumn from "@/components/organisms/InsightsLeftColumn";
import InsightsRightColumn from "@/components/organisms/InsightsRightColumn";
import { useInsights } from "@/lib/hooks/useInsights";

export default function InsightsView() {
  const { profile } = useInsights();

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background ">
      <div className="max-w-[2100px] mx-auto p-6">
        <PageHeader
          title="Your Monthly Report"
          description={`Hello ${profile.name}, here is how you handled your money this month.`}
        />

        <div className="flex flex-col lg:grid xl:grid-cols-12 xl:gap-8 space-y-8 xl:space-y-0">
          <InsightsLeftColumn hasBudget={!!profile.monthlyBudget} />

          <InsightsRightColumn />
        </div>
      </div>
    </div>
  );
}
