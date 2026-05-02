"use client";

import { FormSection } from "@/components/organisms/FormSection";
import { HomeSection } from "@/components/organisms/HomeSection";
import { LoadingSection } from "@/components/organisms/LoadingSection";
import { ResultSection } from "@/components/organisms/ResultSection";
import { useAnalyze } from "@/lib/hooks/useAnalyze";

export default function AnalyzePage() {
  const state = useAnalyze();

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-hidden">
      {state.section === "home" && (
        <HomeSection balance={state.balance} onStart={state.goToForm} />
      )}

      {state.section === "form" && (
        <FormSection
          balance={state.balance}
          onBack={state.goToHome}
          onSubmit={state.handleSubmit}
        />
      )}

      {state.section === "loading" && (
        <LoadingSection loadingStep={state.loadingStep} />
      )}

      {state.section === "result" && state.result && (
        <ResultSection
          result={state.result}
          balance={state.balance}
          priceNum={state.priceNum}
          progressWidth={state.progressWidth}
          isSaving={state.isSaving}
          saved={state.saved}
          onEditData={() => state.setSection("form")}
          onReset={state.goToHome}
          onConfirmBuy={state.handleConfirmBuy}
          onCancel={state.goToHome}
        />
      )}

      <footer className="py-12 text-center opacity-30 select-none">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">
          JAGDU AI Analyzer
        </p>
      </footer>
    </div>
  );
}
