"use client";

import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { SectionHeading } from "./VillageStats";
import { motion } from "framer-motion";
import { newsArticles, formatDateID } from "@/data/news";
import { useNavStore } from "@/store/nav";
import { assetPath } from "@/lib/utils";

export function NewsSection() {
  const openNews = useNavStore((s) => s.openNews);
  const setNav = useNavStore((s) => s.setNav);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Kabar Terbaru"
            title="Informasi & Kabar Desa"
            description="Ikuti perkembangan kegiatan, pembangunan, dan event di Desa Karangrejo."
            align="left"
          />
          <Reveal delay={0.1}>
            <button
              onClick={() => setNav("home")}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              Lihat Semua
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <motion.article
              key={article.id}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <button
                onClick={() => openNews(article.id)}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <img
                  src={assetPath(article.image)}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                  <Tag className="h-3 w-3" />
                  {article.category}
                </span>
              </button>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDateID(article.date)}
                </div>
                <h3 className="mt-2 text-lg font-bold leading-snug text-foreground line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <button
                  onClick={() => openNews(article.id)}
                  className="group/btn mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Baca Selengkapnya
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
