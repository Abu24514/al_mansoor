"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/config";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-linear-to-br from-primary to-[#0A3D2C] rounded-3xl py-14 md:py-16 px-6 md:px-12 overflow-hidden">
          {/* Background Circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-white/10 rounded-full pointer-events-none" />

          <div className="relative max-w-2xl mx-auto text-center z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {t?.ctaBanner?.title || "Ready to start your Gulf journey?"}
            </h2>
            
            <p className="text-white/90 text-base mb-8 max-w-lg mx-auto">
              {t?.ctaBanner?.subtitle || "Join thousands who found verified jobs through Al-Mansoor"}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              {/* Button 1: Solid White to Light Emerald Tint */}
              <Link
                href="/jobs"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A3D2C] hover:bg-emerald-50 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 min-w-42.5"
              >
                <span>{t?.ctaBanner?.cta || t?.hero?.browseJobs || "Browse Jobs"}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#0A3D2C] transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>

              {/* Button 2: Solid White to Glass Outline */}
              <Link
                href="/for-companies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A3D2C] border border-transparent hover:bg-white/10 hover:border-white hover:text-white font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 min-w-42.5"
              >
                <span>{t?.hero?.hireWorkers || "Hire Workers"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}