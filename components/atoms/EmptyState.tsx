"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

interface EmptyStateProps {
  period: string;
  onResetPeriod: () => void;
}

export default function EmptyState({ period, onResetPeriod }: EmptyStateProps) {
  return (
    <div className="text-center py-16 bg-card border border-border rounded-2xl">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
        <ShoppingBag size={28} className="text-muted-foreground" />
      </div>
      <h3 className="text-foreground font-medium">No transactions yet</h3>
      <p className="text-muted-foreground text-sm mt-1 max-w-sm mx-auto">
        {period !== "all"
          ? "Try changing the period filter above"
          : "Start with your first purchase or top up balance"}
      </p>
      {period !== "all" && (
        <Button onClick={onResetPeriod} className="mt-4 px-4 py-2 rounded-xl">
          View all periods
        </Button>
      )}
    </div>
  );
}
