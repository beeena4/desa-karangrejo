"use client";

import { Search, Sprout, Landmark, Building2, FileText, Store } from "lucide-react";
import { useNavStore } from "@/store/nav";
import type { NavKey } from "@/data/site";
import { motion } from "framer-motion";

const quickItems: {
  label: string;
  desc: string;
  icon: typeof Sprout;
  nav: NavKey;
}[] = [
  { label: "Profil Desa", desc: "Sejarah & struktur", icon: Landmark, nav: "profil" },
  { label: "Potensi Desa", desc: "Pertanian & jamu", icon: Sprout, nav: "potensi" },
  { label: "Fasilitas", desc: "Sarana desa", icon: Building2, nav: "fasilitas" },
  { label: "Layanan Surat", desc: "Ajukan online", icon: FileText, nav: "layanan" },
  { label: "UMKM Desa", desc: "Produk lokal", icon: Store, nav: "umkm" },
];

export function QuickAccess() {
  const setNav = useNavStore((s) => s.setNav);

  return (
    <section className="relative z-10 -mt-14 md:-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-border bg-card/90 p-4 md:p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] backdrop-blur-xl"
        >
          {/* Search bar */}
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3.5">
            <Search className="h-5 w-5 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Temukan informasi desa..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") setNav("profil");
              }}
            />
            <kbd className="hidden sm:inline-flex h-6 items-center rounded-md border border-border bg-muted px-2 text-[10px] font-medium text-muted-foreground">
              Enter
            </kbd>
          </div>

          {/* Quick items */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {quickItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setNav(item.nav)}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-background px-3.5 py-3 text-left transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {item.desc}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
