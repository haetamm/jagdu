"use client";

import { FormField } from "@/components/molecules/FormField";
import { TextareaField } from "@/components/molecules/TextareaField";
import { Button } from "@/components/ui/button";
import { formSchema, FormSchema } from "@/lib/validation/analyzeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingBag, Zap } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface AnalyzeFormProps {
  onSubmit: (data: FormSchema) => void;
  onFormChange?: (itemName: string, priceNum: number) => void; // ← tambah ini
}

export function AnalyzeForm({ onSubmit, onFormChange }: AnalyzeFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { itemName: "", price: "", spec: "" },
  });

  const priceRaw = watch("price");
  const itemName = watch("itemName");
  const priceNum = parseInt(priceRaw?.replace(/\D/g, "") || "0") || 0;

  // Sync ke FormSection untuk moodData
  useEffect(() => {
    onFormChange?.(itemName ?? "", priceNum);
  }, [itemName, priceNum]);

  function handlePriceInput(raw: string) {
    const clean = raw.replace(/\D/g, "");
    setValue("price", clean, { shouldValidate: true });
  }

  const priceDisplay = priceRaw
    ? parseInt(priceRaw).toLocaleString("id-ID")
    : "";

  return (
    <div className="bg-card rounded-3xl px-3 py-6 lg:p-8 md:p-10 space-y-8 border border-border shadow-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Item Name"
          icon={<ShoppingBag className="w-5 h-5" />}
          type="text"
          {...register("itemName")}
          placeholder="e.g., iPhone 15 Pro"
          error={errors.itemName?.message}
          className="bg-muted text-foreground"
        />

        <FormField
          label="Estimated Price (IDR)"
          prefix="Rp"
          inputMode="numeric"
          value={priceDisplay}
          onChange={(e) => handlePriceInput(e.target.value)}
          placeholder="0"
          error={errors.price?.message}
          className="font-bold text-lg bg-muted text-foreground"
        />
      </div>

      <TextareaField
        label="Reason or Details"
        className="bg-muted text-foreground"
        {...register("spec")}
        placeholder="Tell Jagdu why you want this item..."
        rows={3}
      />

      <Button
        onClick={handleSubmit(onSubmit)}
        disabled={!itemName || !priceRaw}
        className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
      >
        <span className="flex items-center gap-2">
          Ask Jagdu
          <Zap className="w-5 h-5 fill-current" />
        </span>
      </Button>
    </div>
  );
}
