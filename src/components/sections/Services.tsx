"use client";

import { Activity, ArrowRight, Droplets, HeartPulse, Stethoscope } from "lucide-react";
import { services, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/cn";

const icons = {
  droplet: Droplets,
  stethoscope: Stethoscope,
  activity: Activity,
  bandage: BandageIcon,
  heart: HeartPulse,
};

function BandageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect
        x="3.5"
        y="9"
        width="17"
        height="6"
        rx="3"
        transform="rotate(-35 12 12)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

const tints = {
  teal: "bg-mint text-teal-dark",
  sky: "bg-sky text-[#0369a1]",
  coral: "bg-coral text-[#e11d48]",
  green: "bg-green text-[#059669]",
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-mist/60 py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div>
              <p className="text-sm font-semibold text-teal-dark">{site.ui.specialties}</p>
              <h2 className="mt-3 max-w-md text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                {site.ui.servicesTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-[15px] leading-8 text-muted">{site.ui.servicesBody}</p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(11,31,51,0.05)] backdrop-blur-md">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-2xl",
                      tints[service.tint],
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold leading-snug tracking-tight text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <a
                    href="#chamber"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-dark"
                  >
                    {site.ui.learnMore}
                    <ArrowRight className="size-3.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
