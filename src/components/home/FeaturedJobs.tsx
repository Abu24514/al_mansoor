"use client";

import Link from "next/link";
import { MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const dummyJobs = [
  { id: 1, title: "Heavy Driver", country: "Saudi Arabia", salary: "1800 SAR", type: "Full-time" },
  { id: 2, title: "Hotel Cleaner", country: "UAE", salary: "1500 AED", type: "Full-time" },
  { id: 3, title: "Electrician", country: "Qatar", salary: "2200 QAR", type: "Full-time" },
  { id: 4, title: "Construction Helper", country: "Saudi Arabia", salary: "1600 SAR", type: "Full-time" },
];

export default function FeaturedJobs() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title={t.featuredJobs.title}
          subtitle={t.featuredJobs.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dummyJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <span className="bg-primary/10 text-primary rounded-xl p-3 inline-flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </span>
              <h3 className="font-semibold text-charcoal mb-1">{job.title}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                <MapPin className="w-3.5 h-3.5" />
                {job.country}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary font-bold text-sm">
                  {job.salary}
                  <span className="text-gray-400 font-normal text-xs">
                    {t.featuredJobs.perMonth}
                  </span>
                </span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  {job.type}
                </span>
              </div>
              <Link
                href={`/jobs/${job.id}`}
                className="block text-center bg-emerald-900 border border-emerald-900 text-white hover:bg-transparent hover:text-emerald-900 text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md"
              >
                {t.featuredJobs.viewDetails}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/jobs" variant="outline">
            {t.featuredJobs.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}