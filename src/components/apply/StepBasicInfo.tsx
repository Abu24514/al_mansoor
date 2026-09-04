"use client";

import { useLanguage } from "@/i18n/config";

export interface BasicInfoData {
  fullName: string;
  phone: string;
  city: string;
}

interface Props {
  data: BasicInfoData;
  onChange: (data: BasicInfoData) => void;
}

export default function StepBasicInfo({ data, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-charcoal mb-1">
          {t.apply.step1Title}
        </h2>
        <p className="text-sm text-gray-500">{t.apply.step1Sub}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          {t.apply.fullName}
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          placeholder={t.apply.fullNamePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          {t.apply.phone}
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          placeholder={t.apply.phonePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          {t.apply.city}
        </label>
        <input
          type="text"
          value={data.city}
          onChange={(e) => onChange({ ...data, city: e.target.value })}
          placeholder={t.apply.cityPlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
        />
      </div>
    </div>
  );
}