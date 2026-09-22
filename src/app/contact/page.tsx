import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `যোগাযোগ | ${site.doctor.name}`,
  description: site.ui.contactPageLead,
};

export default function ContactRoute() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
