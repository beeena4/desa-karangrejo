"use client";

import { Map, Users, TreePine, Home } from "lucide-react";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { CountUp } from "./CountUp";
import { motion } from "framer-motion";
import { villageStats } from "@/data/profile";

const iconMap = {
  map: Map,
  users: Users,
  tree: TreePine,
  home: Home,
} as const;

export function VillageStats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {villageStats.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/**
 * Heading reusable untuk section.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal>
      <div
        className={
          align === "center"
            ? "mx-auto max-w-2xl text-center"
            : "max-w-2xl text-left"
        }
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        )}
        <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
