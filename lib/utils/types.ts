export type FilterPeriod = "all" | "month" | "3month";
export type FilterCategory = "all" | "purchase" | "topup";

export type SectionState = "home" | "form" | "loading" | "result";

export interface FormValues {
  itemName: string;
  price: string;
  spec: string;
}

export interface FormErrors {
  itemName?: string;
  price?: string;
  api?: string;
}

export interface Alternative {
  name: string;
  price: number;
  note: string;
}

export interface AnalyzeResult {
  score: number;
  label: string;
  verdict: string;
  category: string;
  alternatives: { name: string; price: number; note: string }[];
}

export interface ScoreConfig {
  label: string;
  color: string;
  border: string;
  bg: string;
  ring: string;
}

export interface MoodConfig {
  emoji: string;
  label: string;
  color: string;
}
