import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `পরিচিতি | ${site.doctor.name}`,
  description: site.ui.aboutPageLead,
};

export default function AboutRoute() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
