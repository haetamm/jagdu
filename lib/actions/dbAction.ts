import { db } from "@/lib/utils/db";
import { analyzeApi, AnalyzePayload } from "../api/analyzeApi";
import { AnalyzeResult } from "../utils/types";

export interface AddProfilePayload {
  name: string;
  currentBalance: number;
  monthlyBudget: number | null;
}

export interface TopUpPayload {
  amount: number;
  note?: string;
}

export async function addProfile(payload: AddProfilePayload): Promise<void> {
  await db.profile.add({
    name: payload.name.trim(),
    currentBalance: payload.currentBalance,
    monthlyBudget: payload.monthlyBudget,
    createdAt: new Date(),
  });
}

export async function topUpBalance(payload: TopUpPayload): Promise<void> {
  const profile = await db.profile.toCollection().first();

  if (!profile) {
    throw new Error("Profile not found");
  }

  const newBalance = profile.currentBalance + payload.amount;

  // Tambah transaksi
  await db.transactions.add({
    type: "topup",
    itemName: payload.note?.trim() || "Top Up Saldo",
    amount: payload.amount,
    category: "topup",
    transactionDate: new Date(),
    balanceAfter: newBalance,
    aiScore: null,
    aiVerdict: null,
    aiReason: null,
    fullAnalysis: null,
    createdAt: new Date(),
  });

  // Update saldo profile
  await db.profile.update(profile.id, {
    currentBalance: newBalance,
  });
}

export async function updateMonthlyBudget(monthlyBudget: number) {
  const profile = await db.profile.toCollection().first();

  if (!profile) {
    throw new Error("Profile not found");
  }
  await db.profile.update(profile.id, {
    monthlyBudget: monthlyBudget,
  });
}

export async function analyzeSpending(
  payload: AnalyzePayload,
): Promise<AnalyzeResult> {
  const profile = await db.profile.toCollection().first();
  if (!profile) throw new Error("Profile not found");
  const response = await analyzeApi(payload, profile);
  return response;
}

export async function savePurchase(
  result: AnalyzeResult,
  payload: AnalyzePayload,
): Promise<void> {
  const profile = await db.profile.toCollection().first();
  if (!profile) throw new Error("Profile not found");

  const newBalance = profile.currentBalance - payload.price;

  await db.transactions.add({
    type: "purchase",
    itemName: payload.itemName,
    amount: payload.price,
    category: result.category,
    transactionDate: new Date(),
    balanceAfter: newBalance,
    aiScore: result.score,
    aiVerdict: result.label,
    aiReason: result.verdict,
    fullAnalysis: JSON.stringify(result),
    createdAt: new Date(),
  });

  await db.profile.update(profile.id, { currentBalance: newBalance });
}
