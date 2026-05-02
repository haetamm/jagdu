"use client";

import { db, type Profile, type Transaction } from "@/lib/utils/db";
import { useLiveQuery } from "dexie-react-hooks";

interface InsightsData {
  profile: Profile | null;
  transactions: Transaction[];
  purchases: Transaction[];
  totalSpent: number;
  avgScore: number;
  lowScoreCount: number;
  mostExpensive: Transaction | undefined;
  bestDecision: Transaction | undefined;
  worstDecision: Transaction | undefined;
  categoryData: { name: string; value: number }[];
  weeklyData: { week: string; value: number }[];
  balanceData: { date: string; balance: number }[];
  impulsiveRate: number;
  spendingChange: number;
  topCategory: string;
  scoreInsight: string;
  isLoading: boolean;
}

export function useInsights(): InsightsData {
  const profile = useLiveQuery(() => db.profile.toCollection().first());
  const transactions = useLiveQuery(() => db.transactions.toArray(), []);

  if (profile === undefined || transactions === undefined) {
    return {
      profile: null,
      transactions: [],
      purchases: [],
      totalSpent: 0,
      avgScore: 0,
      lowScoreCount: 0,
      mostExpensive: undefined,
      bestDecision: undefined,
      worstDecision: undefined,
      categoryData: [],
      weeklyData: [],
      balanceData: [],
      impulsiveRate: 0,
      spendingChange: 0,
      topCategory: "No data",
      scoreInsight: "No data",
      isLoading: true,
    };
  }

  const purchases = transactions.filter((t) => t.type === "purchase");

  const totalSpent = purchases.reduce((sum, t) => sum + t.amount, 0);

  const avgScore =
    purchases.length > 0
      ? Math.round(
          purchases.reduce((sum, t) => sum + (t.aiScore || 0), 0) /
            purchases.length,
        )
      : 0;

  const lowScoreCount = purchases.filter((t) => (t.aiScore || 0) < 50).length;

  const mostExpensive = [...purchases].sort((a, b) => b.amount - a.amount)[0];

  const bestDecision = [...purchases].sort(
    (a, b) => (b.aiScore || 0) - (a.aiScore || 0),
  )[0];

  const worstDecision = [...purchases].sort(
    (a, b) => (a.aiScore || 0) - (b.aiScore || 0),
  )[0];

  // CATEGORY
  const categoryMap: Record<string, number> = {};
  purchases.forEach((t) => {
    const cat = t.category || "Uncategorized";
    categoryMap[cat] = (categoryMap[cat] || 0) + t.amount;
  });

  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  const topCategory =
    Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "No data";

  // WEEKLY
  const weeklyMap: Record<string, number> = {};
  purchases.forEach((t) => {
    const date = new Date(t.transactionDate);
    const week = `Week ${Math.ceil(date.getDate() / 7)}`;
    weeklyMap[week] = (weeklyMap[week] || 0) + t.amount;
  });

  const weeklyData = Object.entries(weeklyMap).map(([week, value]) => ({
    week,
    value,
  }));

  // BALANCE
  const balanceData = [...transactions]
    .sort(
      (a, b) =>
        new Date(a.transactionDate).getTime() -
        new Date(b.transactionDate).getTime(),
    )
    .map((t) => ({
      date: new Date(t.transactionDate).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
      }),
      balance: t.balanceAfter,
    }));

  // IMPULSIVE
  const impulsiveRate =
    purchases.length > 0
      ? Math.round((lowScoreCount / purchases.length) * 100)
      : 0;

  // SPENDING CHANGE (minimal, gak ubah logic lain)
  const now = new Date();
  const currentMonth = now.getMonth();
  const lastMonth = currentMonth - 1;

  const currentMonthSpent = purchases
    .filter((t) => new Date(t.transactionDate).getMonth() === currentMonth)
    .reduce((sum, t) => sum + t.amount, 0);

  const lastMonthSpent = purchases
    .filter((t) => new Date(t.transactionDate).getMonth() === lastMonth)
    .reduce((sum, t) => sum + t.amount, 0);

  const spendingChange =
    lastMonthSpent > 0
      ? Math.round(
          ((currentMonthSpent - lastMonthSpent) / lastMonthSpent) * 100,
        )
      : 0;

  // SCORE INSIGHT (simple)
  let scoreInsight = "Needs improvement";
  if (avgScore >= 80) scoreInsight = "Excellent discipline";
  else if (avgScore >= 60) scoreInsight = "Good control";
  else if (avgScore >= 40) scoreInsight = "Be careful";

  return {
    profile,
    transactions,
    purchases,
    totalSpent,
    avgScore,
    lowScoreCount,
    mostExpensive,
    bestDecision,
    worstDecision,
    categoryData,
    weeklyData,
    balanceData,
    impulsiveRate,
    spendingChange,
    topCategory,
    scoreInsight,
    isLoading: false,
  };
}
