import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils/helper";
import { type InputHTMLAttributes, type ReactNode } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  prefix?: string;
  error?: string;
}

export function FormField({
  label,
  icon,
  prefix,
  error,
  className,
  id,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-3">
      <Label
        htmlFor={fieldId}
        className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1"
      >
        {label}
      </Label>
      <div className="relative group">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors">
            {icon}
          </span>
        )}
        {prefix && (
          <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-300 group-focus-within:text-emerald-500 transition-colors">
            {prefix}
          </span>
        )}
        <Input
          id={fieldId}
          className={cn(
            "py-4 h-auto bg-slate-50 border-2 border-transparent focus-visible:border-emerald-500 focus-visible:ring-0 focus-visible:bg-white rounded-2xl font-bold transition-all",
            icon ? "pl-12" : prefix ? "pl-14" : "",
            className,
          )}
          {...inputProps}
        />
        {error && (
          <p className="text-xs text-red-500 font-bold mt-2 ml-1">{error}</p>
        )}
      </div>
    </div>
  );
}
