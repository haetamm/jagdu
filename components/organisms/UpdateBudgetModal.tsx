"use client";

import CurrencyInput from "@/components/atoms/CurrencyInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { updateMonthlyBudget } from "@/lib/actions/dbAction";
import { useDashboard } from "@/lib/hooks/useDasboard";
import { useModalStore } from "@/lib/store/useModalStore";
import { useState } from "react";
import ModalHeader from "../atoms/ModalHeader";

export default function UpdateBudgetModal() {
  const { close } = useModalStore();
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const { profile } = useDashboard();

  if (!profile) return null;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await updateMonthlyBudget(Number(monthlyBudget));
      setMonthlyBudget("");
      close();
    } catch (error) {
      console.error("Update budget failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 z-[100]">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <ModalHeader title="Update Budget" />
          <div className="space-y-5">
            <CurrencyInput
              value={monthlyBudget}
              onChange={setMonthlyBudget}
              label="Update Monthly Budget"
              placeholder="500,000"
            />

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={close} className="flex-1 h-10">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={
                  !monthlyBudget || Number(monthlyBudget) <= 0 || loading
                }
                className="flex-1 h-10"
              >
                {loading ? "Processing..." : "Update Budget"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
