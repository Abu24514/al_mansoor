"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import SectionHeading from "@/components/ui/SectionHeading";

interface FormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  country: string;
  workersNeeded: string;
  quantity: string;
  message: string;
}

const initialData: FormData = {
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  country: "",
  workersNeeded: "",
  quantity: "",
  message: "",
};

const GULF_COUNTRIES = [
  "Saudi Arabia",
  "UAE",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
];

export default function LeadForm() {
  const { t } = useLanguage();
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    setSubmitted(true);
  };

  const isValid =
    data.companyName.trim() &&
    data.contactPerson.trim() &&
    data.phone.trim() &&
    data.country.trim() &&
    data.workersNeeded.trim() &&
    data.quantity.trim();

  if (submitted) {
    return (
      <section id="lead-form" className="bg-bg-light py-16 md:py-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-9 h-9 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-charcoal mb-2">
            {t.leadForm.successTitle}
          </h2>
          <p className="text-sm text-gray-500">{t.leadForm.successSub}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="bg-bg-light py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <SectionHeading title={t.leadForm.title} subtitle={t.leadForm.subtitle} />

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                {t.leadForm.companyName}
              </label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder={t.leadForm.companyNamePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                {t.leadForm.contactPerson}
              </label>
              <input
                type="text"
                value={data.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                placeholder={t.leadForm.contactPersonPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                {t.leadForm.phone}
              </label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={t.leadForm.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                {t.leadForm.email}
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t.leadForm.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                {t.leadForm.country}
              </label>
              <select
                value={data.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition cursor-pointer bg-white"
              >
                <option value="">{t.leadForm.selectCountry}</option>
                {GULF_COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                {t.leadForm.quantity}
              </label>
              <input
                type="number"
                min="1"
                value={data.quantity}
                onChange={(e) => handleChange("quantity", e.target.value)}
                placeholder={t.leadForm.quantityPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              {t.leadForm.workersNeeded}
            </label>
            <input
              type="text"
              value={data.workersNeeded}
              onChange={(e) => handleChange("workersNeeded", e.target.value)}
              placeholder={t.leadForm.workersNeededPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              {t.leadForm.message}
            </label>
            <textarea
              value={data.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder={t.leadForm.messagePlaceholder}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-primary text-white text-sm font-semibold py-3.5 rounded-full hover:bg-primary/90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {t.leadForm.submit}
          </button>
        </form>
      </div>
    </section>
  );
}