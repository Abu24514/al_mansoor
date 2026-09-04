"use client";

import Link from "next/link";
import {
  Car,
  ChefHat,
  Sparkles,
  Zap,
  Wrench,
  ShieldCheck,
  HardHat,
  Hotel,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

interface Category {
  icon: LucideIcon;
  label: string;
  count: number;
  slug: string;
}

export default function JobCategories() {
  const { t } = useLanguage();

  const categories: Category[] = [
    { icon: Car, label: t.categories.driver, count: 42, slug: "driver" },
    { icon: ChefHat, label: t.categories.cook, count: 28, slug: "cook" },
    { icon: Sparkles, label: t.categories.cleaner, count: 65, slug: "cleaner" },
    { icon: Zap, label: t.categories.electrician, count: 19, slug: "electrician" },
    { icon: Wrench, label: t.categories.plumber, count: 15, slug: "plumber" },
    { icon: ShieldCheck, label: t.categories.security, count: 33, slug: "security" },
    { icon: HardHat, label: t.categories.construction, count: 51, slug: "construction" },
    { icon: Hotel, label: t.categories.hotel, count: 24, slug: "hotel" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title={t.categories.title}
          subtitle={t.categories.subtitle}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map(({ icon: Icon, label, count, slug }) => (
            <Link
              key={slug}
              href={`/jobs?category=${slug}`}
              className="group bg-bg-light hover:bg-emerald-900 rounded-2xl p-5 md:p-6 transition-all duration-200 flex flex-col items-center text-center gap-3"
            >
              <span className="bg-white text-primary group-hover:bg-white/20 group-hover:text-white rounded-xl p-3 transition-colors">
                <Icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-semibold text-charcoal group-hover:text-white transition-colors">
                  {label}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-white/80 mt-1 transition-colors">
                  {count} {t.categories.openings}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/jobs" variant="outline">
            {t.categories.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}