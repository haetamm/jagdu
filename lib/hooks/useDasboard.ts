"use client";

import { db } from "@/lib/utils/db";
import { useLiveQuery } from "dexie-react-hooks";

export function useDashboard() {
  const profile = useLiveQuery(() => db.profile.toCollection().first());

  const recentTx = useLiveQuery(() =>
    db.transactions.orderBy("createdAt").reverse().limit(5).toArray(),
  );

  const monthlyTx = useLiveQuery(() => {
    const start = new Date();
    start.setDate(1);
    start.setHours(0, 0, 0, 0);

    return db.transactions
      .where("transactionDate")
      .aboveOrEqual(start)
      .and((t) => t.type === "purchase")
      .toArray();
  });

  const totalSpent = monthlyTx?.reduce((s, t) => s + t.amount, 0) ?? 0;

  const txCount = monthlyTx?.length ?? 0;

  const biggestTx =
    monthlyTx?.reduce((max, t) => (t.amount > max ? t.amount : max), 0) ?? 0;

  return {
    profile,
    recentTx,
    monthlyTx,
    totalSpent,
    txCount,
    biggestTx,
  };
}
