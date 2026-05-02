interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  theme: "emerald" | "rose" | "blue";
  fullWidth?: boolean;
}

export default function HighlightCard({
  icon,
  title,
  value,
  subtitle,
  theme,
  fullWidth,
}: HighlightCardProps) {
  const themeStyles = {
    emerald: {
      container: "bg-emerald-500/10 border-emerald-500/20",
      icon: "bg-emerald-500 text-slate-950",
      title: "text-emerald-400",
    },
    rose: {
      container: "bg-rose-500/10 border-rose-500/20",
      icon: "bg-rose-500 text-slate-950",
      title: "text-rose-400",
    },
    blue: {
      container: "bg-slate-900 border-slate-800",
      icon: "bg-blue-500/20 text-blue-400",
      title: "text-slate-500",
    },
  };

  const styles = themeStyles[theme];

  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-2xl border ${styles.container} ${
        fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <div className={`p-3 rounded-xl shrink-0 ${styles.icon}`}>{icon}</div>

      <div className="min-w-0">
        <p
          className={`text-xs font-bold uppercase tracking-wider ${styles.title}`}
        >
          {title}
        </p>

        <small className="text-slate-500 dark:slate-300 leading-tight mt-0.5 truncate">
          {value}
        </small>

        <p className="text-[10px] text-slate-500 mt-0.5 font-bold uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
