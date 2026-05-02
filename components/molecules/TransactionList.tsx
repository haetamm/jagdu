"use client";

import { Transaction } from "@/lib/utils/db";
import TransactionCard from "./TransactionCard";

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <TransactionCard key={tx.id} tx={tx} />
      ))}
    </div>
  );
}
