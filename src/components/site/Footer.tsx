"use client";

import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import {
  siteConfig,
  villageContact,
  socialLinks,
  navItems,
  type NavKey,
} from "@/data/site";
import { useNavStore } from "@/store/nav";

export function Footer() {
  const setNav = useNavStore((s) => s.setNav);

  const go = (key: NavKey) => setNav(key);

  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Leaf className="h-6 w-6" />
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold">{siteConfig.name}</p>
                <p className="text-xs text-background/70">
                  {siteConfig.district}, {siteConfig.regency}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/70">
              Website resmi Desa Karangrejo sebagai media informasi, pelayanan
              publik, dan promosi potensi lokal masyarakat.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={socialLinks.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={socialLinks.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={socialLinks.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <FooterTitle>Navigasi</FooterTitle>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => go(item.key)}
                    className="group inline-flex items-center gap-1.5 text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterTitle>Kontak</FooterTitle>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>{villageContact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>{villageContact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span className="break-all">{villageContact.email}</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>{villageContact.whatsappDisplay}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>{villageContact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Map / hours */}
          <div>
            <FooterTitle>Lokasi Desa</FooterTitle>
            <div className="overflow-hidden rounded-2xl border border-background/10">
              <iframe
                title="Peta Desa Karangrejo"
                src={villageContact.mapEmbed}
                className="h-44 w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=Karangrejo,Kawedanan,Magetan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sage hover:text-background transition-colors"
            >
              Lihat di Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-background/10 pt-6">
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} Desa Karangrejo. All Rights Reserved.
          </p>
          <p className="text-xs text-background/60">
            Kecamatan Kawedanan, Kabupaten Magetan, Jawa Timur
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-background">
      {children}
    </h3>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/10 text-background/80 transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
