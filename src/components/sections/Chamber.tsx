import { Clock, MapPin, Phone } from "lucide-react";
import { bookingSteps, chambers, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function Chamber({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="scroll-mt-24 bg-mist/70 py-16 sm:py-20">
      <Container>
        {showHeader ? (
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                {site.ui.chamberTitle}
              </h2>
              <p className="mt-3 text-[15px] leading-8 text-muted">{site.ui.chamberBody}</p>
            </div>
          </Reveal>
        ) : null}

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            {chambers.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <article className="rounded-[28px] border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgba(11,31,51,0.05)] backdrop-blur-md sm:p-7">
                  <p className="text-sm font-semibold text-teal-dark">{item.area}</p>
                  <h3 className="mt-1 text-xl font-extrabold text-navy">{item.name}</h3>
                  <p className="mt-3 flex items-start gap-2 text-[15px] leading-7 text-muted">
                    <MapPin className="mt-1 size-4 shrink-0 text-teal" />
                    <a href={item.mapHref} target="_blank" rel="noreferrer" className="hover:text-navy">
                      {item.address}
                    </a>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.hours.map((row) => (
                      <li
                        key={`${item.id}-${row.label}`}
                        className="flex items-center justify-between gap-3 rounded-2xl bg-mist px-4 py-3"
                      >
                        <span className="flex items-center gap-2 font-semibold text-navy">
                          <Clock className="size-4 text-teal" />
                          {item.days} · {row.label}
                        </span>
                        <span className="shrink-0 rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal-dark">
                          {row.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <article className="h-full rounded-[28px] border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgba(11,31,51,0.05)] backdrop-blur-md sm:p-8">
              <p className="text-sm font-semibold text-teal-dark">{site.ui.directBooking}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">{site.ui.serialBooking}</h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={site.contact.phoneHref}
                  className="rounded-2xl bg-mist p-4 transition-colors hover:bg-mint"
                >
                  <p className="text-xs text-muted">{site.ui.primary}</p>
                  <p className="mt-1 font-bold text-navy">{site.contact.phone}</p>
                </a>
                <a
                  href={site.contact.phoneSecondaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-mist p-4 transition-colors hover:bg-mint"
                >
                  <p className="text-xs text-muted">{site.ui.serialDesk}</p>
                  <p className="mt-1 font-bold text-navy">{site.contact.phoneSecondary}</p>
                </a>
              </div>

              <ol className="mt-6 space-y-4">
                {bookingSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-bold text-navy">{step.title}</span>
                      <span className="text-sm leading-7 text-muted">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-7 text-muted">{site.chamber.note}</p>
              <Button href={site.contact.phoneHref} className="mt-8">
                <Phone className="size-4" />
                {site.ui.getSerial}
              </Button>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
