"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Briefcase, Users, ChevronUp, ChevronDown, Menu, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/config";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
         <Logo/>

        {/* Desktop Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-800 transition-colors">{t.nav.home}</Link>
          <Link href="/jobs" className="hover:text-emerald-800 transition-colors">{t.nav.jobs}</Link>
          <Link href="/for-companies" className="hover:text-emerald-800 transition-colors">{t.nav.forCompanies}</Link>
          <Link href="/about" className="hover:text-emerald-800 transition-colors">{t.nav.about}</Link>
          <Link href="/contact" className="hover:text-emerald-800 transition-colors">{t.nav.contact}</Link>
        </nav>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-950 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>{t.nav.lookingFor}</span>
              {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-200" /> : <ChevronDown className="w-4 h-4 text-emerald-200" />}
            </button>

            {isOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                <Link
                  href="/jobs"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50/60 transition"
                >
                  <span className="bg-emerald-100 text-emerald-900 rounded-lg p-2">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block leading-none">{t.nav.work}</span>
                    <span className="text-[11px] text-slate-500">Apply for Gulf Jobs</span>
                  </div>
                </Link>

                <Link
                  href="/for-companies"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50/60 transition"
                >
                  <span className="bg-slate-100 text-slate-800 rounded-lg p-2">
                    <Users className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block leading-none">{t.nav.employees}</span>
                    <span className="text-[11px] text-slate-500">Hire Workers (B2B)</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 rounded-full px-3.5 py-2.5 transition cursor-pointer"
          >
            <Globe className="w-4 h-4 text-emerald-800" />
            <span>{locale === "en" ? "العربية" : "English"}</span>
          </button>
        </div>

        {/* Mobile Hamburger Icon Only */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* Slide-over Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}