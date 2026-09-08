"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { umkmList, umkmCategories, type UmkmCategory } from "@/data/umkm";
import { useNavStore } from "@/store/nav";
import { assetPath } from "@/lib/utils";
import {
  Search,
  MapPin,
  X,
  MessageCircle,
  Phone,
  Package,
  User,
  ArrowUpRight,
  Star,
} from "lucide-react";

type Filter = UmkmCategory | "Semua";

export function UmkmView() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [query, setQuery] = useState("");
  const umkmId = useNavStore((s) => s.umkmId);
  const openUmkm = useNavStore((s) => s.openUmkm);
  const closeUmkm = useNavStore((s) => s.closeUmkm);

  const filtered = umkmList.filter((u) => {
    const matchCat = filter === "Semua" || u.category === filter;
    const matchQuery =
      !query ||
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.owner.toLowerCase().includes(query.toLowerCase()) ||
      u.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const selected = umkmList.find((u) => u.id === umkmId);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeUmkm();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, closeUmkm]);

  return (
    <>
      <PageHero
        eyebrow="UMKM Desa"
        title="UMKM Desa Karangrejo"
        description="Mendukung dan mempromosikan produk serta usaha lokal masyarakat Desa Karangrejo."
      />

      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Search + filter */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-4 md:p-5 shadow-sm">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari UMKM atau pemilik..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {umkmCategories.map((cat) => {
                  const active = filter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={
                        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 " +
                        (active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-background border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground")
                      }
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${filter}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((u) => (
                <article
                  key={u.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={assetPath(u.image)}
                      alt={u.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                      {u.category}
                    </span>
                    {u.featured && (
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950 shadow-sm">
                        <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                        UMKM Unggulan
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-foreground">{u.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <User className="h-3.5 w-3.5" />
                      {u.owner}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {u.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        onClick={() => openUmkm(u.id)}
                        className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
                      >
                        Lihat Detail
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                      <a
                        href={`https://wa.me/${u.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
                        aria-label={`Hubungi ${u.name}`}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-sm text-muted-foreground">
              Tidak ada UMKM yang cocok dengan pencarian Anda.
            </div>
          )}

        </div>
      </section>

      {/* Detail dialog */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={closeUmkm}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-2xl max-h-[92svh] overflow-y-auto scrollbar-soft rounded-t-3xl sm:rounded-3xl bg-card shadow-2xl"
            >
              <button
                onClick={closeUmkm}
                className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-black/50"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden sm:rounded-t-3xl">
                <img
                  src={assetPath(selected.image)}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                    {selected.category}
                  </span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                    {selected.name}
                  </h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <InfoRow icon={<User className="h-4 w-4" />} label="Pemilik" value={selected.owner} />
                  <InfoRow icon={<MapPin className="h-4 w-4" />} label="Lokasi" value={selected.location} />
                  <InfoRow
                    icon={<Phone className="h-4 w-4" />}
                    label="WhatsApp"
                    value={`+${selected.whatsapp}`}
                  />
                  <InfoRow
                    icon={<Package className="h-4 w-4" />}
                    label="Produk"
                    value={selected.products.join(", ")}
                  />
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Produk Unggulan
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${selected.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground break-words">{value}</p>
      </div>
    </div>
  );
}
