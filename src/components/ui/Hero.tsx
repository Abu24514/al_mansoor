"use client";

import Image from "next/image";
import { ShieldCheck, type LucideIcon } from "lucide-react";
import Button from "./Button";

interface HeroProps {
  bgColor?: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  titleLines: string[];
  highlightLastLine?: boolean;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image: string;
  imageAlt: string;
  imagePosition?: "right" | "left";
}

export default function Hero({
  bgColor = "bg-[#CEE1B2]",
  badge,
  badgeIcon: BadgeIcon = ShieldCheck,
  titleLines,
  highlightLastLine = true,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  image,
  imageAlt,
  imagePosition = "right",
}: HeroProps) {
  const textOrder =
    imagePosition === "right"
      ? "order-2 md:order-1 rtl:md:order-2"
      : "order-2 md:order-2 rtl:md:order-1";

  const imageOrder =
    imagePosition === "right"
      ? "order-1 md:order-2 rtl:md:order-1 md:right-0 rtl:md:right-auto rtl:md:left-0"
      : "order-1 md:order-1 rtl:md:order-2 md:left-0 rtl:md:left-auto rtl:md:right-0";

  return (
    <section className={`relative w-full ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-160">
          {/* Text content */}
          <div className={`relative z-10 py-16 md:py-0 ${textOrder}`}>
            {badge && (
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary/20 rounded-full pl-2.5 pr-4 py-1.5 mb-6">
                <span className="bg-primary text-white rounded-full p-1">
                  <BadgeIcon className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  {badge}
                </span>
              </div>
            )}

            {titleLines.map((line, i) => {
              const isLast = i === titleLines.length - 1;
              return (
                <h1
                  key={i}
                  className={`text-4xl md:text-5xl font-bold leading-tight mb-2 ${
                    isLast && highlightLastLine ? "text-primary mb-6" : "text-charcoal"
                  }`}
                >
                  {line}
                </h1>
              );
            })}

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={ctaHref}>{ctaLabel}</Button>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="outline" showIcon={false}>
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative h-100 md:h-155 md:absolute md:top-9 md:w-[55%] ${imageOrder}`}
          >
            <Image
              src={image}
              alt={imageAlt}
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