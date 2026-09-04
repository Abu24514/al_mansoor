"use client";

import { useLanguage } from "@/i18n/config";
import Hero from "@/components/ui/Hero";

export default function HomeHero() {
  const { t } = useLanguage();

  return (
    <Hero
      bgColor="bg-[#CEE1B2]"
      badge={t.hero.badge}
      titleLines={[t.hero.titleLine1, t.hero.titleLine2, t.hero.titleLine3]}
      subtitle={t.hero.subtitle}
      ctaLabel={t.hero.getStarted}
      ctaHref="/jobs"
      image="/images/hero/me-photo.png"
      imageAlt="Gulf job workers - Al-Mansoor"
    />
  );
}