"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import JagduIllustration from "@/components/atoms/JagduIllustration";
import StepIndicator from "@/components/atoms/StepIndicator";
import SpeechBubble from "@/components/molecules/SpeechBubble";
import Step1Name from "@/components/molecules/Step1Name";
import Step2Balance from "@/components/molecules/Step2Balance";
import Step3Summary from "@/components/molecules/Step3Summary";

import { Card, CardContent } from "@/components/ui/card";

import { addProfile } from "@/lib/actions/dbAction";
import { STEP_CONTENT } from "@/lib/utils/constans";
import { formatRupiah } from "@/lib/utils/helper";

export default function OnboardingForm() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [animating, setAnimating] = useState(false);

  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [budget, setBudget] = useState("");

  const goNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => (s + 1) as 1 | 2 | 3);
      setAnimating(false);
    }, 280);
  };

  const handleFinish = async () => {
    await addProfile({
      name,
      currentBalance: Number(balance),
      monthlyBudget: budget ? Number(budget) : null,
    });
    router.push("/dashboard");
  };

  const jagduMood = step === 1 ? "wave" : step === 2 ? "think" : "celebrate";

  const bubble =
    step === 3
      ? `Great ${name || "there"}! Your balance is ${balance ? formatRupiah(Number(balance)) : "Rp 0"} — ready to be protected. First purchase? 🚀`
      : STEP_CONTENT[step].bubble;

  const title = step === 3 ? "Setup complete!" : STEP_CONTENT[step].title;

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="flex flex-col items-center mb-10">
        <div className="text-4xl font-bold tracking-tighter mb-8">
          <span className="text-kira-accent">Jagdu</span>
        </div>
        <StepIndicator current={step} />
      </div>

      <Card
        className={`bg-card/70 backdrop-blur-xl border border-border/80 transition-all duration-300 ${
          animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
        }`}
      >
        <CardContent className="p-5">
          <div className="flex gap-5 mb-8">
            <div className="shrink-0 w-24 h-24">
              <JagduIllustration mood={jagduMood} />
            </div>
            <SpeechBubble message={bubble} />
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {title}
          </h2>

          {step === 1 && (
            <Step1Name name={name} onChange={setName} onNext={goNext} />
          )}
          {step === 2 && (
            <Step2Balance
              balance={balance}
              budget={budget}
              onBalanceChange={setBalance}
              onBudgetChange={setBudget}
              onNext={goNext}
            />
          )}
          {step === 3 && (
            <Step3Summary
              name={name}
              balance={balance}
              budget={budget}
              onFinish={handleFinish}
            />
          )}
        </CardContent>
      </Card>

      <p className="text-center text-muted-foreground/40 text-xs mt-8">
        No login • No cloud • Your data, your property.
      </p>
    </div>
  );
}
