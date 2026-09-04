import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  eyebrow,
  eyebrowIcon,
  className = "",
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center mx-auto" : "text-left rtl:text-right";

  return (
    <div className={`mb-10 md:mb-12 ${alignStyles} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
        {title}
      </h2>

      {/* Accent underline */}
      <div
        className={`h-1 w-14 bg-accent rounded-full mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <p
          className={`text-gray-600 text-base leading-relaxed ${
            align === "center" ? "max-w-xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}