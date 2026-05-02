"use client";

import { formatRupiah } from "@/lib/utils/helper";
import { ArrowLeftRight, TrendingDown, Wallet } from "lucide-react";
import StatCard from "../atoms/StatCard";

interface StatsGridProps {
  totalSpent: number;
  purchasesCount: number;
  topUpCount: number;
}

export default function StatsGrid({
  totalSpent,
  purchasesCount,
  topUpCount,
}: StatsGridProps) {
  const statsCards = [
    {
      title: "Total Spent",
      value: formatRupiah(totalSpent),
      icon: Wallet,
      color: "text-primary",
    },
    {
      title: "Total Transactions",
      value: `${purchasesCount + topUpCount}`,
      icon: ArrowLeftRight,
      detail: `${purchasesCount} purchases · ${topUpCount} top ups`,
      color: "text-primary",
    },
    {
      title: "Average per Purchase",
      value: formatRupiah(purchasesCount ? totalSpent / purchasesCount : 0),
      icon: TrendingDown,
      detail: "per purchase transaction",
      color: "text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      {statsCards.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  );
}
