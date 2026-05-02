import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="relative py-10 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-extrabold bg-primary text-primary-foreground">
            J
          </div>
          <span className="font-semibold text-sm text-muted-foreground">
            Jagdu — by Jagdu
          </span>
        </div>

        {/* Center */}
        <p className="text-xs text-center text-muted-foreground/70">
          Built for the challenge. Powered by AI.
          <br className="md:hidden" /> Your data, yours.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["Privacy", "About"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-xs transition-colors hover:text-foreground text-muted-foreground/70"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
