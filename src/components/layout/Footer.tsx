import { MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/icons/Logo";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-navy-deep text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">{site.ui.footerAbout}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-teal">{site.ui.navigate}</p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-teal">{site.ui.chamberHours}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {site.chamber.hours.map((row) => (
              <li key={row.days}>
                <span className="block font-medium text-white">{row.days}</span>
                {row.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-teal">{site.ui.contact}</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 text-teal" />
              <a href={site.contact.phoneHref} className="hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-teal" />
              {site.chamber.address}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.doctor.honorific}। {site.ui.copyright}
          </p>
          <p>{site.ui.disclaimer}</p>
        </Container>
      </div>
    </footer>
  );
}
