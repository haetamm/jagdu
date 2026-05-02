"use client";

import { useProfile } from "@/lib/hooks/useProfile";
import { urlPage } from "@/lib/utils/constans";
import Link from "next/link";
import { GlowButton } from "../atoms/GlowButton";
import { Skeleton } from "../ui/skeleton";

interface LandingButtonProps {
  size?: "sm" | "md" | "lg";
}

export default function LandingButton({ size }: LandingButtonProps) {
  const { hasProfile, isLoading } = useProfile();

  if (isLoading) {
    return <Skeleton className="h-10 w-32 rounded-2xl" />;
  }

  const isRegistered = hasProfile;

  return (
    <Link href={isRegistered ? urlPage.DASHBOARD : urlPage.ONBOARDING}>
      <GlowButton size={size}>
        {isRegistered ? "Dashboard" : "Start Free"} →
      </GlowButton>
    </Link>
  );
}
