"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, MapPin, Leaf } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useNavStore } from "@/store/nav";
import { assetPath } from "@/lib/utils";

export function Hero() {
  const setNav = useNavStore((s) => s.setNav);

  return (
    <section className="relative isolate -mt-16 md:-mt-20 flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetPath("images/hero.png")}
          alt="Pemandangan Desa Karangrejo"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/55 to-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-forest/20" />
      </div>

      {/* Floating decorative leaves */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <Leaf
          className="absolute left-[8%] top-[28%] h-8 w-8 text-white/25 animate-float-soft"
          strokeWidth={1.5}
        />
        <Leaf
          className="absolute right-[12%] top-[22%] h-6 w-6 text-white/20 animate-float-soft-delayed"
          strokeWidth={1.5}
        />
        <Leaf
          className="absolute right-[22%] bottom-[24%] h-10 w-10 text-white/15 animate-float-soft"
          strokeWidth={1.5}
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <MapPin className="h-3.5 w-3.5 text-white" />
            <span className="text-xs font-medium text-white/90">
              {siteConfig.fullLocation}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance"
          >
            Selamat Datang di{" "}
            <span className="block bg-gradient-to-r from-white via-sage to-white bg-clip-text text-transparent">
              Desa Karangrejo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/90 text-pretty"
          >
            Kenali desa kami, temukan potensi lokal, dan rasakan semangat
            masyarakat Karangrejo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => setNav("potensi")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-forest shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Jelajahi Desa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setNav("layanan")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" />
              Layanan Desa
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
