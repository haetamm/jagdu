import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OnboardingFormSkeleton() {
  return (
    <div className="w-full max-w-md relative z-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <Skeleton className="h-9 w-24 mb-8 rounded-lg" />
        {/* Step indicator */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full" />
              {s < 3 && <Skeleton className="h-0.5 w-10" />}
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-card/70 backdrop-blur-xl border border-border/80">
        <CardContent className="p-5">
          {/* Illustration + bubble */}
          <div className="flex gap-5 mb-8">
            <Skeleton className="shrink-0 w-24 h-24 rounded-2xl" />
            <Skeleton className="flex-1 h-24 rounded-2xl" />
          </div>

          {/* Title */}
          <Skeleton className="h-7 w-48 mb-6 rounded-lg" />

          {/* Input */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        </CardContent>
      </Card>

      <Skeleton className="h-3 w-56 mx-auto mt-8 rounded" />
    </div>
  );
}
