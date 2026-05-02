import { z } from "zod";

export const analyzeSchema = z.object({
  itemName: z.string().min(1),
  price: z.number().positive(),
  spec: z.string().optional(),
  currentBalance: z.number(),
  monthlyBudget: z.number().nullable(),
  userName: z.string(),
});

export type AnalyzeSchema = z.infer<typeof analyzeSchema>;

export const formSchema = z.object({
  itemName: z.string().trim().min(1, "Item name is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((v) => parseInt(v.replace(/\D/g, "")) > 0, {
      message: "Price must be greater than 0",
    }),
  spec: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
