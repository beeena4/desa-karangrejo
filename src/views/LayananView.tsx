"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, staggerItem } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { letterServices, openLetterForm } from "@/data/services";
import { villageContact } from "@/data/site";
import { ExternalLink, Info, FileText, MessageCircle, Clock } from "lucide-react";

export function LayananView() {
  return (
    <>
      <PageHero
        eyebrow="Layanan Surat"
        title="Urus Administrasi Desa Lebih Mudah"
        description="Ajukan berbagai kebutuhan surat secara online melalui formulir yang telah disediakan."
      />

      {/* Intro banner */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 md:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Info className="h-6 w-6" />
            </span>
            <p className="text-sm md:text-base leading-relaxed text-foreground">
              Silakan pilih jenis surat yang diperlukan. Anda akan diarahkan ke{" "}
              <span className="font-semibold text-primary">Google Form</span>{" "}
              untuk melakukan pengajuan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {letterServices.map((service) => (
              <motion.article
                key={service.slug}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Document illustration */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 via-sage-light/40 to-background">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-forest/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-forest shadow-sm backdrop-blur-sm">
                    <service.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <button
                    onClick={() => openLetterForm(service.formUrl)}
                    className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                  >
                    <FileText className="h-4 w-4" />
                    Ajukan Surat
                    <ExternalLink className="h-3.5 w-3.5 opacity-80 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </Stagger>

          {/* Help / contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-5 sm:grid-cols-3"
          >
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp Desa"
              value={villageContact.whatsappDisplay}
              href={`https://wa.me/${villageContact.whatsapp}`}
            />
            <ContactCard
              icon={<Clock className="h-5 w-5" />}
              title="Jam Layanan"
              value={villageContact.hours}
            />
            <ContactCard
              icon={<Info className="h-5 w-5" />}
              title="Informasi"
              value={villageContact.phone}
            />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{title}</p>
        <p className="text-sm font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}
