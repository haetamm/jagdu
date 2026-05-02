import { cn } from "../../lib/utils/helper";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10",
        className,
      )}
    >
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground mt-2 font-medium">{description}</p>
      </div>
      <div className="flex items-center gap-3 bg-card dark:bg-slate-900/50 border border-slate-800 rounded-full px-4 py-2 self-start md:self-auto">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-xs font-bold uppercase tracking-widest leading-none">
          Online
        </span>
      </div>
    </header>
  );
}
