import { formatRupiah } from "@/lib/utils/helper";

interface SummaryCardProps {
  name: string;
  balance: string;
  budget: string;
}

export default function SummaryCard({
  name,
  balance,
  budget,
}: SummaryCardProps) {
  return (
    <div className="bg-secondary/70 border border-border rounded-2xl p-6 space-y-4">
      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">
        SUMMARY
      </p>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Name</span>
          <span className="font-semibold text-foreground">{name || "-"}</span>
        </div>

        <div className="h-px bg-border" />

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Starting Balance</span>
          <span className="font-mono font-bold text-kira-accent">
            {balance ? formatRupiah(Number(balance)) : "Rp 0"}
          </span>
        </div>

        <div className="h-px bg-border" />

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Monthly Budget</span>
          <span className="font-semibold text-foreground">
            {budget ? formatRupiah(Number(budget)) : "Not set"}
          </span>
        </div>

        <div className="h-px bg-border" />

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Currency</span>
          <span className="font-semibold text-foreground">
            🇮🇩 Indonesian Rupiah (IDR)
          </span>
        </div>
      </div>
    </div>
  );
}
