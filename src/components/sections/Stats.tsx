"use client";

import { useRef } from "react";
import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { gsap, useGSAP } from "@/lib/gsap";

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const numbers = root.current?.querySelectorAll<HTMLElement>("[data-count]");
      if (!numbers?.length) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      numbers.forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        if (reduced) {
          el.textContent = `${target.toLocaleString("bn-BD")}${suffix}`;
          return;
        }
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = `${Math.round(proxy.val).toLocaleString("bn-BD")}${suffix}`;
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="border-y border-teal/10 bg-white py-10 sm:py-12">
      <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            {stat.animate ? (
              <p
                data-count={stat.value}
                data-suffix={stat.suffix}
                className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl"
              >
                ০{stat.suffix}
              </p>
            ) : (
              <p className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                {stat.value}
                {stat.suffix}
              </p>
            )}
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
