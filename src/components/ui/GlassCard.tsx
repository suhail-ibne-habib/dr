import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
  hover?: boolean;
};

export function GlassCard({
  children,
  className,
  tone = "light",
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] p-6",
        tone === "dark" ? "glass-dark text-white" : "glass text-navy",
        hover &&
          "transition-transform duration-500 will-change-transform hover:-translate-y-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
