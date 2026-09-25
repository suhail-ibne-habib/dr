import Image from "next/image";
import { Award, Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  chambers,
  conditions,
  experience,
  licenses,
  qualifications,
  site,
} from "@/data/site";
import { Gallery } from "@/components/sections/Gallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function AboutPage() {
  return (
    <>
      <section className="hero-wash scroll-mt-24">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-teal-dark">
              {site.ui.aboutPageEyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl sm:leading-[1.2]">
              {site.ui.aboutPageTitle}
            </h1>
            <p className="mt-4 text-[15px] font-semibold text-ink">{site.doctor.role}</p>
            <p className="mt-2 text-[15px] leading-8 text-muted">{site.doctor.expertise}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted">{site.ui.aboutBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={site.contact.phoneHref}>
                <Phone className="size-4" />
                {site.ui.callNow}
              </Button>
              <Button href="/chamber" variant="ghost">
                {site.ui.viewHours}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
              <div className="relative overflow-hidden rounded-[32px] bg-sky shadow-[0_24px_60px_rgba(11,31,51,0.12)]">
                <Image
                  src={site.doctor.photo}
                  alt={site.doctor.name}
                  width={800}
                  height={1000}
                  priority
                  className="h-[420px] w-full object-cover object-[center_18%] sm:h-[480px]"
                />
                <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3">
                  <p className="text-sm font-semibold text-navy">{site.doctor.credentials}</p>
                  <p className="mt-1 text-xs text-muted">বিএমডিসি {site.doctor.bmdc}</p>
                </div>
              </div>
            </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              {site.ui.qualifications}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-teal/10 bg-mist/80 p-5 backdrop-blur-md">
                  <Award className="size-4 text-teal" />
                  <h3 className="mt-3 font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist/70 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              {site.ui.experience}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {experience.map((item, index) => (
              <Reveal key={item.place} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-[28px] bg-navy p-7 text-white">
                  <p className="text-sm font-semibold text-teal">{item.role}</p>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight">{item.place}</h3>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-white/70">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                    {item.location}
                  </p>
                  <p className="mt-4 text-sm text-white/55">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Gallery />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy">
                {site.ui.licenses}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {licenses.map((item) => (
                <Reveal key={item.id}>
                  <article className="rounded-2xl border border-teal/10 bg-mist/80 p-5">
                    <p className="text-sm font-semibold text-teal-dark">{item.title}</p>
                    <p className="mt-1 text-xl font-extrabold text-navy">{item.id}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy">
                {site.ui.conditionsTitle}
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {conditions.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white bg-mist/80 px-4 py-3 text-sm font-medium text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-mist/70 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              {site.ui.chambersTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {chambers.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <article className="h-full rounded-[28px] border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgba(11,31,51,0.05)] backdrop-blur-md">
                  <h3 className="text-lg font-extrabold text-navy">{item.name}</h3>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                    {item.address}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy">
                    <Clock className="size-4 text-teal" />
                    {item.days}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {item.hours.map((row) => (
                      <li key={row.time}>
                        {row.label}: {row.time}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-5 rounded-[28px] bg-navy px-6 py-6 text-white sm:px-8">
              <div className="flex-1">
                <p className="text-sm text-teal">{site.ui.directBooking}</p>
                <p className="mt-1 text-lg font-extrabold">{site.ui.callAnytime}</p>
              </div>
              <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 text-sm tabular-nums tracking-wide">
                <Phone className="size-4 text-teal" />
                {site.contact.phone}
              </a>
              <a href={site.contact.emailHref} className="inline-flex items-center gap-2 text-sm">
                <Mail className="size-4 text-teal" />
                {site.contact.email}
              </a>
              <Button href={site.contact.phoneHref} variant="teal">
                {site.ui.getSerial}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
