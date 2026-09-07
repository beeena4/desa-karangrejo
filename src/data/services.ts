import {
  Home,
  Store,
  HandHeart,
  ClipboardList,
  Baby,
  Flower2,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { letterFormLinks } from "./site";

export type LetterService = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  /** Tautan Google Form; ganti placeholder di src/data/site.ts */
  formUrl: string;
};

/**
 * Daftar layanan surat desa.
 * Setiap surat hanya menampilkan kartu visual yang mengarah ke Google Form.
 * Tidak ada sistem pengajuan internal / backend surat.
 */
export const letterServices: LetterService[] = [
  {
    slug: "surat-keterangan-domisili",
    name: "Surat Keterangan Domisili",
    description:
      "Surat keterangan tempat tinggal warga di wilayah Desa Karangrejo.",
    icon: Home,
    image: "/images/facility-balai.png",
    formUrl: letterFormLinks.domisili,
  },
  {
    slug: "surat-keterangan-usaha",
    name: "Surat Keterangan Usaha",
    description:
      "Surat pengantar untuk mengurus izin usaha atau keperluan permodalan UMKM.",
    icon: Store,
    image: "/images/potensi-umkm.png",
    formUrl: letterFormLinks.usaha,
  },
  {
    slug: "surat-keterangan-tidak-mampu",
    name: "Surat Keterangan Tidak Mampu",
    description:
      "Surat keterangan untuk keperluan bantuan sosial, beasiswa, atau keringanan biaya.",
    icon: HandHeart,
    image: "/images/facility-puskesmas.png",
    formUrl: letterFormLinks.tidakMampu,
  },
  {
    slug: "surat-pengantar",
    name: "Surat Pengantar",
    description:
      "Surat pengantar RT/RW untuk berbagai keperluan administrasi warga.",
    icon: ClipboardList,
    image: "/images/facility-balai.png",
    formUrl: letterFormLinks.pengantar,
  },
  {
    slug: "surat-keterangan-kelahiran",
    name: "Surat Keterangan Kelahiran",
    description:
      "Surat keterangan kelahiran sebagai dokumen pendukung pengurusan Akta Kelahiran.",
    icon: Baby,
    image: "/images/news-2.png",
    formUrl: letterFormLinks.kelahiran,
  },
  {
    slug: "surat-keterangan-kematian",
    name: "Surat Keterangan Kematian",
    description:
      "Surat keterangan kematian sebagai dokumen pendukung pengurusan Akta Kematian.",
    icon: Flower2,
    image: "/images/facility-masjid.png",
    formUrl: letterFormLinks.kematian,
  },
  {
    slug: "surat-keterangan-lainnya",
    name: "Surat Keterangan Lainnya",
    description:
      "Surat keterangan lain sesuai kebutuhan administrasi warga Desa Karangrejo.",
    icon: FileText,
    image: "/images/facility-balai.png",
    formUrl: letterFormLinks.lainnya,
  },
];

/**
 * Buka tautan Google Form di tab baru.
 * Jika tautan masih berupa placeholder, arahkan ke panduan.
 */
export function openLetterForm(formUrl: string) {
  const isPlaceholder = formUrl.startsWith("[LINK_GFORM_");
  const target = isPlaceholder
    ? "https://docs.google.com/forms/about/"
    : formUrl;
  window.open(target, "_blank", "noopener,noreferrer");
}
