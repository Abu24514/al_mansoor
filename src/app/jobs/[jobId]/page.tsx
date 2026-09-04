"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { MapPin, Wallet, Briefcase, Tag, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/config";
import Button from "@/components/ui/Button";
import jobsData from "@/data/jobs.json";
import type { Job } from "@/types/job";

export default function JobDetailPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = use(params);
  const { t } = useLanguage();

  const jobs = jobsData as Job[];
  const job = jobs.find((j) => j.id === Number(jobId));

  if (!job) return notFound();

  const requirements = [
    t.jobDetail.req1,
    t.jobDetail.req2,
    t.jobDetail.req3,
    t.jobDetail.req4,
  ];

  return (
    <main className="bg-bg-light min-h-screen py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition mb-6"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          {t.jobDetail.backToJobs}
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mb-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="bg-primary/10 text-primary rounded-xl p-3 inline-flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
                {job.title}
              </h1>
              <p className="text-gray-500 flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4" />
                {job.country}
              </p>
            </div>
            <span className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-semibold">
              {job.type}
            </span>
          </div>
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InfoCard icon={MapPin} label={t.jobDetail.location} value={job.country} />
          <InfoCard
            icon={Wallet}
            label={t.jobDetail.salary}
            value={`${job.salary} ${job.currency}`}
          />
          <InfoCard icon={Briefcase} label={t.jobDetail.jobType} value={job.type} />
          <InfoCard
            icon={Tag}
            label={t.jobDetail.category}
            value={job.category.charAt(0).toUpperCase() + job.category.slice(1)}
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mb-6">
          <h2 className="font-semibold text-charcoal text-lg mb-3">
            {t.jobDetail.description}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t.jobDetail.descText}
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mb-24 md:mb-8">
          <h2 className="font-semibold text-charcoal text-lg mb-4">
            {t.jobDetail.requirements}
          </h2>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-gray-700">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Apply Button */}
        <div className="hidden md:block">
          <Button href={`/apply/${job.id}`} size="lg">
            {t.jobDetail.applyNow}
          </Button>
        </div>
      </div>

      {/* Mobile Sticky Apply Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40">
        <Button href={`/apply/${job.id}`} fullWidth size="lg">
          {t.jobDetail.applyNow}
        </Button>
      </div>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
      <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
      <p className="text-[11px] text-gray-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-charcoal">{value}</p>
    </div>
  );
}