"use client";

import CurrencyInput from "@/components/atoms/CurrencyInput";
import { Button } from "@/components/ui/button";

interface Props {
  balance: string;
  budget: string;
  onBalanceChange: (v: string) => void;
  onBudgetChange: (v: string) => void;
  onNext: () => void;
}

export default function Step2Balance({
  balance,
  budget,
  onBalanceChange,
  onBudgetChange,
  onNext,
}: Props) {
  return (
    <div className="space-y-6">
      <CurrencyInput
        value={balance}
        onChange={onBalanceChange}
        label="Current Balance"
        placeholder="3,000,000"
      />

      <CurrencyInput
        value={budget}
        onChange={onBudgetChange}
        label="Monthly Budget (Optional)"
        placeholder="2,000,000"
      />

      <Button
        onClick={onNext}
        disabled={!balance}
        className="w-full text-base h-10"
      >
        Continue →
      </Button>
    </div>
  );
}
