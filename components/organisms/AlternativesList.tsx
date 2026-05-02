import { fmtRp } from "@/lib/utils/helper";
import type { Alternative } from "@/lib/utils/types";
import { Info, TrendingDown } from "lucide-react";

interface AlternativesListProps {
  alternatives: Alternative[];
}

export function AlternativesList({ alternatives }: AlternativesListProps) {
  return (
    <div className="bg-card rounded-[40px] p-10 shadow-xl border border-border">
      <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-muted-foreground mb-8">
        <TrendingDown className="w-5 h-5 text-primary" />
        Better Alternatives
      </h4>
      <div className="space-y-4">
        {alternatives.map((alt, i) => (
          <div
            key={i}
            className="p-6 bg-muted rounded-[28px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 border-transparent hover:border-primary/30 hover:bg-card transition-all group cursor-pointer"
          >
            <div>
              <p className="font-black text-foreground text-lg">{alt.name}</p>
              <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-wide">
                {alt.note}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-black text-primary">
                {fmtRp(alt.price)}
              </p>
              <div className="p-2 bg-card rounded-xl shadow-sm text-muted-foreground group-hover:text-primary transition-colors cursor-help">
                <Info className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
