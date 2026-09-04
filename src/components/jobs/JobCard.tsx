"use client";

import Link from "next/link";
import { MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import type { Job } from "@/types/job";

export default function JobCard({ job }: { job: Job }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Job Icon */}
        <span className="bg-emerald-50 text-emerald-900 rounded-xl p-3 inline-flex items-center justify-center mb-4">
          <Briefcase className="w-5 h-5" />
        </span>

        {/* Title & Country */}
        <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">{job.title}</h3>
        <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          {job.country}
        </p>

        {/* Salary & Job Type */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-emerald-900 font-bold text-sm">
            {job.salary} {job.currency}{" "}
            <span className="text-slate-400 font-normal text-xs">
              {t?.jobsPage?.perMonth || "/ month"}
            </span>
          </span>
          <span className="text-xs bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full font-medium border border-emerald-100/60">
            {job.type}
          </span>
        </div>
      </div>

      {/* Action Button (Smooth Hover Fix) */}
      <Link
        href={`/jobs/${job.id}`}
        className="block text-center bg-emerald-900 border border-emerald-900 text-white hover:bg-transparent hover:text-emerald-900 text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md"
      >
        {t?.jobsPage?.viewDetails || "View Details"}
      </Link>
    </div>
  );
}