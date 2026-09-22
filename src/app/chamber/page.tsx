import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Chamber } from "@/components/sections/Chamber";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: `চেম্বার | ${site.doctor.name}`,
  description: site.ui.chamberBody,
};

export default function ChamberRoute() {
  return (
    <main>
      <PageIntro eyebrow={site.ui.chambersTitle} title={site.ui.chamberTitle} body={site.ui.chamberBody}>
        <Button href={site.contact.phoneHref}>
          <Phone className="size-4" />
          {site.ui.getSerial}
        </Button>
        <Button href="/contact" variant="ghost">
          {site.ui.contact}
        </Button>
      </PageIntro>
      <Chamber showHeader={false} />
    </main>
  );
}
