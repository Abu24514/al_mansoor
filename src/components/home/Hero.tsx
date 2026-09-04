"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import Button from "../ui/Button";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#CEE1B2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-160">
          {/* Left: Text content */}
          <div className="relative z-10 py-16 md:py-0 order-2 md:order-1 rtl:md:order-2">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary/20 rounded-full pl-2.5 pr-4 py-1.5 mb-6">
              <span className="bg-primary text-white rounded-full p-1">
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-charcoal">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-2">
              {t.hero.titleLine1}
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-2">
              {t.hero.titleLine2}
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              {t.hero.titleLine3}
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              {t.hero.subtitle}
            </p>

            <Button href="/jobs">{t.hero.getStarted}</Button>
          </div>

          {/* Right: Image, full height, no card/frame */}
          <div className="relative h-100 md:h-155 order-1 md:order-2 rtl:md:order-1 md:absolute md:right-0 md:top-9 md:w-[55%] rtl:md:right-auto rtl:md:left-0">
            <Image
              src="/images/hero/me-photo.png"
              alt="Gulf job workers - Al-Mansoor"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}