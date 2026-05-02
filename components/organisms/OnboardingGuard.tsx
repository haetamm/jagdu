"use client";

import { useAuthGuard } from "@/lib/hooks/useAuthGuard";
import OnboardingForm from "@/components/organisms/OnboardingForm";
import OnboardingFormSkeleton from "@/components/organisms/OnboardingFormSkeleton";

export default function OnboardingGuard() {
  const { isLoading } = useAuthGuard(false);

  if (isLoading) return <OnboardingFormSkeleton />;

  return <OnboardingForm />;
}
