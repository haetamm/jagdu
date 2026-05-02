import { SectionLabel } from "@/components/atoms/SectionLabel";
import { HowItWorksStep } from "@/components/molecules/HowItWorksStep";
import { FiCheckCircle, FiMessageCircle } from "react-icons/fi";
import { SlWallet } from "react-icons/sl";
import JagduIllustration from "../atoms/JagduIllustration";

const steps = [
  {
    icon: <SlWallet />,
    title: "Set your balance",
    description:
      "One-time setup — enter your name, current balance, and optional monthly budget. Everything stays on your device. Zero cloud, zero account.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Ask Jagdu before buying",
    description:
      "Thinking of buying something? Tell Jagdu: item name, price, and why you want it. Jagdu instantly analyzes and gives you an honest verdict in seconds.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Make smarter decisions",
    description:
      "With the Worth It score and Jagdu’s analysis, you can decide with confidence. Spend consciously, or delay without regret.",
  },
];

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel className="mb-6">How It Works</SectionLabel>
            <h2 className="font-extrabold leading-tight mb-12 text-[clamp(2rem,4vw,3rem)] text-foreground">
              Simple. Honest. <span className="text-primary">Effective.</span>
            </h2>

            <div>
              {steps.map((step, i) => (
                <HowItWorksStep
                  key={step.title}
                  number={i + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={i === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-20 rounded-3xl bg-primary" />

            <div className="relative rounded-3xl overflow-hidden bg-card border border-border">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground">
                  jagdu.app/analyze
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Jagdu thinking */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 flex-shrink-0">
                    <JagduIllustration mood="think" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1 text-foreground">
                      Jagdu is analyzing...
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Nike Air Max · $80
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="rounded-2xl p-5 mb-4 bg-secondary border border-border">
                  <div className="text-xs mb-3 text-muted-foreground">
                    WORTH IT SCORE
                  </div>
                  <div className="flex items-end gap-3 mb-3">
                    <span className="text-5xl font-extrabold text-primary">
                      68
                    </span>
                    <span className="text-sm mb-2 text-muted-foreground">
                      / BORDERLINE
                    </span>
                  </div>

                  <div className="h-2 rounded-full w-full overflow-hidden bg-background">
                    <div
                      className="h-full rounded-full transition-all bg-gradient-to-r from-primary/60 to-primary"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>

                {/* Verdict */}
                <div className="rounded-xl p-4 mb-4 text-sm leading-relaxed bg-primary/5 border border-primary/10 text-foreground">
                  💬&quot;This is 48% of your current balance. For shoes, that’s
                  a lot. If you really need it as a replacement, go ahead. But
                  if it’s just because it’s on sale, I’d suggest waiting.&quot;
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-xl py-3 text-sm transition-all bg-secondary border border-border text-muted-foreground">
                    ❌ Cancel
                  </button>
                  <button className="rounded-xl py-3 text-sm transition-all bg-primary text-primary-foreground font-semibold">
                    ✅ Buy anyway
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
