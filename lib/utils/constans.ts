export const STEP_CONTENT = {
  1: {
    bubble: "Hey! Before we start, let me know your name first? 👋",
    title: "Hello, what's your name?",
  },
  2: {
    bubble:
      "Just so you know — everything is stored only on YOUR device. No cloud, no tracking. 🔒",
    title: "What's your current balance?",
  },
} as const;

export const urlPage = {
  DASHBOARD: "/dashboard",
  ONBOARDING: "/onboarding",
  LANDING: "/",
  HISTORY: "/history",
  ANALYZE: "/analyze",
  INSIGHTS: "/insights",
};

export const MOOD_CONFIG = {
  happy: {
    message: "Your finances are healthy! 🎉",
    color: "text-emerald-400",
    bar: "bg-emerald-400",
  },
  neutral: {
    message: "Still okay, but be careful.",
    color: "text-blue-400",
    bar: "bg-blue-400",
  },
  worried: {
    message: "More than half is gone...",
    color: "text-yellow-400",
    bar: "bg-yellow-400",
  },
  alarmed: {
    message: "Hey, critical balance! Think twice!",
    color: "text-red-400",
    bar: "bg-red-400",
  },
} as const;

export const CHART_COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
  "#F97316",
];

export const LOADING_STEPS = [
  "Jagdu reading your data...",
  "Checking your balance...",
  "Finding better worth-it alternatives...",
  "Writing an honest verdict for you...",
];
export const DEFAULT_BALANCE = 5_750_000;
