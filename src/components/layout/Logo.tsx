import { Briefcase } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5">
      <span className="bg-emerald-900 text-white font-bold p-2 rounded-xl flex items-center justify-center">
        <Briefcase className="w-5 h-5" />
      </span>
      <div>
        <span className="text-xl font-bold text-slate-900 tracking-tight block leading-none">
          AL-MANSOOR
        </span>
        <span className="text-[10px] text-emerald-800 font-semibold uppercase tracking-widest block mt-0.5">
          Overseas Recruitment
        </span>
      </div>
    </Link>
  );
}