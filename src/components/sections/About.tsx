import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { aboutPoints, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <article className="flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-navy p-7 text-white sm:p-9">
            <div>
              <p className="text-sm font-semibold text-teal">{site.ui.hospitalPosting}</p>
              <p className="mt-2 text-sm text-white/70">{site.hospital.role}</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {site.hospital.name}
              </h3>
              <p className="mt-3 flex items-start gap-2 text-[15px] leading-7 text-white/70">
                <MapPin className="mt-1 size-4 shrink-0 text-teal" />
                {site.hospital.address}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {site.hospital.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-white/55">{site.hospital.country}</p>
            </div>
            <Button href={site.hospital.mapHref} variant="teal" className="mt-8 w-fit">
              {site.ui.getThere}
            </Button>
          </article>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold text-teal-dark">{site.ui.aboutConsultant}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-[34px] sm:leading-[1.3]">
              {site.ui.aboutTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-muted">{site.ui.aboutBody}</p>
          </Reveal>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {aboutPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.07}>
                <article className="rounded-2xl border border-teal/10 bg-mist/80 p-4 backdrop-blur-md">
                  <ShieldCheck className="size-4 text-teal" />
                  <h3 className="mt-3 font-bold text-navy">{point.title}</h3>
                  <p className="mt-1 text-xs leading-6 text-muted">{point.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="ghost">
                {site.ui.readAbout}
                <ArrowRight className="size-4" />
              </Button>
              <Button href={site.contact.phoneHref}>{site.ui.callDoctorNow}</Button>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium tabular-nums tracking-wide text-navy"
              >
                <Phone className="size-4 text-teal" />
                {site.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
