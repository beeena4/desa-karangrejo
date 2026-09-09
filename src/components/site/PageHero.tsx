"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * Hero kecil untuk halaman dalam (bukan home).
 * Memberi ruang atas untuk navbar yang fixed.
 */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#164e35] via-[#278653] to-[#a7c957] pt-28 md:pt-36 pb-12 md:pb-16">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_46%,transparent_100%)]" />
      <div className="absolute -right-24 top-8 h-80 w-1/2 rotate-12 border-y border-white/10 bg-white/5" />
      <div className="absolute -left-32 bottom-[-9rem] h-72 w-2/3 -rotate-12 border-y border-white/10 bg-black/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-light" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-white/80 text-pretty md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-sage-light" />
            {siteConfig.fullLocation}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
