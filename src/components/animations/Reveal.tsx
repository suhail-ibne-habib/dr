"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

      gsap.from(el, {
        y: 24,
        duration: 0.7,
        delay,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    },
    { scope: ref },
  );

  return <div ref={ref} className={cn(className)}>{children}</div>;
}
