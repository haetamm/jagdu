import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/helper";
import { type TextareaHTMLAttributes } from "react";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextareaField({
  label,
  className,
  id,
  ...props
}: TextareaFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-3">
      <Label
        htmlFor={fieldId}
        className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1"
      >
        {label}
      </Label>
      <Textarea
        id={fieldId}
        className={cn(
          "bg-slate-50 border-2 border-transparent focus-visible:border-emerald-500 focus-visible:ring-0 focus-visible:bg-white rounded-2xl font-medium resize-none leading-relaxed transition-all",
          className,
        )}
        {...props}
      />
    </div>
  );
}
