"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-white/75 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-navy",
                  pathname === item.href ? "text-navy" : "text-ink/75",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <Button href={site.contact.phoneHref} size="sm">
              <Phone className="size-3.5" />
              <span className="tabular-nums tracking-wide">{site.contact.phone}</span>
            </Button>
          </span>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full bg-mist text-navy lg:hidden"
            aria-label={open ? site.ui.closeMenu : site.ui.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container className="pb-4">
            <ul className="flex flex-col rounded-2xl bg-mint/80 p-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </header>
  );
}
