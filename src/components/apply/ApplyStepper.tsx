export default function ApplyStepper({
  currentStep,
  totalSteps,
  stepLabel,
  ofLabel,
}: {
  currentStep: number;
  totalSteps: number;
  stepLabel: string;
  ofLabel: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs text-gray-500 mb-2">
        {stepLabel} {currentStep} {ofLabel} {totalSteps}
      </p>
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < currentStep ? "bg-primary" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}