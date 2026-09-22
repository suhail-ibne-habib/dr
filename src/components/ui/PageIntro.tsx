import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
};

export function PageIntro({ eyebrow, title, body, children }: PageIntroProps) {
  return (
    <section className="hero-wash">
      <Container className="py-12 lg:py-16">
        <p className="text-sm font-semibold tracking-wide text-teal-dark">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl sm:leading-[1.2]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-muted">{body}</p>
        {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
      </Container>
    </section>
  );
}
