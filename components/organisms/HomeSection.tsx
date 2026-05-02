import { Button } from "@/components/ui/button";
import { fmtRp } from "@/lib/utils/helper";
import { ChevronRight, Wallet } from "lucide-react";
import JagduIllustration from "../atoms/JagduIllustration";

interface HomeSectionProps {
  balance: number;
  onStart: () => void;
}

export function HomeSection({ balance, onStart }: HomeSectionProps) {
  return (
    <div className="relative z-10 max-w-lg mx-auto px-6 dark:text-white py-24 min-h-screen flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
      <div className="w-24 h-24 mb-10 transform rotate-6 hover:rotate-0 transition-transform duration-500">
        <JagduIllustration mood="celebrate" />
      </div>

      <h1 className="text-6xl font-black tracking-tight mb-4">
        JAGDU <span className="text-primary">AI</span>
      </h1>
      <p className=" mb-12 text-lg leading-relaxed font-medium">
        Your honest financial assistant to help you decide: <br />
        <span>Buy now or save it instead?</span>
      </p>

      <div className="w-full space-y-4">
        <Button
          onClick={onStart}
          className="w-full py-5 h-auto bg-slate-900 dark:text-white hover:bg-slate-800 rounded-[24px] font-black text-base hover:scale-[1.03] shadow-2xl shadow-slate-200"
        >
          Analyze My Spending
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div className="p-4 rounded-2xl border-emerald-100 flex items-center justify-center gap-3">
          <Wallet className="w-5 h-5 " />
          <span className="text-sm font-bold">Balance: {fmtRp(balance)}</span>
        </div>
      </div>
    </div>
  );
}
