import { fmtRp } from "@/lib/utils/helper";

interface BalanceImpactProps {
  balance: number;
  priceNum: number;
  progressWidth: number;
}

export function BalanceImpact({
  balance,
  priceNum,
  progressWidth,
}: BalanceImpactProps) {
  const newBalance = balance - priceNum;
  const isDanger = newBalance < 0;

  return (
    <div className="w-full mt-12 py-6 border-t border-border space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-muted-foreground">
          Your current balance
        </span>
        <span className="font-black text-muted-foreground">
          {fmtRp(balance)}
        </span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-muted-foreground">
          Balance after purchase
        </span>
        <span
          className={`font-black ${isDanger ? "text-destructive" : "text-primary"}`}
        >
          {fmtRp(newBalance)}
        </span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isDanger ? "bg-destructive" : "bg-primary"
          }`}
          style={{ width: `${Math.min(100, Math.max(0, progressWidth))}%` }}
        />
      </div>
    </div>
  );
}
