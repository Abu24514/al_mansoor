"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Briefcase,
  Home,
  Building2,
  Info,
  Headphones,
  X,
  Globe,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Users,
} from "lucide-react";
import { useLanguage } from "@/i18n/config";
import Logo from "./Logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { t, locale, toggleLocale } = useLanguage();
  const pathname = usePathname();
  const [isLookingForOpen, setIsLookingForOpen] = useState(false);

  const [portalTarget] = useState<HTMLElement | null>(() =>
    typeof document !== "undefined" ? document.body : null,
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!portalTarget || !isOpen) return null;

  const links = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/jobs", label: t.nav.jobs, icon: Briefcase },
    { href: "/for-companies", label: t.nav.forCompanies, icon: Building2 },
    { href: "/about", label: t.nav.about, icon: Info },
    { href: "/contact", label: t.nav.contact, icon: Headphones },
  ];

  return createPortal(
    <div className="fixed inset-0 z-100 md:hidden">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Side Drawer Panel */}
      <div className="fixed inset-y-0 ltr:right-0 rtl:left-0 h-full w-full max-w-xs bg-white shadow-2xl flex flex-col z-101 overflow-y-auto">
        {/* Header: Logo + Close */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 shrink-0">
          <Logo onClick={onClose} />

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Section */}
        <div className="px-3 py-4">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2 block">
            Menu
          </span>

          <nav className="space-y-1">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={`flex items-center justify-between gap-3 px-3 py-3 rounded-xl text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? "bg-emerald-50 text-emerald-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className={`w-4.5 h-4.5 ${
                        isActive ? "text-emerald-700" : "text-slate-400"
                      }`}
                    />
                    <span>{label}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 rtl:rotate-180" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}

        <div className="space-y-3 px-4 pt-4 pb-3 mt-auto border-t border-slate-100 shrink-0">
          <Link
            href="/jobs"
            onClick={onClose}
            className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-semibold py-3 rounded-xl text-center block transition text-sm shadow-sm cursor-pointer"
          >
            {t.hero.getStarted}
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsLookingForOpen(!isLookingForOpen)}
              className="w-full bg-white border border-emerald-900/25 text-slate-800 font-medium py-3 px-4 rounded-xl flex items-center justify-between text-sm transition hover:border-emerald-900 cursor-pointer"
            >
              <span>{t.nav.lookingFor}</span>
              {isLookingForOpen ? (
                <ChevronUp className="w-4 h-4 text-emerald-900" />
              ) : (
                <ChevronDown className="w-4 h-4 text-emerald-900" />
              )}
            </button>

            {isLookingForOpen && (
              <div className="mt-2 bg-slate-50 border border-slate-200 rounded-xl p-2 space-y-1">
                <Link
                  href="/jobs"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-100/60 rounded-lg transition cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-emerald-900" />
                  <span>{t.nav.work}</span>
                </Link>
                <Link
                  href="/for-companies"
                  onClick={onClose}
                  className="flex items-center gap-2.5 p-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-100/60 rounded-lg transition cursor-pointer"
                >
                  <Users className="w-4 h-4 text-emerald-900" />
                  <span>{t.nav.employees}</span>
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={toggleLocale}
            className="w-full bg-white border border-emerald-900/25 text-emerald-900 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition hover:border-emerald-900 cursor-pointer"
          >
            <span>{locale === "en" ? "العربية" : "English"}</span>
            <Globe className="w-4 h-4 text-emerald-900" />
          </button>
        </div>
      </div>
    </div>,
    portalTarget,
  );
}
