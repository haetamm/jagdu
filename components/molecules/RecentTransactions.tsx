import { TrendingDown } from "lucide-react";
import Link from "next/link";

import { ScoreBadge } from "@/components/atoms/ScoreBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { urlPage } from "@/lib/utils/constans";
import type { Transaction } from "@/lib/utils/db";
import { categoryEmoji, formatRupiah } from "@/lib/utils/helper";

interface RecentTransactionsProps {
  recentTx: Transaction[] | undefined;
}

export default function RecentTransactions({
  recentTx,
}: RecentTransactionsProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-foreground font-semibold text-lg">
          Recent Transactions
        </h2>
        <Link
          href={urlPage.HISTORY}
          className="text-primary text-sm hover:underline font-medium"
        >
          View all →
        </Link>
      </div>

      {recentTx && recentTx.length > 0 ? (
        <div className="grid gap-3">
          {recentTx.map((tx) => (
            <Card
              key={tx.id}
              className="bg-card/40 border border-border/40 hover:bg-card/60 transition-colors"
            >
              <CardContent className="p-4 flex items-center gap-3">
                {/* Icon */}
                <span className="text-2xl flex-shrink-0">
                  {tx.type === "topup" ? "➕" : categoryEmoji(tx.category)}
                </span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm font-medium truncate">
                    {tx.itemName}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {new Date(tx.transactionDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>

                {/* Amount & Score */}
                <div className="text-right shrink-0 space-y-1">
                  <p
                    className={`text-sm font-mono font-bold ${
                      tx.type === "topup"
                        ? "text-emerald-400"
                        : "text-foreground"
                    }`}
                  >
                    {tx.type === "topup" ? "+" : "-"}
                    {formatRupiah(tx.amount)}
                  </p>

                  {tx.type === "purchase" && tx.aiScore !== null && (
                    <ScoreBadge score={tx.aiScore} />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* Empty State */
        <Card className="bg-card/40 border border-border/40 border-dashed">
          <CardContent className="p-8 lg:p-12 flex flex-col items-center gap-3 text-center">
            <TrendingDown size={40} className="text-muted-foreground/40" />
            <p className="text-muted-foreground">
              No transactions yet.
              <br />
              What do you want to buy today?
            </p>
            <Link href={urlPage.ANALYZE}>
              <Button
                size="sm"
                variant="outline"
                className="mt-2 rounded-xl text-xs"
              >
                Ask Jagdu →
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
