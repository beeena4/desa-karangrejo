"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { potencies, culturalEvents } from "@/data/potencies";
import { assetPath } from "@/lib/utils";
import { Landmark } from "lucide-react";

export function PotensiView() {
  return (
    <>
      <PageHero
        eyebrow="Potensi Desa"
        title="Potensi Karangrejo"
        description="Beragam potensi yang menjadi kekuatan Desa Karangrejo, dari sektor pertanian hingga warisan budaya yang lestari."
      />

      {/* Potency cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {potencies.map((p) => (
              <motion.article
                key={p.slug}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={assetPath(p.image)}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                    <p.icon className="h-3.5 w-3.5" />
                    {p.category}
                  </span>
                  {p.highlight && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                      Unggulan
                    </span>
                  )}
                  <div className="absolute inset-x-5 bottom-4">
                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {p.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}

          </Stagger>
        </div>
      </section>

      {/* Culture details */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Landmark className="h-3.5 w-3.5" />
                Tradisi Lestari
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Budaya yang Dijaga Masyarakat
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tradisi berikut rutin dilaksanakan warga sebagai bentuk syukur,
                doa bersama, dan pelestarian nilai-nilai luhur leluhur.
              </p>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {culturalEvents.map((e, i) => (
              <motion.div
                key={e.name}
                variants={staggerItem}
                className="group flex gap-5 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary text-xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{e.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
