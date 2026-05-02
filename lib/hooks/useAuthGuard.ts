"use client";

import { useProfile } from "@/lib/hooks/useProfile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { urlPage } from "../utils/constans";

export function useAuthGuard(requireProfile: boolean) {
  const router = useRouter();
  const { hasProfile, isLoading } = useProfile();

  const shouldRedirect =
    !isLoading &&
    ((requireProfile && !hasProfile) || (!requireProfile && hasProfile));

  useEffect(() => {
    if (!shouldRedirect) return;

    if (requireProfile) {
      router.replace(urlPage.ONBOARDING);
    } else {
      router.replace(urlPage.DASHBOARD);
    }
  }, [shouldRedirect, requireProfile, router]);

  return { isLoading: isLoading || shouldRedirect };
}
