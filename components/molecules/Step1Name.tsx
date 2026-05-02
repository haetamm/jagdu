"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  onChange: (v: string) => void;
  onNext: () => void;
}

export default function Step1Name({ name, onChange, onNext }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
          YOUR NAME
        </label>
        <Input
          type="text"
          value={name}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Rizky Pratama"
          className="w-full bg-secondary border-border px-5 py-4 text-lg"
          autoFocus
          onKeyDown={(e) => e.key === "Enter" && name.trim() && onNext()}
        />
      </div>

      {name.trim() && (
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm">
          Hello <span className="font-semibold text-foreground">{name}</span>,
          nice to meet you! 👋
        </div>
      )}

      <Button
        onClick={onNext}
        disabled={!name.trim()}
        className="w-full h-10 text-base"
      >
        Continue →
      </Button>
    </div>
  );
}
