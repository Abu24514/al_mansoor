"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/i18n/config";

interface JobFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  country: string;
  onCountryChange: (value: string) => void;
  categories: string[];
  countries: string[];
}

export default function JobFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  country,
  onCountryChange,
  categories,
  countries,
}: JobFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-5 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.jobsPage.searchPlaceholder}
            className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition cursor-pointer bg-white"
        >
          <option value="">{t.jobsPage.allCategories}</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Country */}
        <select
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition cursor-pointer bg-white"
        >
          <option value="">{t.jobsPage.allCountries}</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}