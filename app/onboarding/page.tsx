import OnboardingFormSkeleton from "@/components/organisms/OnboardingFormSkeleton";
import OnboardingGuard from "@/components/organisms/OnboardingGuard";
import { Suspense } from "react";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-kira-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-kira-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-kira-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none opacity-40" />

      <Suspense fallback={<OnboardingFormSkeleton />}>
        <OnboardingGuard />
      </Suspense>
    </div>
  );
}
