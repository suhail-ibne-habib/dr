import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="home" className="hero-wash scroll-mt-24">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-teal-dark">
            {site.tagline.eyebrow}
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            {site.tagline.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-8 text-muted">
            <span className="font-semibold text-ink">{site.doctor.credentials}</span>
            <br />
            {site.doctor.extraCredentials.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-2 block">{site.tagline.body}</span>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/chamber" variant="ghost" size="lg">
              {site.ui.viewHours}
            </Button>
            <Button href={site.contact.phoneHref} variant="primary" size="lg">
              <Phone className="size-4" />
              {site.ui.callNow}
            </Button>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {site.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <span className="grid size-5 place-items-center rounded-full bg-teal/15 text-teal">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="relative overflow-hidden rounded-[32px] bg-sky shadow-[0_24px_60px_rgba(11,31,51,0.12)]">
            <Image
              src={site.doctor.photo}
              alt={site.doctor.name}
              width={800}
              height={1000}
              priority
              className="h-[460px] w-full object-cover object-[center_18%] sm:h-[520px]"
            />

            <div className="glass absolute left-4 top-4 rounded-2xl px-3 py-2">
              <p className="text-lg font-extrabold leading-none text-navy">
                {site.doctor.experienceYears}+
              </p>
              <p className="text-[12px] text-muted">{site.ui.years}</p>
            </div>

            <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3">
              <p className="text-sm font-semibold text-navy">{site.ui.callAnytime}</p>
              <a href={site.contact.phoneHref} className="text-sm text-teal-dark">
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
