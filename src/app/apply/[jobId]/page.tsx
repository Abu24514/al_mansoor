"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import ApplyStepper from "@/components/apply/ApplyStepper";
import StepBasicInfo, { type BasicInfoData } from "@/components/apply/StepBasicInfo";
import StepExperience, { type ExperienceData } from "@/components/apply/StepExperience";
import StepDocumentUpload, { type DocumentData } from "@/components/apply/StepDocumentUpload";
import StepConfirmation from "@/components/apply/StepConfirmation";
import jobsData from "@/data/jobs.json";
import type { Job } from "@/types/job";

const TOTAL_STEPS = 3;

export default function ApplyPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = use(params);
  const { t } = useLanguage();

  const jobs = jobsData as Job[];
  const job = jobs.find((j) => j.id === Number(jobId));

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    fullName: "",
    phone: "",
    city: "",
  });
  const [experience, setExperience] = useState<ExperienceData>({
    experience: "",
    skills: "",
  });
  const [documents, setDocuments] = useState<DocumentData>({
    idDocument: null,
    personalPhoto: null,
  });

  if (!job) return notFound();

  const isStepValid = () => {
    if (step === 1) {
      return basicInfo.fullName.trim() && basicInfo.phone.trim() && basicInfo.city.trim();
    }
    if (step === 2) {
      return experience.experience.trim();
    }
    if (step === 3) {
      return documents.idDocument && documents.personalPhoto;
    }
    return true;
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      // Static frontend only — no backend submission yet
      console.log({ job, basicInfo, experience, documents });
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  if (submitted) {
    return (
      <main className="bg-bg-light min-h-screen flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-md w-full">
          <StepConfirmation />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-bg-light min-h-screen py-10 md:py-16">
      <div className="max-w-lg mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
          <p className="text-xs text-gray-400 mb-1">
            {t.apply.title} <span className="font-semibold text-charcoal">{job.title}</span>
          </p>

          <ApplyStepper
            currentStep={step}
            totalSteps={TOTAL_STEPS}
            stepLabel={t.apply.step}
            ofLabel={t.apply.of}
          />

          {step === 1 && <StepBasicInfo data={basicInfo} onChange={setBasicInfo} />}
          {step === 2 && <StepExperience data={experience} onChange={setExperience} />}
          {step === 3 && <StepDocumentUpload data={documents} onChange={setDocuments} />}

          <div className="flex items-center gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 px-5 py-3 rounded-full text-sm font-medium text-charcoal border border-slate-200 hover:bg-slate-50 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                {t.apply.back}
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex-1 bg-primary text-white text-sm font-semibold py-3 rounded-full hover:bg-primary/90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {step === TOTAL_STEPS ? t.apply.submit : t.apply.next}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}