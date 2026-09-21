import { cn } from "@/lib/cn";
import { site } from "@/data/site";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <a href="#home" className={cn("flex items-center gap-2.5", className)}>
      <span className="grid size-9 place-items-center rounded-xl bg-teal text-white">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[13px] font-bold tracking-tight",
            inverted ? "text-white" : "text-navy",
          )}
        >
          {site.doctor.nameShort}
        </span>
        <span
          className={cn(
            "block text-[11px] font-medium",
            inverted ? "text-white/60" : "text-muted",
          )}
        >
          মেডিসিন বিশেষজ্ঞ
        </span>
      </span>
    </a>
  );
}
