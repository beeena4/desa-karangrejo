"use client";

import { ArrowRight, Leaf } from "lucide-react";
import { Reveal } from "./Reveal";
import { useNavStore } from "@/store/nav";
import { assetPath } from "@/lib/utils";

export function CTASection() {
  const setNav = useNavStore((s) => s.setNav);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-forest text-white">
            {/* BG image */}
            <div className="absolute inset-0 -z-10 opacity-25">
              <img
                src={assetPath("images/cta-bg.png")}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest/90 via-forest/80 to-natural/70" />

            {/* Floating decorative */}
            <Leaf
              className="pointer-events-none absolute right-8 top-10 h-10 w-10 text-white/15 animate-float-soft"
              strokeWidth={1.5}
            />
            <Leaf
              className="pointer-events-none absolute left-10 bottom-12 h-8 w-8 text-white/10 animate-float-soft-delayed"
              strokeWidth={1.5}
            />

            <div className="relative px-6 py-16 md:px-16 md:py-24 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
                <Leaf className="h-3.5 w-3.5" />
                Desa Karangrejo
              </span>
              <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Kenali Karangrejo Lebih Dekat
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/85 text-pretty">
                Temukan informasi desa, potensi lokal, UMKM, dan berbagai layanan
                untuk masyarakat.
              </p>
              <button
                onClick={() => setNav("profil")}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-forest shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Jelajahi Website
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
