import { LOADING_STEPS } from "@/lib/utils/constans";
import type { AnalyzeResult, SectionState } from "@/lib/utils/types";
import { useEffect, useState } from "react";
import { analyzeSpending, savePurchase } from "../actions/dbAction";
import { db } from "../utils/db";
import { FormSchema } from "../validation/analyzeSchema";

export function useAnalyze() {
  const [section, setSection] = useState<SectionState>("home");
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [balance, setBalance] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [lastPrice, setLastPrice] = useState(0);
  const [lastItemName, setLastItemName] = useState("");

  useEffect(() => {
    async function loadBalance() {
      const profile = await db.profile.toCollection().first();
      if (profile) setBalance(profile.currentBalance);
    }
    loadBalance();
  }, []);

  function resetAll() {
    setResult(null);
    setProgressWidth(0);
    setSaved(false);
    setLastPrice(0);
    setLastItemName("");
  }

  async function handleSubmit(data: FormSchema) {
    const priceNum = parseInt(data.price.replace(/\D/g, ""));
    setLastPrice(priceNum);
    setLastItemName(data.itemName);
    setSection("loading");
    setLoadingStep(0);

    const interval = setInterval(() => {
      setLoadingStep((s) => (s + 1) % LOADING_STEPS.length);
    }, 1200);

    try {
      const response = await analyzeSpending({
        itemName: data.itemName,
        price: priceNum,
        spec: data.spec,
      });

      clearInterval(interval);
      setResult(response);
      setSection("result");
      setTimeout(
        () => setProgressWidth(Math.min(100, (priceNum / balance) * 100)),
        100,
      );
    } catch (err) {
      clearInterval(interval);
      console.error(err);
      setSection("form");
    }
  }

  async function handleConfirmBuy() {
    if (!result) return;
    setIsSaving(true);

    try {
      await savePurchase(result, {
        itemName: lastItemName,
        price: lastPrice,
      });

      const profile = await db.profile.toCollection().first();
      if (profile) setBalance(profile.currentBalance);

      setSaved(true);
    } catch (err) {
      console.error("[handleConfirmBuy]", err);
    } finally {
      setIsSaving(false);
      setTimeout(() => {
        resetAll();
        setSection("home");
      }, 2000);
    }
  }

  function goToForm() {
    resetAll();
    setSection("form");
  }

  function goToHome() {
    resetAll();
    setSection("home");
  }

  return {
    section,
    setSection,
    loadingStep,
    result,
    balance,
    progressWidth,
    isSaving,
    saved,
    priceNum: lastPrice,
    handleSubmit,
    handleConfirmBuy,
    goToForm,
    goToHome,
  };
}
