"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/i18n/config";
import SectionHeading from "@/components/ui/SectionHeading";
import JobFilters from "@/components/jobs/JobFilters";
import JobCard from "@/components/jobs/JobCard";
import jobsData from "@/data/jobs.json";
import type { Job } from "@/types/job";

function JobsPageContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    () => searchParams.get("category") ?? ""
  );
  const [country, setCountry] = useState("");

  const jobs = jobsData as Job[];

  const categories = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.category))),
    [jobs]
  );
  const countries = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.country))),
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = !category || job.category === category;
      const matchesCountry = !country || job.country === country;
      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [jobs, search, category, country]);

  return (
    <main className="bg-bg-light min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title={t.jobsPage.title}
          subtitle={t.jobsPage.subtitle}
        />

        <JobFilters
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          country={country}
          onCountryChange={setCountry}
          categories={categories}
          countries={countries}
        />

        <p className="text-sm text-gray-500 mb-5">
          {filteredJobs.length} {t.jobsPage.resultsFound}
        </p>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            {t.jobsPage.noResults}
          </div>
        )}
      </div>
    </main>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={null}>
      <JobsPageContent />
    </Suspense>
  );
}