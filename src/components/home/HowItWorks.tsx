"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  Upload,
  ShieldCheck,
  ClipboardList,
  Send,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/config";
import SectionHeading from "@/components/ui/SectionHeading";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function HowItWorks() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"seeker" | "company">("seeker");

  const seekerSteps: Step[] = [
    { icon: Search, title: t.howItWorks.seeker.step1Title, desc: t.howItWorks.seeker.step1Desc },
    { icon: FileText, title: t.howItWorks.seeker.step2Title, desc: t.howItWorks.seeker.step2Desc },
    { icon: Upload, title: t.howItWorks.seeker.step3Title, desc: t.howItWorks.seeker.step3Desc },
    { icon: ShieldCheck, title: t.howItWorks.seeker.step4Title, desc: t.howItWorks.seeker.step4Desc },
  ];

  const companySteps: Step[] = [
    { icon: ClipboardList, title: t.howItWorks.company.step1Title, desc: t.howItWorks.company.step1Desc },
    { icon: Send, title: t.howItWorks.company.step2Title, desc: t.howItWorks.company.step2Desc },
    { icon: Phone, title: t.howItWorks.company.step3Title, desc: t.howItWorks.company.step3Desc },
  ];

  const activeSteps = activeTab === "seeker" ? seekerSteps : companySteps;

  return (
    <section className="bg-bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading title={t.howItWorks.title} subtitle={t.howItWorks.subtitle} />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-slate-100">
            <button
              onClick={() => setActiveTab("seeker")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
                activeTab === "seeker"
                  ? "bg-emerald-900 text-white"
                  : "text-charcoal hover:text-emerald-900"
              }`}
            >
              {t.howItWorks.forJobSeekers}
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
                activeTab === "company"
                  ? "bg-emerald-900 text-white"
                  : "text-charcoal hover:text-emerald-900"
              }`}
            >
              {t.howItWorks.forCompanies}
            </button>
          </div>
        </div>

        {/* Steps */}
        <div
          className={`grid gap-6 ${
            activeTab === "seeker"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-3"
          }`}
        >
          {activeSteps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <span className="absolute -top-3 -left-3 rtl:-left-auto rtl:-right-3 bg-accent text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <span className="bg-primary/10 text-primary rounded-xl p-3 inline-flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
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