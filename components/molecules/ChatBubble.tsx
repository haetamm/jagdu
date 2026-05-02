import { cn } from "@/lib/utils/helper";

interface JagduChatBubbleProps {
  message: string;
  type?: "jagdu" | "user";
  className?: string;
}

export function ChatBubble({
  message,
  type = "jagdu",
  className,
}: JagduChatBubbleProps) {
  if (type === "user") {
    return (
      <div className={cn("flex justify-end", className)}>
        <div className="max-w-[80%] rounded-2xl rounded-br-sm px-4 py-3 text-sm bg-secondary border border-border text-foreground">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-start gap-2", className)}>
      {/* Jagdu mini avatar */}
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 bg-primary/10 border border-primary/25 text-primary font-bold">
        J
      </div>

      <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed bg-primary/5 border border-primary/15 text-foreground">
        {message}
      </div>
    </div>
  );
}
