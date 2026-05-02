"use client";

import SummaryCard from "@/components/molecules/SummaryCard";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  balance: string;
  budget: string;
  onFinish: () => void;
}

export default function Step3Summary({
  name,
  balance,
  budget,
  onFinish,
}: Props) {
  return (
    <div className="space-y-6">
      <SummaryCard name={name} balance={balance} budget={budget} />

      <div className="flex gap-4 bg-secondary/60 border border-border rounded-2xl p-5">
        <span className="text-2xl mt-0.5">🔒</span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All data is stored only on your device. No cloud, no tracking.
        </p>
      </div>

      <Button onClick={onFinish} className="w-full h-11 text-base">
        Go to Dashboard →
      </Button>
    </div>
  );
}
