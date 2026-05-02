import { LOADING_STEPS } from "@/lib/utils/constans";
import JagduIllustration from "../atoms/JagduIllustration";

interface LoadingSectionProps {
  loadingStep: number;
}

export function LoadingSection({ loadingStep }: LoadingSectionProps) {
  return (
    <div className="relative z-10 dark:text-white max-w-lg mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center text-center animate-in scale-in duration-300">
      <div className="relative mb-16">
        <div className="w-40 h-40 border-[6px] border-emerald-50 border-t-emerald-600 rounded-full animate-spin-slow" />
        <div className="absolute h-32 w-32 inset-0 flex items-center justify-center">
          <JagduIllustration mood="think" />
        </div>
      </div>
      <h3 className="text-2xl font-black mb-2 transition-all duration-300">
        {LOADING_STEPS[loadingStep]}
      </h3>
      <p className=" font-bold uppercase tracking-[0.2em] text-[10px]">
        Processing with Jagdu AI Engine
      </p>
    </div>
  );
}
