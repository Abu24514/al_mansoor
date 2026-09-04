"use client";

import { Building2 } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import Hero from "@/components/ui/Hero";

export default function CompaniesHero() {
  const { t } = useLanguage();

  return (
    <Hero
      bgColor="bg-[#CEE1B2]"
      badge={t.companiesHero.badge}
      badgeIcon={Building2}
      titleLines={[
        t.companiesHero.titleLine1,
        t.companiesHero.titleLine2,
        t.companiesHero.titleLine3,
      ]}
      subtitle={t.companiesHero.subtitle}
      ctaLabel={t.companiesHero.cta}
      ctaHref="#lead-form"
      image="/images/hero/comHero.png"
      imageAlt="Hire verified workers - Al-Mansoor"
    />
  );
}