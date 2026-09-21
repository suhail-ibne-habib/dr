import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center rounded-full bg-lime/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
