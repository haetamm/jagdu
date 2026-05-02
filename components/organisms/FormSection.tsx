"use client";

import { AnalyzeForm } from "@/components/organisms/AnalyzeForm";
import { Button } from "@/components/ui/button";
import { fmtRp, getFormMood } from "@/lib/utils/helper";
import { FormSchema } from "@/lib/validation/analyzeSchema";
import { ArrowLeft, Wallet } from "lucide-react";
import { useState } from "react";
import JagduIllustration from "../atoms/JagduIllustration";
import SectionHeader from "../atoms/SectionHeader";

interface FormSectionProps {
  balance: number;
  onBack: () => void;
  onSubmit: (data: FormSchema) => void;
}

export function FormSection({ balance, onBack, onSubmit }: FormSectionProps) {
  const [liveItemName, setLiveItemName] = useState("");
  const [livePriceNum, setLivePriceNum] = useState(0);

  const moodData = getFormMood(liveItemName, livePriceNum, balance);

  return (
    <div className="relative z-10 max-w-[2100px] mx-auto px-3 md:px-6 py-12 animate-in slide-in-from-top-5 duration-300">
      <SectionHeader
        left={
          <Button
            onClick={onBack}
            className="p-3 h-auto rounded-full border-border"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        }
        right={
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Current Balance
              </p>
              <p className="text-sm font-black text-primary">
                {fmtRp(balance)}
              </p>
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
          </div>
        }
      />

      <div className="bg-gradient-green rounded-3xl border border-border shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-3">
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 shrink-0">
                <JagduIllustration mood={moodData.mood} />
              </div>
              <p className="font-medium text-foreground leading-relaxed text-base md:text-lg">
                {moodData.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <AnalyzeForm
          onSubmit={onSubmit}
          onFormChange={(name, price) => {
            setLiveItemName(name);
            setLivePriceNum(price);
          }}
        />
      </div>
    </div>
  );
}
