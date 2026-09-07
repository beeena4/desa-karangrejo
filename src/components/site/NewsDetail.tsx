"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Tag, User } from "lucide-react";
import { useNavStore } from "@/store/nav";
import { newsArticles, formatDateID } from "@/data/news";

export function NewsDetail() {
  const newsId = useNavStore((s) => s.newsId);
  const closeNews = useNavStore((s) => s.closeNews);
  const article = newsArticles.find((a) => a.id === newsId);

  useEffect(() => {
    if (!article) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNews();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [article, closeNews]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={closeNews}
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
              onClick={closeNews}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-black/50"
              aria-label="Tutup"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[16/9] overflow-hidden sm:rounded-t-3xl">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute left-5 bottom-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                <Tag className="h-3 w-3" />
                {article.category}
              </span>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDateID(article.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {article.author}
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-tight text-foreground">
                {article.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                {article.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
