import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { conditions, site } from "@/data/site";
import { Services } from "@/components/sections/Services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: `সেবাসমূহ | ${site.doctor.name}`,
  description: site.ui.servicesPageLead,
};

export default function ServicesRoute() {
  return (
    <main>
      <PageIntro
        eyebrow={site.ui.specialties}
        title={site.ui.servicesTitle}
        body={site.ui.servicesPageLead}
      >
        <Button href="/chamber" variant="ghost">
          {site.ui.viewHours}
        </Button>
        <Button href={site.contact.phoneHref}>
          <Phone className="size-4" />
          {site.ui.callNow}
        </Button>
      </PageIntro>
      <Services showHeader={false} />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            {site.ui.conditionsTitle}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-teal/10 bg-mist/80 px-4 py-3 text-sm font-medium text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
