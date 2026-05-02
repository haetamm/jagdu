import Dexie, { type EntityTable } from "dexie";

interface Profile {
  id: number;
  name: string;
  currentBalance: number;
  monthlyBudget: number | null;
  createdAt: Date;
}

interface Transaction {
  id: number;
  type: "purchase" | "topup";
  itemName: string;
  amount: number;
  category: string | null;
  transactionDate: Date;
  balanceAfter: number;
  aiScore: number | null;
  aiVerdict: string | null;
  aiReason: string | null;
  fullAnalysis: string | null;
  createdAt: Date;
}

const db = new Dexie("JagduDB") as Dexie & {
  profile: EntityTable<Profile, "id">;
  transactions: EntityTable<Transaction, "id">;
};

db.version(1).stores({
  profile: "++id, name, currentBalance, monthlyBudget, currency, createdAt",
  transactions:
    "++id, type, itemName, amount, category, transactionDate, balanceAfter, aiScore, aiVerdict, aiReason, fullAnalysis, createdAt",
});

export { db };
export type { Profile, Transaction };
