import { useModalStore } from "@/lib/store/useModalStore";
import { X } from "lucide-react";
import { Button } from "../ui/button";

export default function ModalHeader({ title }: { title: string }) {
  const { close } = useModalStore();
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <Button
        variant="destructive"
        onClick={close}
        className="text-muted-foreground cursor-pointer"
      >
        <X size={22} />
      </Button>
    </div>
  );
}
