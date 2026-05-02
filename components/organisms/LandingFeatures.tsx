import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { FiBarChart2, FiDollarSign, FiSearch } from "react-icons/fi";

const features = [
  {
    icon: <FiSearch />,
    title: "Pre-purchase Analysis",
    description:
      'Before you buy, ask Jagdu. Get an instant "Worth It" score (0–100) with clear reasoning why it’s worth it — or not.',
    accent: "#C8FF00",
  },
  {
    icon: <FiDollarSign />,
    title: "Real-time Balance Tracking",
    description:
      "Your balance is always up to date. Jagdu automatically updates every expense and shows your current financial state.",
    accent: "#60C8FF",
  },
  {
    icon: <FiBarChart2 />,
    title: "AI Spending Insights",
    description:
      "Monthly reports from Jagdu: your spending patterns, biggest expense categories, and actionable advice for next month. Honest. No sugarcoating.",
    accent: "#FFB340",
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-6">
            Key Features
          </SectionLabel>
          <h2 className=" font-extrabold leading-tight mb-4 text-[clamp(2rem,4vw,3.2rem)] text-foreground">
            More than just a <span className="text-primary">tracker</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed text-muted-foreground">
            Jagdu doesn’t just track. It talks — and sometimes tells you things
            you don’t want to hear.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accent={feature.accent}
            />
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
