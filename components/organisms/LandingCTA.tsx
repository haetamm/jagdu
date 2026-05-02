import JagduIllustration from "../atoms/JagduIllustration";
import LandingButton from "../molecules/LandingButton";

export function LandingCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-primary/5 from-0% via-transparent via-70% to-transparent to-100%" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Jagdu happy */}
        <div className="flex justify-center mb-8">
          <div className="w-30 h-30 flex-shrink-0">
            <JagduIllustration mood="celebrate" />
          </div>
        </div>

        <h2 className="font-extrabold leading-[1.1] mb-6 text-[clamp(2.2rem,5vw,4rem)] text-foreground">
          Take control of your finances
          <br />
          <span className="text-primary glow-text-accent">now, for free.</span>
        </h2>

        <p className="text-lg mb-10 max-w-lg mx-auto leading-relaxed text-muted-foreground">
          No account needed. No internet required. Your data stays 100% on your
          device. Jagdu’s got your back — honest, blunt, and no false promises.
        </p>

        <LandingButton size="lg" />

        <p className="mt-6 text-sm text-muted-foreground/70">
          Free forever · No credit card · No bullshit
        </p>
      </div>
    </section>
  );
}
