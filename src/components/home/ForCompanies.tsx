"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import Button from "@/components/ui/Button";

export default function ForCompanies() {
  const { t } = useLanguage();

  const points = [t.forCompanies.point1, t.forCompanies.point2, t.forCompanies.point3];

  return (
    <section className="bg-[#0A3D2C] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.forCompanies.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
              {t.forCompanies.subtitle}
            </p>
            <Button href="/for-companies" variant="primary">
              {t.forCompanies.cta}
            </Button>
          </div>

          <div className="space-y-4">
            {points.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}