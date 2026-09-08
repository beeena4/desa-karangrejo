"use client";

import { ArrowRight, Leaf, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { useNavStore } from "@/store/nav";
import { assetPath } from "@/lib/utils";

const highlights = [
  "Potensi pertanian dan jamu tradisional",
  "UMKM lokal yang terus tumbuh",
  "Budaya & tradisi yang lestari",
  "Layanan publik berbasis digital",
];

export function AboutVillage() {
  const setNav = useNavStore((s) => s.setNav);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        {/* Image */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-sage-light/40 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
              <img
                src={assetPath("images/about-village.png")}
                alt="Suasana Desa Karangrejo"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2 md:-right-5 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 shadow-xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Leaf className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-muted-foreground">Desa Agaris</p>
                <p className="text-sm font-bold text-foreground">Hijau & Sejahtera</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Leaf className="h-3.5 w-3.5" />
            Tentang Desa
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground text-balance">
            Kenali Karangrejo Lebih Dekat
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            Desa Karangrejo merupakan desa yang memiliki potensi di bidang
            pertanian, perdagangan, jamu tradisional, UMKM, serta budaya lokal.
            Melalui pemanfaatan teknologi digital, website ini menjadi media
            informasi dan pelayanan bagi masyarakat.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2.5 text-sm text-foreground"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setNav("profil")}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Selengkapnya Tentang Desa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
