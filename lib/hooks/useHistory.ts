// lib/hooks/useHistory.ts
"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useCallback, useState } from "react";

import { db } from "@/lib/utils/db";
import { getStartDate } from "@/lib/utils/helper";
import type { FilterCategory, FilterPeriod } from "@/lib/utils/types";

export function useHistory() {
  const [period, setPeriodInternal] = useState<FilterPeriod>("month");
  const [category, setCategoryInternal] = useState<FilterCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Reset currentPage ke 1 + update state (wrapped)
  const setPeriod = useCallback((newPeriod: FilterPeriod) => {
    setPeriodInternal(newPeriod);
    setCurrentPage(1);
  }, []);

  const setCategory = useCallback((newCategory: FilterCategory) => {
    setCategoryInternal(newCategory);
    setCurrentPage(1);
  }, []);

  const transactions = useLiveQuery(async () => {
    const startDate = getStartDate(period);

    let query = startDate
      ? db.transactions.where("transactionDate").aboveOrEqual(startDate)
      : db.transactions.toCollection();

    if (category !== "all") {
      query = query.and((t) => t.type === category);
    }

    const result = await query.sortBy("transactionDate"); // sort ascending dulu
    return result.reverse(); // lalu balik jadi descending (terbaru di atas)
  }, [period, category]);

  const totalPages = Math.ceil((transactions?.length || 0) / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions =
    transactions?.slice(startIndex, startIndex + itemsPerPage) ?? [];

  // Computed values
  const purchases = transactions?.filter((t) => t.type === "purchase") ?? [];
  const totalSpent = purchases.reduce((sum, t) => sum + (t.amount || 0), 0);
  const topUpCount =
    transactions?.filter((t) => t.type === "topup").length ?? 0;

  return {
    period,
    category,
    setPeriod,
    setCategory,

    transactions: paginatedTransactions,
    allTransactions: transactions,

    currentPage,
    totalPages,
    itemsPerPage,

    goToPage: (page: number) => {
      setCurrentPage(Math.min(Math.max(1, page), totalPages));
    },

    nextPage: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
    prevPage: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),

    purchases,
    totalSpent,
    topUpCount,
  };
}
