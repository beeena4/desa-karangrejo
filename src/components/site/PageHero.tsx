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
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-16">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/8 via-primary/4 to-background" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -top-10 -left-24 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          )}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {siteConfig.fullLocation}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
