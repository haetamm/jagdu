import { GlowButton } from "@/components/atoms/GlowButton";
import { FiShield, FiZap } from "react-icons/fi";
import JagduIllustration from "../atoms/JagduIllustration";
import { ChatBubble } from "../molecules/ChatBubble";
import LandingButton from "../molecules/LandingButton";

export function LandingHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      id="home"
    >
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 animate-slide-up stagger-1 bg-primary/10 border border-primary/20">
              <FiZap size={12} className="text-primary" />
              <span className="text-xs tracking-widest uppercase text-primary">
                AI Financial Guardian
              </span>
            </div>

            <h1 className="font-extrabold leading-[1.05] tracking-tight mb-6 animate-slide-up stagger-2 text-[clamp(2.8rem,6vw,5.5rem)] text-foreground">
              Think first,
              <br />
              <span className="text-primary glow-text-accent">then spend.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-xl animate-slide-up stagger-3 text-muted-foreground">
              Jagdu analyzes every expense before it happens. Not just a tracker
              — Jagdu speaks honestly, bluntly, and steps in when you’re about
              to go overboard.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12 animate-slide-up stagger-4">
              <LandingButton size="lg" />
              <GlowButton href="#how-it-works" variant="ghost" size="lg">
                How it works
              </GlowButton>
            </div>

            <div className="flex flex-wrap items-center gap-6 animate-slide-up stagger-5">
              {[
                { icon: <FiShield size={14} />, text: "No login required" },
                { icon: <FiShield size={14} />, text: "No cloud storage" },
                { icon: <FiShield size={14} />, text: "Your data stays yours" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <span className="text-primary">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex flex-col items-center animate-fade-in stagger-3">
            <div className="w-full max-w-sm space-y-3 mb-8">
              <ChatBubble message="Hey, your balance is down to 18%. You sure about this? 🤨" />
              <ChatBubble message="I wanna buy shoes for $25" type="user" />
              <ChatBubble message="OK — Worth It Score: 62/100. Borderline. If you really need it, go ahead. If it’s just a want, maybe wait. 💡" />
            </div>

            <div className="relative">
              {/* Score */}
              <div className="absolute -right-4 top-8 rounded-2xl px-4 py-3 shadow-xl z-20 bg-card border border-border min-w-[120px]">
                <div className="text-xs mb-1 text-muted-foreground">
                  Worth It Score
                </div>
                <div className="text-2xl font-extrabold text-primary">72</div>
                <div className="text-xs mt-0.5 text-muted-foreground">
                  BORDERLINE
                </div>
                <div className="mt-2 h-1 rounded-full w-full overflow-hidden bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>

              {/* Balance */}
              <div className="absolute -left-6 bottom-10 rounded-2xl px-4 py-3 shadow-xl z-20 bg-card border border-border min-w-[140px]">
                <div className="text-xs mb-1 text-muted-foreground">
                  Remaining Balance
                </div>
                <div className="text-lg font-bold text-foreground">$135</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-1.5 rounded-full flex-1 overflow-hidden bg-secondary">
                    <div
                      className="h-full rounded-full bg-muted-foreground"
                      style={{ width: "62%" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">62%</span>
                </div>
              </div>

              <JagduIllustration mood="celebrate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
