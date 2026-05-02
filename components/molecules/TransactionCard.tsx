"use client";
import { Transaction } from "@/lib/utils/db";
import { categoryEmoji, formatRupiah, scoreLabel } from "@/lib/utils/helper";
import { Calendar, ChevronDown, ChevronUp, Sparkles, Tag } from "lucide-react";
import { useState } from "react";

export default function TransactionCard({ tx }: { tx: Transaction }) {
  const [expanded, setExpanded] = useState(false);
  const isTopUp = tx.type === "topup";

  return (
    <div className="group bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {/* Main Row */}
      <div
        className="p-4 cursor-pointer"
        onClick={() => !isTopUp && tx.fullAnalysis && setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div
            className={`
            w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0
            ${isTopUp ? "bg-emerald-400/10" : "bg-primary/10"}
          `}
          >
            {isTopUp ? "➕" : categoryEmoji(tx.category)}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-foreground font-semibold truncate">
                {tx.itemName}
              </p>
              {!isTopUp && tx.aiScore !== null && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${scoreLabel(tx.aiScore!).color} bg-secondary`}
                >
                  Score {tx.aiScore}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={11} />
                <span>
                  {new Date(tx.transactionDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>

              {tx.category && !isTopUp && (
                <div className="flex items-center gap-1">
                  <Tag size={11} />
                  <span className="capitalize">{tx.category}</span>
                </div>
              )}
            </div>
          </div>

          {/* Amount */}
          <div className="text-right shrink-0">
            <p
              className={`font-mono font-bold ${isTopUp ? "text-emerald-400" : "text-foreground"}`}
            >
              {isTopUp ? "+" : "-"}
              {formatRupiah(tx.amount)}
            </p>
            {!isTopUp && tx.aiScore !== null && (
              <p className="text-muted-foreground text-[10px] mt-0.5">
                {scoreLabel(tx.aiScore!).label}
              </p>
            )}
          </div>

          {/* Expand Icon */}
          {!isTopUp && tx.fullAnalysis && (
            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Detail */}
      {expanded && !isTopUp && tx.fullAnalysis && (
        <div className="border-t border-border bg-secondary/30 p-4 space-y-3 animate-in slide-in-from-top-2 fade-in duration-200">
          {/* AI Verdict */}
          {tx.aiVerdict && (
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-3">
              <div className="flex gap-2">
                <Sparkles size={16} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/80">{tx.aiVerdict}</p>
              </div>
            </div>
          )}

          {/* Balance Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card rounded-lg p-2.5">
              <p className="text-muted-foreground text-[10px] uppercase mb-1">
                Before
              </p>
              <p className="text-foreground font-mono text-sm font-semibold">
                {formatRupiah(tx.balanceAfter + tx.amount)}
              </p>
            </div>
            <div className="bg-card rounded-lg p-2.5">
              <p className="text-muted-foreground text-[10px] uppercase mb-1">
                After
              </p>
              <p className="text-primary font-mono text-sm font-semibold">
                {formatRupiah(tx.balanceAfter)}
              </p>
            </div>
          </div>

          {/* AI Reason */}
          {tx.aiReason && (
            <p className="text-muted-foreground text-xs leading-relaxed bg-card rounded-lg p-2.5">
              {tx.aiReason}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
