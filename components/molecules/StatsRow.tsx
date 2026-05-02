import { Card, CardContent } from "@/components/ui/card";
import { formatRupiah } from "@/lib/utils/helper";

interface StatsRowProps {
  totalSpent: number;
  txCount: number;
  biggestTx: number;
}

export default function StatsRow({
  totalSpent,
  txCount,
  biggestTx,
}: StatsRowProps) {
  const stats = [
    { label: "Spent this month", value: formatRupiah(totalSpent) },
    { label: "Transactions", value: `${txCount}x` },
    { label: "Largest", value: formatRupiah(biggestTx) },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {stats.map(({ label, value }) => (
        <Card key={label} className="bg-card/40 border border-border/40">
          <CardContent className="p-4">
            <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1">
              {label}
            </p>
            <p className="text-foreground font-bold text-sm lg:text-base font-mono leading-tight">
              {value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
