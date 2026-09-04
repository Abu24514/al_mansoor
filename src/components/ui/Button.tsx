"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: ReactNode;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "group inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-sm hover:shadow-md",
  outline:
    "bg-white border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.98]",
  ghost:
    "bg-transparent text-charcoal hover:bg-black/5 active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  showIcon = true,
  iconPosition = "right",
  fullWidth = false,
  children,
  href,
  className = "",
  ...props
}: ButtonProps & { className?: string }) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const defaultIcon = (
    <MoveRight
      className={`${iconSizeStyles[size]} transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1`}
    />
  );

  const displayIcon = icon ?? (showIcon ? defaultIcon : null);

  const content = (
    <>
      {displayIcon && iconPosition === "left" && (
        <span className="flex items-center">{displayIcon}</span>
      )}
      <span>{children}</span>
      {displayIcon && iconPosition === "right" && (
        <span className="flex items-center">{displayIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={(props as ButtonAsLink).onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}