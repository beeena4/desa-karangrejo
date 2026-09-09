"use client";

import { Hero } from "@/components/site/Hero";
import { QuickAccess } from "@/components/site/QuickAccess";
import { AboutVillage } from "@/components/site/AboutVillage";
import { VillageStats } from "@/components/site/VillageStats";
import { CTASection } from "@/components/site/CTASection";
import { SectionHeading } from "@/components/site/VillageStats";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { potencies } from "@/data/potencies";
import { useNavStore } from "@/store/nav";
import { assetPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HomeView() {
  const setNav = useNavStore((s) => s.setNav);

  return (
    <>
      <Hero />
      <QuickAccess />
      <AboutVillage />

      {/* Video Profil Desa */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Play className="h-3.5 w-3.5 fill-current" />
              Video Profil Desa
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Lihat lebih dekat Desa Karangrejo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Kenali kehidupan, potensi, dan aktivitas masyarakat Desa Karangrejo
              melalui video profil desa.
            </p>
            <button
              onClick={() => setNav("profil")}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Lihat profil desa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/P8UOp8vxsw4"
                title="Video Profil Desa Karangrejo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <VillageStats />

      {/* Potency preview */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Potensi Desa"
            title="Keunggulan Desa Karangrejo"
            description="Dari pertanian subur hingga warisan jamu tradisional, kenali potensi yang dimiliki Desa Karangrejo."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {potencies.slice(0, 3).map((p) => (
              <motion.button
                key={p.slug}
                variants={staggerItem}
                onClick={() => setNav("potensi")}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={assetPath(p.image)}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-10 text-center">
            <button
              onClick={() => setNav("potensi")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Lihat Semua Potensi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
