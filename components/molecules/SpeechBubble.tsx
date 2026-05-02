interface SpeechBubbleProps {
  message: string;
}

export default function SpeechBubble({ message }: SpeechBubbleProps) {
  return (
    <div className="flex-1 relative">
      <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tl-none px-5 py-4">
        <p className="text-foreground/90 text-[15px] leading-relaxed">
          {message}
        </p>
      </div>

      {/* Bubble Tail */}
      <div
        className="absolute -left-3 top-6 w-0 h-0 
        border-t-[10px] border-t-transparent 
        border-r-[12px] border-r-primary/20 
        border-b-[10px] border-b-transparent"
      />
    </div>
  );
}
