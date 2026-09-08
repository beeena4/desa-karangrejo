"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ArrowRight } from "lucide-react";
import { navItems, siteConfig, type NavKey } from "@/data/site";
import { useNavStore } from "@/store/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = useNavStore((s) => s.current);
  const setNav = useNavStore((s) => s.setNav);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const go = (key: NavKey) => {
    setNav(key);
    setMobileOpen(false);
  };

  const isOverlay = !scrolled && current === "home";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isOverlay
          ? "bg-transparent"
          : "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)]"
      )}
    >
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 md:h-20 lg:px-8">
        {/* Logo + name */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-3"
          aria-label="Beranda Desa Karangrejo"
        >
          <span
            className={cn(
              "flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-105",
              isOverlay
                ? "bg-white/15 backdrop-blur-md ring-1 ring-white/30"
                : "bg-primary text-primary-foreground"
            )}
          >
            <Leaf className="h-5 w-5 md:h-6 md:w-6" />
          </span>
          <span className="flex flex-col leading-tight text-left">
            <span
              className={cn(
                "text-sm md:text-base font-bold tracking-tight transition-colors",
                isOverlay ? "text-white" : "text-foreground"
              )}
            >
              {siteConfig.name}
            </span>
            <span
              className={cn(
                "text-[10px] md:text-xs font-medium transition-colors",
                isOverlay ? "text-white/80" : "text-muted-foreground"
              )}
            >
              Kawedanan • Magetan
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="col-start-2 col-span-2 hidden items-center justify-self-end gap-1 lg:flex">
          {navItems.map((item) => {
            const active = current === item.key;
            return (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isOverlay
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                      isOverlay ? "bg-white" : "bg-primary"
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <div className="col-start-3 flex items-center justify-end gap-2">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              isOverlay
                ? "text-white hover:bg-white/15"
                : "text-foreground hover:bg-muted"
            )}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => {
                const active = current === item.key;
                return (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => go(item.key)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        active ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                      )}
                    />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
