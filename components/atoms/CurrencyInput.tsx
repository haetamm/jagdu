import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: React.ReactNode;
}

export default function CurrencyInput({
  value,
  onChange,
  placeholder = "0",
  label,
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    onChange(raw);
  };

  const display = value ? Number(value).toLocaleString("id-ID") : "";

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono text-sm">
          Rp
        </span>
        <Input
          type="text"
          inputMode="numeric"
          value={display}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-12 font-mono text-lg"
        />
      </div>
    </div>
  );
}
