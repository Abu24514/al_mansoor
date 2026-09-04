"use client";

import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import { useCountUp } from "@/lib/useCountUp";

interface StatItemProps {
  icon: React.ElementType;
  target: number;
  suffix: string;
  label: string;
}

function StatItem({ icon: Icon, target, suffix, label }: StatItemProps) {
  const { count, ref } = useCountUp(target);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:items-center md:gap-4"
    >
      <span className="bg-primary/10 text-primary rounded-2xl p-3 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6" />
      </span>
      <div>
        <div className="text-2xl md:text-3xl font-bold text-charcoal leading-none tabular-nums">
          {count}
          {suffix}
        </div>
        <div className="text-xs md:text-sm text-gray-500 mt-1">{label}</div>
      </div>
    </div>
  );
}

export default function TrustStats() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, target: 25, suffix: "+", label: t.hero.years },
    { icon: Building2, target: 186, suffix: "+", label: t.hero.companies },
    { icon: Users, target: 5000, suffix: "+", label: t.trustStats.placed },
    { icon: ShieldCheck, target: 100, suffix: "%", label: t.hero.verified },
  ];

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}