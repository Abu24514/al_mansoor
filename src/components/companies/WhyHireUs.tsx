"use client";

import { ShieldCheck, Zap, HandCoins, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyHireUs() {
  const { t } = useLanguage();

  const points = [
    { icon: ShieldCheck, title: t.whyHireUs.point1Title, desc: t.whyHireUs.point1Desc },
    { icon: Zap, title: t.whyHireUs.point2Title, desc: t.whyHireUs.point2Desc },
    { icon: HandCoins, title: t.whyHireUs.point3Title, desc: t.whyHireUs.point3Desc },
    { icon: HeartHandshake, title: t.whyHireUs.point4Title, desc: t.whyHireUs.point4Desc },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow={t.whyHireUs.eyebrow}
          title={t.whyHireUs.title}
          subtitle={t.whyHireUs.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center">
              <span className="bg-primary text-white rounded-2xl p-4 inline-flex items-center justify-center mb-4">
                <Icon className="w-7 h-7" />
              </span>
              <h3 className="font-semibold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}