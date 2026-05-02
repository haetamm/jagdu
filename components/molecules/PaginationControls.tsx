// components/molecules/PaginationControls.tsx
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  onPrev,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1; // berapa nomor di kiri/kanan current page

    if (totalPages <= 7) {
      // Jika total halaman sedikit, tampilkan semua
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logic yang lebih baik untuk banyak halaman
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Tampilkan halaman di sekitar current page
      for (
        let i = Math.max(2, currentPage - delta);
        i <= Math.min(totalPages - 1, currentPage + delta);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        disabled={currentPage === 1}
        className="gap-1.5 min-w-[100px] sm:min-w-[110px]"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`dots-${index}`}
              className="px-3 py-2 text-muted-foreground text-sm"
            >
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              className={`w-9 h-9 text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {page}
            </Button>
          ),
        )}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="gap-1.5 min-w-[100px] sm:min-w-[110px]"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
