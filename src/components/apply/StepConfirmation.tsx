"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import Button from "@/components/ui/Button";

export default function StepConfirmation() {
  const { t } = useLanguage();

  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
        <CheckCircle2 className="w-9 h-9 text-primary" />
      </div>
      <h2 className="text-xl font-bold text-charcoal mb-2">
        {t.apply.successTitle}
      </h2>
      <p className="text-sm text-gray-500 max-w-xs mx-auto mb-8">
        {t.apply.successSub}
      </p>
      <Button href="/" showIcon={false}>
        {t.apply.backHome}
      </Button>
    </div>
  );
}