"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { facilities, facilityCategories, type FacilityCategory } from "@/data/facilities";
import { assetPath } from "@/lib/utils";
import { MapPin, Search } from "lucide-react";

type Filter = FacilityCategory | "Semua";

export function FasilitasView() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [query, setQuery] = useState("");

  const filtered = facilities.filter((f) => {
    const matchCat = filter === "Semua" || f.category === filter;
    const matchQuery =
      !query ||
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <>
      <PageHero
        eyebrow="Fasilitas Desa"
        title="Fasilitas Desa Karangrejo"
        description="Beragam fasilitas umum dan sosial yang menunjang kehidupan masyarakat Desa Karangrejo."
      />

      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Search + filters */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-4 md:p-5 shadow-sm">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari fasilitas..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {facilityCategories.map((cat) => {
                  const active = filter === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setFilter(cat.key)}
                      className={
                        "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 " +
                        (active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-background border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground")
                      }
                    >
                      <cat.icon className="h-3.5 w-3.5" />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Results */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${filter}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((f) => (
                <a
                  key={f.id}
                  href={f.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${f.name}, ${f.location}, Desa Karangrejo, Kawedanan, Magetan`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka lokasi ${f.name} di Google Maps`}
                  className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={assetPath(f.image)}
                      alt={f.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                      {f.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground">{f.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {f.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {f.location}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-sm text-muted-foreground">
              Tidak ada fasilitas yang cocok dengan pencarian Anda.
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
