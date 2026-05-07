import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark" | "terminator";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-epicPurple text-white shadow-bounce hover:bg-purple-700 focus-visible:ring-epicPurple",
  secondary: "bg-epicOrange text-white shadow-warm hover:bg-orange-600 focus-visible:ring-epicOrange",
  outline: "border-2 border-epicPurple bg-white text-epicPurple hover:bg-purple-50 focus-visible:ring-epicPurple",
  ghost: "bg-white/15 text-white hover:bg-white/25 focus-visible:ring-white",
  dark: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-950",
  terminator: "bg-terminatorRed text-white shadow-terminator hover:bg-red-800 focus-visible:ring-terminatorRed",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-base",
  lg: "min-h-14 px-7 text-lg",
};

export function Button({
  children,
  to,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
