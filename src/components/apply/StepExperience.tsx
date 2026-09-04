"use client";

import { useLanguage } from "@/i18n/config";

export interface ExperienceData {
  experience: string;
  skills: string;
}

interface Props {
  data: ExperienceData;
  onChange: (data: ExperienceData) => void;
}

export default function StepExperience({ data, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-charcoal mb-1">
          {t.apply.step2Title}
        </h2>
        <p className="text-sm text-gray-500">{t.apply.step2Sub}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          {t.apply.experience}
        </label>
        <input
          type="number"
          min="0"
          value={data.experience}
          onChange={(e) => onChange({ ...data, experience: e.target.value })}
          placeholder={t.apply.experiencePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          {t.apply.skills}
        </label>
        <textarea
          value={data.skills}
          onChange={(e) => onChange({ ...data, skills: e.target.value })}
          placeholder={t.apply.skillsPlaceholder}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition resize-none"
        />
      </div>
    </div>
  );
}