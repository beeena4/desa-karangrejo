"use client";

import { Users, HeartHandshake, Lightbulb, Globe2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger } from "@/components/site/Reveal";
import { assetPath } from "@/lib/utils";

const contributions = [
  {
    icon: Globe2,
    title: "Digitalisasi Desa",
    description:
      "Membangun media informasi digital agar profil, layanan, dan kegiatan desa lebih mudah diakses.",
  },
  {
    icon: Lightbulb,
    title: "Informasi Potensi Lokal",
    description:
      "Mengenalkan pertanian, jamu tradisional, UMKM, budaya, dan potensi unggulan Desa Karangrejo.",
  },
  {
    icon: HeartHandshake,
    title: "Pengabdian Masyarakat",
    description:
      "Mendukung kebutuhan informasi masyarakat melalui kerja sama dan semangat pelayanan yang berkelanjutan.",
  },
];

export function TentangKamiView() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Bersama Membangun Desa"
        description="Mengenal tim di balik pengembangan website Desa Karangrejo dan kontribusinya untuk masyarakat."
      />

      <section className="px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Users className="h-3.5 w-3.5" />
              Tim Pengembang
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Tim KKN-T Desa Karangrejo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Website ini dikembangkan oleh Tim KKN-T Desa Karangrejo sebagai
              bentuk pengabdian, kolaborasi, dan dukungan terhadap kemajuan
              digital desa.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Kami berkomitmen membantu menghadirkan informasi yang jelas,
              bermanfaat, dan mudah dijangkau oleh masyarakat maupun pengunjung
              Desa Karangrejo.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <article className="ml-auto max-w-xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
                <img
                  src={assetPath("images/kelompokkkn.jpeg")}
                  alt="Tim KKN-T Desa Karangrejo"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-semibold text-primary">Tim KKN-T Desa Karangrejo</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Bersama mendukung digitalisasi, informasi, dan pengembangan potensi desa.
                  </p>
                </div>
              </article>
            </Reveal>

          </div>
          </div>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {contributions.map((contribution) => {
              const Icon = contribution.icon;
              return (
                <Reveal key={contribution.title}>
                  <article className="h-full rounded-3xl border border-border bg-card p-5 transition-shadow hover:shadow-lg md:p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-foreground">
                      {contribution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {contribution.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
