"use client";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { NewsDetail } from "@/components/site/NewsDetail";
import { HomeView } from "@/views/HomeView";
import { ProfilView } from "@/views/ProfilView";
import { PotensiView } from "@/views/PotensiView";
import { FasilitasView } from "@/views/FasilitasView";
import { LayananView } from "@/views/LayananView";
import { UmkmView } from "@/views/UmkmView";
import { useNavStore } from "@/store/nav";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const current = useNavStore((s) => s.current);

  const renderView = () => {
    switch (current) {
      case "profil":
        return <ProfilView />;
      case "potensi":
        return <PotensiView />;
      case "fasilitas":
        return <FasilitasView />;
      case "layanan":
        return <LayananView />;
      case "umkm":
        return <UmkmView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <NewsDetail />
    </div>
  );
}
