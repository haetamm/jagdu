import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingDown } from "lucide-react";

interface ResultActionsProps {
  isSaving: boolean;
  saved: boolean;
  onConfirmBuy: () => void;
  onCancel: () => void;
}

export function ResultActions({
  isSaving,
  saved,
  onConfirmBuy,
  onCancel,
}: ResultActionsProps) {
  if (saved) {
    return (
      <div className="py-5 bg-primary text-primary-foreground rounded-[24px] font-black flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 animate-in fade-in duration-300">
        <CheckCircle2 className="w-6 h-6" />
        Successfully Saved!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        onClick={onCancel}
        className="py-5 h-auto border-2 border-border rounded-[24px] font-black hover:bg-accent hover:text-accent-foreground"
      >
        Cancel
      </Button>
      <Button
        onClick={onConfirmBuy}
        disabled={isSaving}
        className="py-5 h-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-[24px] font-black shadow-2xl shadow-primary/20"
      >
        {isSaving ? (
          "Saving..."
        ) : (
          <>
            Buy Anyway <TrendingDown className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </div>
  );
}
