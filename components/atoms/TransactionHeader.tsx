"use client";

interface TransactionHeaderProps {
  count: number;
}

export default function TransactionHeader({ count }: TransactionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold text-foreground">
          Transaction History
        </h2>
        <span className="px-2 py-0.5 rounded-full bg-secondary text-muted-foreground text-xs">
          {count}
        </span>
      </div>
    </div>
  );
}
