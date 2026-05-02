"use client";

import { useHistory } from "@/lib/hooks/useHistory";
import { useEffect, useState } from "react";
import EmptyState from "../atoms/EmptyState";
import PageHeader from "../atoms/PageHeader";
import TransactionHeader from "../atoms/TransactionHeader";
import FilterSection from "../molecules/FilterSection";
import PaginationControls from "../molecules/PaginationControls";
import StatsGrid from "../molecules/StatsGrid";
import TransactionList from "../molecules/TransactionList";

export default function HistoryView() {
  const {
    period,
    category,
    transactions,
    totalSpent,
    purchases,
    topUpCount,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    setPeriod,
    setCategory,
  } = useHistory();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const transactionSection = document.getElementById("transaction-section");
    transactionSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);
  if (!transactions) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="bg-gradient-to-b from-primary/5 via-transparent to-transparent">
          <div className="max-w-[2100px] mx-auto p-6">
            <PageHeader
              title="History"
              description="Track all your financial activities"
            />

            <StatsGrid
              totalSpent={totalSpent}
              purchasesCount={purchases.length}
              topUpCount={topUpCount}
            />

            <FilterSection
              period={period}
              category={category}
              isFilterOpen={isFilterOpen}
              onPeriodChange={setPeriod}
              onCategoryChange={setCategory}
              onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>
        </div>

        <div className="max-w-[2100px] mx-auto px-6 pb-12">
          <TransactionHeader count={transactions?.length || 0} />

          {transactions.length === 0 ? (
            <EmptyState
              period={period}
              onResetPeriod={() => setPeriod("all")}
            />
          ) : (
            <>
              <TransactionList transactions={transactions} />
              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                  onNext={nextPage}
                  onPrev={prevPage}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
