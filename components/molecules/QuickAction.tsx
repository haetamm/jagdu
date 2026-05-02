import { Button } from "@/components/ui/button";
import { urlPage } from "@/lib/utils/constans";
import { clearTransactions, seedTransactions } from "@/lib/utils/seed";
import { Minus, Plus, ScanSearch } from "lucide-react";
import Link from "next/link";

interface QuickActionsProps {
  onTopUp: () => void;
}

export default function QuickActions({ onTopUp }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      <Button
        onClick={onTopUp}
        variant="outline"
        className="h-11 w-full cursor-pointer"
      >
        <Plus size={18} className="text-primary" />
        Balance
      </Button>

      <Link href={urlPage.ANALYZE} className="block w-full ">
        <Button className="w-full h-11 cursor-pointer" variant="ghost">
          <ScanSearch size={18} className="mr-2" />
          Ask Jagdu
        </Button>
      </Link>

      <Button
        onClick={async () => {
          await seedTransactions();
        }}
        variant="outline"
        className="h-11 w-full cursor-pointer"
      >
        <Plus size={18} className="text-primary" />
        Data Dummy (Dev)
      </Button>

      <Button
        onClick={async () => {
          await clearTransactions();
        }}
        variant="outline"
        className="h-11 w-full cursor-pointer"
      >
        <Minus size={18} className="text-primary" />
        Data Dummy (Dev)
      </Button>
    </div>
  );
}
