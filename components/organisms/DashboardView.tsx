"use client";

import { useModalStore } from "@/lib/store/useModalStore";

import { useDashboard } from "@/lib/hooks/useDasboard";
import PageHeader from "../atoms/PageHeader";
import BalanceCard from "../molecules/BalanceCard";
import QuickActions from "../molecules/QuickAction";
import RecentTransactions from "../molecules/RecentTransactions";
import StatsRow from "../molecules/StatsRow";

export default function DashboardView() {
  const { open } = useModalStore();

  const { profile, recentTx, totalSpent, txCount, biggestTx } = useDashboard();

  if (!profile) return null;

  const handleTopUp = () => open({ type: "topUp" });

  return (
    <>
      <div className="relative max-w-[2100px] p-6 mx-auto">
        <PageHeader title={profile.name} description="Welcome back," />

        {/* Grid Layout untuk desktop */}
        <div className="lg:grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <BalanceCard
              balance={profile.currentBalance}
              monthlyBudget={profile.monthlyBudget}
            />
            <QuickActions onTopUp={handleTopUp} />
            <StatsRow
              totalSpent={totalSpent}
              txCount={txCount}
              biggestTx={biggestTx}
            />
          </div>

          {/* Right Column */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🤖</span>
                  <h3 className="text-foreground font-semibold">AI Insight</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Based on your spending patterns, you&lsquo;re doing great!
                  Keep track of your expenses to reach your financial goals
                  faster.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-xs text-primary/70">
                    💡 Tip: Try analyzing purchases before buying
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions - Full width */}
        <div className="mt-8">
          <RecentTransactions recentTx={recentTx} />
        </div>
      </div>
    </>
  );
}
