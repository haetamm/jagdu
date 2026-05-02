import { BalanceImpact } from "@/components/molecules/BalanceImpact";
import { BannerCard } from "@/components/molecules/BannerCard";
import { ScoreDisplay } from "@/components/molecules/ScoreDisplay";
import { AlternativesList } from "@/components/organisms/AlternativesList";
import { ResultActions } from "@/components/organisms/ResultActions";
import { Button } from "@/components/ui/button";
import { getMoodFromScore, getScoreConfig } from "@/lib/utils/helper";
import type { AnalyzeResult } from "@/lib/utils/types";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import SectionHeader from "../atoms/SectionHeader";

interface ResultSectionProps {
  result: AnalyzeResult;
  balance: number;
  priceNum: number;
  progressWidth: number;
  isSaving: boolean;
  saved: boolean;
  onEditData: () => void;
  onReset: () => void;
  onConfirmBuy: () => void;
  onCancel: () => void;
}

export function ResultSection({
  result,
  balance,
  priceNum,
  progressWidth,
  isSaving,
  saved,
  onEditData,
  onReset,
  onConfirmBuy,
  onCancel,
}: ResultSectionProps) {
  const mood = getMoodFromScore(result.score);
  const scoreConfig = getScoreConfig(result.score);

  return (
    <div className="relative z-10 max-w-[2100px] mx-auto px-6 py-12 animate-in scale-in duration-300">
      <SectionHeader
        left={
          <Button
            onClick={onEditData}
            className="p-3 h-auto rounded-full border-border"
          >
            <ArrowLeft className="w-4 h-4" />
            Edit Data
          </Button>
        }
        center={
          <h2 className="text-lg font-black tracking-tighter uppercase text-slate-400">
            Analysis Result
          </h2>
        }
        right={
          <Button
            onClick={onReset}
            className="p-3 h-auto rounded-full border-border"
          >
            <RefreshCcw className="w-5 h-5" />
          </Button>
        }
      />

      <BannerCard
        emoji={mood.emoji}
        text={result.verdict}
        accentColor={scoreConfig.border}
      />

      <div className="grid lg:grid-cols-12 gap-8 mt-10 items-start">
        {/* Left — Score & Balance */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-[40px] p-12 text-center shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center">
            <ScoreDisplay score={result.score} />
            <BalanceImpact
              balance={balance}
              priceNum={priceNum}
              progressWidth={progressWidth}
            />
          </div>
        </div>

        {/* Right — Alternatives & Actions */}
        <div className="lg:col-span-7 space-y-8">
          <AlternativesList alternatives={result.alternatives} />
          <ResultActions
            isSaving={isSaving}
            saved={saved}
            onConfirmBuy={onConfirmBuy}
            onCancel={onCancel}
          />
          <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">
            Analysis based on AI insights & your latest financial profile.
          </p>
        </div>
      </div>
    </div>
  );
}
