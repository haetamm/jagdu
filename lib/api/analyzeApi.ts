import { Profile } from "../utils/db";
import { AnalyzeResult } from "../utils/types";

export interface AnalyzePayload {
  itemName: string;
  price: number;
  spec?: string;
}

export async function analyzeApi(
  payload: AnalyzePayload,
  profile: Profile,
): Promise<AnalyzeResult> {
  const res = await fetch("/api/analyze", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      currentBalance: profile.currentBalance,
      monthlyBudget: profile.monthlyBudget,
      userName: profile.name,
    }),
  });

  if (!res.ok) throw new Error("Analyze API error");
  return res.json();
}
