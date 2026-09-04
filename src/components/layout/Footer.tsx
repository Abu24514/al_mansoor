"use client";

import Link from "next/link";
import { Briefcase, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/config";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-emerald-950 text-slate-200 border-t border-emerald-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1: Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-800 text-white font-bold p-2 rounded-xl">
              <Briefcase className="w-5 h-5" />
            </span>
            <span className="text-xl font-bold text-white tracking-tight">
              AL-MANSOOR
            </span>
          </div>
          <p className="text-xs leading-relaxed text-emerald-100/70">
            {t.footer.tagline}
          </p>
          <div className="inline-flex items-center gap-1.5 bg-emerald-900/60 border border-emerald-800 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Govt. Regd. Overseas Agency</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-emerald-100/70">
            <li><Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
            <li><Link href="/jobs" className="hover:text-white transition-colors">{t.nav.jobs}</Link></li>
            <li><Link href="/for-companies" className="hover:text-white transition-colors">{t.nav.forCompanies}</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
          </ul>
        </div>

        {/* Col 3: Categories */}
        <div>
          <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
            Top Categories
          </h4>
          <ul className="space-y-2.5 text-xs text-emerald-100/70">
            <li>Heavy Drivers & Operators</li>
            <li>Construction Helpers & Masons</li>
            <li>Hotel Cleaners & Catering Staff</li>
            <li>Electricians & Plumbers</li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="text-xs font-bold text-white mb-4 tracking-wider uppercase">
            {t.footer.contactUs}
          </h4>
          <div className="space-y-2.5 text-xs text-emerald-100/70">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Saudi Arabia • UAE • Qatar • India</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>contact@almansoor.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+966 50 000 0000 / +91 98765 43210</span>
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-emerald-900/60 py-4 text-center text-xs text-emerald-400/80">
        © {new Date().getFullYear()} Al-Mansoor Recruitment. {t.footer.rights}
      </div>
    </footer>
  );
}