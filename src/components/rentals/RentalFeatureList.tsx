import { CheckCircle2 } from "lucide-react";

interface RentalFeatureListProps {
  features: string[];
  tone?: "epic" | "terminator";
}

export function RentalFeatureList({ features, tone = "epic" }: RentalFeatureListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3 rounded-2xl bg-white/90 p-4 font-bold text-slate-700">
          <CheckCircle2 className={tone === "terminator" ? "text-terminatorRed" : "text-epicGreen"} aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
  );
}
