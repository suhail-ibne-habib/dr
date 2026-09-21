import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-navy text-white shadow-[0_8px_20px_rgba(11,31,51,0.18)] hover:bg-[#12344f]",
  teal: "bg-teal text-white hover:bg-teal-dark",
  outline:
    "border border-teal/25 bg-white/70 text-navy hover:bg-white",
  ghost: "bg-mint text-navy hover:bg-teal/15",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[15px]",
} as const;

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
