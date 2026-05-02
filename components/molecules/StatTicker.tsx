const stats = [
  { label: "Secure Storage", value: "100% on your device" },
  { label: "No Account Needed", value: "No cloud dependency" },
  { label: "AI Insights", value: "Real-time" },
];

export function StatTicker() {
  const tickerAnimation = `
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <>
      <style>{tickerAnimation}</style>
      <div className="w-full overflow-hidden py-4 border-y border-border">
        <div
          className="flex gap-12 w-max"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          {/* Duplicate stats for seamless loop */}
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xs tracking-wider uppercase text-muted-foreground">
                {stat.label}
              </span>
              <span className="text-sm font-semibold text-primary">
                {stat.value}
              </span>
              <span className="w-1 h-1 rounded-full block bg-border" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
