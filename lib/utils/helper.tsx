import {
  ChartPie,
  ClockArrowUp,
  LayoutDashboard,
  ScanSearch,
} from "lucide-react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { urlPage } from "./constans";
import { FilterPeriod } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getKiraMood(balancePercent: number) {
  if (balancePercent > 70) return "happy" as const;
  if (balancePercent > 40) return "neutral" as const;
  if (balancePercent > 20) return "worried" as const;
  return "alarmed" as const;
}

export function categoryEmoji(cat: string | null) {
  const map: Record<string, string> = {
    electronics: "📱",
    food: "🍔",
    drinks: "☕",
    fashion: "👟",
    health: "💊",
    entertainment: "🎮",
    transportation: "🚗",
    topup: "➕",
  };
  return map[(cat ?? "").toLowerCase()] ?? "🛍️";
}

export const NAV_ITEMS = [
  { href: urlPage.DASHBOARD, label: "Dashboard", icon: LayoutDashboard },
  { href: urlPage.ANALYZE, label: "Analyze", icon: ScanSearch },
  { href: urlPage.HISTORY, label: "History", icon: ClockArrowUp },
  { href: urlPage.INSIGHTS, label: "Insights", icon: ChartPie },
] as const;

export function scoreLabel(score: number): { label: string; color: string } {
  if (score >= 70)
    return {
      label: "WORTH IT",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    };
  if (score >= 45)
    return {
      label: "BORDERLINE",
      color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    };
  return {
    label: "SKIP IT",
    color: "text-red-400 bg-red-400/10 border-red-400/20",
  };
}

export function getStartDate(period: FilterPeriod): Date | null {
  if (period === "all") return null;
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (period === "month") d.setDate(1);
  if (period === "3month") d.setMonth(d.getMonth() - 3);
  return d;
}

export const getScoreLabel = (score: number) => {
  if (score > 80) return "Strong control. You think before spending.";
  if (score > 60) return "Good overall, but there’s room to improve.";
  if (score > 40) return "You're leaning toward impulsive spending.";
  return "Spending habits need serious improvement.";
};

export function fmtRp(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function getScoreConfig(score: number) {
  if (score >= 80)
    return {
      color: "#059669",
      bg: "#ecfdf5",
      border: "#10b981",
      label: "Great Buy",
    };
  if (score >= 60)
    return {
      color: "#2563eb",
      bg: "#eff6ff",
      border: "#3b82f6",
      label: "Good Buy",
    };
  if (score >= 40)
    return {
      color: "#d97706",
      bg: "#fffbeb",
      border: "#f59e0b",
      label: "Borderline",
    };
  return {
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#ef4444",
    label: "Skip It",
  };
}

export function getMoodFromScore(score: number) {
  if (score >= 80)
    return { emoji: "😊", text: "Great decision. This is worth it." };
  if (score >= 60)
    return { emoji: "🙂", text: "Not bad, but make sure you really need it." };
  if (score >= 40)
    return { emoji: "😟", text: "I’m not fully convinced. Think it through." };
  return { emoji: "😰", text: "This feels like a bad spend. Hold off." };
}

export function pctOf(price: number, balance: number): string {
  return ((price / balance) * 100).toFixed(1);
}

export type JagduMood = "wave" | "think" | "celebrate";

export function getJagduMoodFromForm(
  itemName: string,
  priceNum: number,
  balance: number,
): JagduMood {
  if (!itemName && priceNum === 0) return "wave";

  if (itemName && priceNum === 0) return "think";

  if (priceNum > balance * 0.5) return "think";

  if (priceNum > balance * 0.2) return "think";

  return "celebrate";
}

export function getFormMood(
  itemName: string,
  priceNum: number,
  balance: number,
): { emoji: string; text: string; mood: JagduMood } {
  if (!itemName && priceNum === 0)
    return {
      emoji: "💭",
      text: "What are you planning to buy? Tell me first, I’ll help you think it through.",
      mood: "wave",
    };

  if (itemName && priceNum === 0)
    return {
      emoji: "🤔",
      text: `"${itemName}" — how much does it cost? Fill it in so I can help.`,
      mood: "think",
    };

  const pct = pctOf(priceNum, balance);

  if (priceNum > balance * 0.5)
    return {
      emoji: "😰",
      text: `${fmtRp(priceNum)} is ${pct}% of your balance — that’s a lot. Let me analyze this.`,
      mood: "think",
    };

  if (priceNum > balance * 0.2)
    return {
      emoji: "😟",
      text: `${fmtRp(priceNum)} is about ${pct}% of your balance. Let’s take a closer look.`,
      mood: "think",
    };

  return {
    emoji: "😊",
    text: `${fmtRp(priceNum)} is ${pct}% of your balance — relatively small, but I’ll still check it.`,
    mood: "celebrate",
  };
}
