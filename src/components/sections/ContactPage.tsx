import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { chambers, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/animations/Reveal";

const methods = [
  {
    label: site.ui.primary,
    value: site.contact.phone,
    href: site.contact.phoneHref,
    icon: Phone,
  },
  {
    label: site.ui.whatsappLabel,
    value: site.contact.phone,
    href: site.contact.whatsapp,
    icon: MessageCircle,
    external: true,
  },
  {
    label: site.ui.emailLabel,
    value: site.contact.email,
    href: site.contact.emailHref,
    icon: Mail,
  },
] as const;

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow={site.ui.contact}
        title={site.ui.contactPageTitle}
        body={site.ui.contactPageLead}
      >
        <Button href={site.contact.phoneHref}>
          <Phone className="size-4" />
          {site.ui.callNow}
        </Button>
        <Button href={site.contact.whatsapp} variant="ghost" target="_blank" rel="noreferrer">
          <MessageCircle className="size-4" />
          {site.ui.whatsappLabel}
        </Button>
      </PageIntro>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            {site.ui.contactMethods}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {methods.map((item) => (
              <Reveal key={item.label}>
                <a
                  href={item.href}
                  target={"external" in item ? "_blank" : undefined}
                  rel={"external" in item ? "noreferrer" : undefined}
                  className="block h-full rounded-[24px] border border-teal/10 bg-mist/80 p-6 transition-colors hover:bg-mint"
                >
                  <item.icon className="size-5 text-teal" />
                  <p className="mt-4 text-sm font-semibold text-teal-dark">{item.label}</p>
                  <p className="mt-1 text-lg font-extrabold text-navy">{item.value}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist/70 py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            {site.ui.chambersTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-8 text-muted">{site.ui.chamberBody}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {chambers.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <article className="h-full rounded-[28px] border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgba(11,31,51,0.05)] backdrop-blur-md">
                  <h3 className="text-lg font-extrabold text-navy">{item.name}</h3>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                    <a href={item.mapHref} target="_blank" rel="noreferrer" className="hover:text-navy">
                      {item.address}
                    </a>
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
        </Container>
      </section>
    </>
  );
}
