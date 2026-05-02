"use client";

import CurrencyInput from "@/components/atoms/CurrencyInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { topUpBalance } from "@/lib/actions/dbAction";
import { useDashboard } from "@/lib/hooks/useDasboard";
import { useModalStore } from "@/lib/store/useModalStore";
import { formatRupiah } from "@/lib/utils/helper";
import { useState } from "react";
import ModalHeader from "../atoms/ModalHeader";

export default function TopUpModal() {
  const { close } = useModalStore();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const { profile } = useDashboard();

  if (!profile) return null;

  const currentBalance = profile.currentBalance;
  const newBalance = currentBalance + Number(amount || 0);

  const handleSubmit = async () => {
    if (!amount || Number(amount) <= 0) return;
    setLoading(true);
    try {
      await topUpBalance({
        amount: Number(amount),
        note: note.trim(),
      });

      setAmount("");
      setNote("");
      close();
    } catch (error) {
      console.error("Top up failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 z-[100]">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <ModalHeader title="Top Up Balance" />

          <div className="space-y-5">
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Current Balance
              </p>
              <p className="text-2xl font-semibold text-primary">
                {formatRupiah(currentBalance)}
              </p>
            </div>

            <CurrencyInput
              value={amount}
              onChange={setAmount}
              label="Top Up Amount"
              placeholder="500,000"
            />

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Note (Optional)
              </label>
              <Input
                placeholder="Example: Monthly salary"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>

            {amount && (
              <div className="bg-secondary/50 rounded-xl p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Balance after top up
                  </span>
                  <span className="font-semibold text-primary">
                    {formatRupiah(newBalance)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={close} className="flex-1 h-10">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!amount || Number(amount) <= 0 || loading}
                className="flex-1 h-10"
              >
                {loading ? "Processing..." : "Top Up Now"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
