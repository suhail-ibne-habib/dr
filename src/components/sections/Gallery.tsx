"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/cn";

function Tile({
  item,
  onOpen,
  className,
}: {
  item: (typeof gallery)[number];
  onOpen: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={item.alt}
      className={cn(
        "group relative block overflow-hidden rounded-[18px] bg-[#eef2f1]",
        className,
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </button>
  );
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((index) => (index === null ? index : (index + gallery.length - 1) % gallery.length)),
    [],
  );
  const next = useCallback(
    () => setActive((index) => (index === null ? index : (index + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const open = (index: number) => setActive(index);

  return (
    <section className="bg-[#f7f9f8] py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {site.ui.galleryTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-muted">{site.ui.galleryBody}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 hidden h-[640px] grid-cols-12 grid-rows-2 gap-5 lg:grid">
            <Tile item={gallery[0]} onOpen={() => open(0)} className="col-start-1 col-span-3 row-start-1" />
            <Tile item={gallery[4]} onOpen={() => open(4)} className="col-start-4 col-span-6 row-span-2" />
            <Tile item={gallery[1]} onOpen={() => open(1)} className="col-start-10 col-span-3 row-start-1" />
            <Tile item={gallery[3]} onOpen={() => open(3)} className="col-start-1 col-span-3 row-start-2" />
            <Tile item={gallery[5]} onOpen={() => open(5)} className="col-start-10 col-span-3 row-start-2" />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-5 hidden h-[280px] grid-cols-12 gap-5 lg:grid">
            <Tile item={gallery[2]} onOpen={() => open(2)} className="col-span-3" />
            <Tile item={gallery[7]} onOpen={() => open(7)} className="col-span-6" />
            <Tile item={gallery[6]} onOpen={() => open(6)} className="col-span-3" />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
          <Tile item={gallery[4]} onOpen={() => open(4)} className="col-span-2 h-72" />
          {gallery
            .map((item, index) => ({ item, index }))
            .filter(({ index }) => index !== 4)
            .map(({ item, index }) => (
              <Tile key={item.src} item={item} onOpen={() => open(index)} className="h-44 sm:h-52" />
            ))}
        </div>
      </Container>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/88 px-4 py-8 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={site.ui.closeGallery}
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label={site.ui.prevImage}
            className="absolute left-3 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label={site.ui.nextImage}
            className="absolute right-3 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
          <figure className="relative max-h-[82vh] w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={gallery[active].src}
              alt={gallery[active].alt}
              width={1600}
              height={1200}
              className="max-h-[82vh] w-full rounded-[18px] object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/75">{gallery[active].alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
