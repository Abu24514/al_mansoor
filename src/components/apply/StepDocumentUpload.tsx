"use client";

import { useRef } from "react";
import { Camera, X } from "lucide-react";
import { useLanguage } from "@/i18n/config";

export interface DocumentData {
  idDocument: File | null;
  personalPhoto: File | null;
}

interface Props {
  data: DocumentData;
  onChange: (data: DocumentData) => void;
}

export default function StepDocumentUpload({ data, onChange }: Props) {
  const { t } = useLanguage();
  const idInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const renderUploadBox = (
    file: File | null,
    label: string,
    inputRef: React.RefObject<HTMLInputElement | null>,
    onSelect: (file: File | null) => void
  ) => (
    <div>
      <label className="block text-sm font-medium text-charcoal mb-1.5">
        {label}
      </label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => onSelect(e.target.files?.[0] ?? null)}
      />

      {file ? (
        <div className="relative rounded-xl overflow-hidden border border-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={URL.createObjectURL(file)}
            alt={label}
            className="w-full h-40 object-cover"
          />
          <button
            onClick={() => onSelect(null)}
            className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-black/60 text-white rounded-full p-1.5 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full h-40 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-primary hover:text-primary transition cursor-pointer"
        >
          <Camera className="w-7 h-7" />
          <span className="text-sm font-medium">{t.apply.uploadTap}</span>
        </button>
      )}
    </div>
  );

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-charcoal mb-1">
          {t.apply.step3Title}
        </h2>
        <p className="text-sm text-gray-500">{t.apply.step3Sub}</p>
      </div>

      {renderUploadBox(
        data.idDocument,
        t.apply.idDocument,
        idInputRef,
        (file) => onChange({ ...data, idDocument: file })
      )}

      {renderUploadBox(
        data.personalPhoto,
        t.apply.personalPhoto,
        photoInputRef,
        (file) => onChange({ ...data, personalPhoto: file })
      )}
    </div>
  );
}