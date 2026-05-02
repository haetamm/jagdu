interface BannerCardProps {
  emoji: string;
  text: string;
  accentColor?: string;
}

export function BannerCard({ emoji, text, accentColor }: BannerCardProps) {
  return (
    <div
      className={`flex items-start gap-5 p-6 bg-card rounded-lg border border-border transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 dark:hover:border-primary/30`}
      style={accentColor ? { borderColor: accentColor } : undefined}
    >
      <span className="text-4xl shrink-0 mt-1">{emoji}</span>
      <p className="font-bold text-card-foreground leading-relaxed text-base">
        {text}
      </p>
    </div>
  );
}
