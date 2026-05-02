import JagduIllustration from "@/components/atoms/JagduIllustration";
import { Card, CardContent } from "@/components/ui/card";
import { useModalStore } from "@/lib/store/useModalStore";
import { MOOD_CONFIG } from "@/lib/utils/constans";
import { formatRupiah, getKiraMood } from "@/lib/utils/helper";
import { Pencil } from "lucide-react";
import { Button } from "../ui/button";

interface BalanceCardProps {
  balance: number;
  monthlyBudget: number | null;
}

export default function BalanceCard({
  balance,
  monthlyBudget,
}: BalanceCardProps) {
  const { open } = useModalStore();
  const budget = monthlyBudget ?? balance;
  const balancePct = Math.min(100, Math.round((balance / budget) * 100));
  const mood = getKiraMood(balancePct);
  const moodCfg = MOOD_CONFIG[mood];

  const illustrationMood =
    mood === "happy" ? "celebrate" : mood === "alarmed" ? "wave" : "think";

  const handleUpdateBudget = () => {
    open({ type: "updateBudget" });
  };

  return (
    <Card className="bg-card/60 backdrop-blur-xl border border-border/60 overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
              Remaining Balance
            </p>
            <p className="text-3xl font-bold text-foreground font-mono tracking-tight">
              {formatRupiah(balance)}
            </p>
            <p className={`text-sm mt-1 font-medium ${moodCfg.color}`}>
              {moodCfg.message}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={handleUpdateBudget}
              className="border-none cursor-pointer rounded-lg"
              title="Update Monthly Budget"
            >
              <Pencil className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </Button>
            <div className="w-12 h-12 shrink-0">
              <JagduIllustration mood={illustrationMood} />
            </div>
          </div>
        </div>

        {/* Progress bar section tetap sama */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{balancePct}% remaining</span>
            {monthlyBudget && <span>dari {formatRupiah(monthlyBudget)}</span>}
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${moodCfg.bar}`}
              style={{ width: `${balancePct}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
