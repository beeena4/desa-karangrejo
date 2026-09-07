"use client";

import { create } from "zustand";
import type { NavKey } from "@/data/site";

type NavState = {
  current: NavKey;
  /** id berita yang sedang dibuka pada modal/detail, jika ada */
  newsId: string | null;
  /** id umkm yang sedang dibuka pada detail, jika ada */
  umkmId: string | null;
  setNav: (key: NavKey) => void;
  openNews: (id: string) => void;
  closeNews: () => void;
  openUmkm: (id: string) => void;
  closeUmkm: () => void;
};

export const useNavStore = create<NavState>((set) => ({
  current: "home",
  newsId: null,
  umkmId: null,
  setNav: (key) => {
    set({ current: key });
    // Scroll to top on view change, but defer to allow render
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  openNews: (id) => set({ newsId: id }),
  closeNews: () => set({ newsId: null }),
  openUmkm: (id) => set({ umkmId: id }),
  closeUmkm: () => set({ umkmId: null }),
}));
