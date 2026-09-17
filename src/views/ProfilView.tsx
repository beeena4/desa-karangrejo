"use client";

import { motion } from "framer-motion";
import {
  PageHero,
} from "@/components/site/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/VillageStats";
import { CountUp } from "@/components/site/CountUp";
import { assetPath } from "@/lib/utils";
import {
  villageStats,
  villageHistory,
  visiMisi,
  governmentStructure,
  dusunList,
} from "@/data/profile";
import {
  History,
  Target,
  Map,
  Users,
  TreePine,
  Home,
  Flag,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

const iconMap = {
  map: Map,
  users: Users,
  tree: TreePine,
  home: Home,
} as const;

export function ProfilView() {
  return (
    <>
      <PageHero
        eyebrow="Profil Desa"
        title="Profil Desa Karangrejo"
        description="Mengenal lebih dalam sejarah, visi-misi, struktur pemerintahan, dan data wilayah Desa Karangrejo."
      />

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
            {villageStats.map((stat) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap];
              const isDusunStat = stat.label === "Jumlah Dusun";
              return (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  onClick={isDusunStat ? () => document.getElementById("dusun")?.scrollIntoView({ behavior: "smooth" }) : undefined}
                  onKeyDown={
                    isDusunStat
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            document.getElementById("dusun")?.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      : undefined
                  }
                  role={isDusunStat ? "button" : undefined}
                  tabIndex={isDusunStat ? 0 : undefined}
                  aria-label={isDusunStat ? "Lihat daftar dusun Desa Karangrejo" : undefined}
                    className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6 ${
                    isDusunStat ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40" : ""
                  }`}
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <p className="mt-3 whitespace-nowrap text-xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground sm:text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Video Profil Desa */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Video Profil"
            title="Mengenal Desa Karangrejo"
            description="Saksikan gambaran singkat tentang kehidupan, potensi, dan aktivitas masyarakat Desa Karangrejo."
          />
          <Reveal className="mt-10">
            <div className="relative isolate aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:rounded-3xl">
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src="https://drive.google.com/file/d/1zXD9TOzcnzhwwy9mSMBwsO3NlZBZB_R6/preview?autoplay=1&mute=1"
                title="Video Profil Desa Karangrejo"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-forest/90 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm sm:left-5 sm:top-5 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-xs">
                <Play className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
                Video Profil Desa
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sejarah Desa */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <History className="h-3.5 w-3.5" />
              Sejarah Desa
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Asal-usul Karangrejo
            </h2>
            <div className="mt-6 space-y-4 text-justify text-sm leading-relaxed text-muted-foreground">
              {villageHistory.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/15 to-sage-light/40 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
                <img
                  src={assetPath("images/background.png")}
                  alt="Suasana dusun Desa Karangrejo"
                  className="aspect-[4/3] w-full object-cover object-[center_60%]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Arah Pembangunan"
            title="Visi & Misi Desa"
            description="Komitmen Pemerintah Desa Karangrejo dalam membangun desa yang maju, mandiri, dan berbudaya."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5 items-stretch">
            <Reveal className="lg:col-span-2">
              <div className="relative h-full overflow-hidden rounded-3xl bg-forest p-8 md:p-10 text-white">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <Target className="h-10 w-10 text-white/80" />
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white/70">
                  Visi
                </h3>
                <p className="mt-3 text-2xl md:text-3xl font-bold leading-snug text-balance">
                  {visiMisi.visi}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="h-full rounded-3xl border border-border bg-card p-8 md:p-10">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Flag className="h-4 w-4" />
                  Misi
                </h3>
                <ol className="mt-6 space-y-4">
                  {visiMisi.misi.map((m, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-base leading-relaxed text-foreground">
                        {m}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Struktur Pemerintahan */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pemerintahan"
            title="Struktur Pemerintahan Desa"
            description="Perangkat desa yang melayani dan mengayomi masyarakat Desa Karangrejo."
          />
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <img
                src={assetPath("images/foto bersama perangkat desa.png")}
                alt="Foto bersama perangkat Desa Karangrejo"
                className="block h-auto w-full object-contain object-center"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {governmentStructure.map((person, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`group flex overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:block lg:col-span-3 ${
                  i === 8
                    ? "lg:col-start-2"
                    : i === 9
                      ? "lg:col-start-6"
                      : i === 10
                        ? "lg:col-start-10"
                        : ""
                }`}
              >
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden bg-secondary sm:w-full">
                  <img
                    src={assetPath(person.img)}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                    style={{ objectPosition: person.objectPosition ?? "center 15%" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 text-left sm:block sm:p-5 sm:text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-primary sm:text-xs">
                    {person.role}
                  </p>
                  <p className="mt-1.5 text-sm font-bold leading-snug text-foreground sm:text-sm">
                    {person.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Dusun */}
      <section id="dusun" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Wilayah"
            title="Dusun di Desa Karangrejo"
            description="Tiga dusun yang membentuk Desa Karangrejo dengan karakter dan potensi masing-masing."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {dusunList.map((d, i) => (
              <motion.div
                key={d.name}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        RW
                      </p>
                      <p className="text-sm font-bold text-foreground">{d.rw}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        RT
                      </p>
                      <p className="text-sm font-bold text-foreground">{d.rt}</p>
                    </div>
                  </div>
                </div>
                <span className="absolute right-5 top-5 text-5xl font-black text-primary/10">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
