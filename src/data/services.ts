import {
  Home,
  Store,
  HandHeart,
  FileWarning,
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
    slug: "surat-keterangan-usaha",
    name: "Surat Keterangan Usaha",
    description:
      "Surat pengantar untuk mengurus izin usaha atau keperluan permodalan UMKM.",
    icon: Store,
    image: "images/surat-usaha.jpg",
    formUrl: letterFormLinks.usaha,
  },
  {
    slug: "surat-keterangan-domisili",
    name: "Surat Keterangan Domisili",
    description:
      "Surat keterangan tempat tinggal warga di wilayah Desa Karangrejo.",
    icon: Home,
    image: "images/surat-domisili.jpg",
    formUrl: letterFormLinks.domisili,
  },
  {
    slug: "surat-keterangan-tidak-mampu",
    name: "Surat Keterangan Tidak Mampu",
    description:
      "Surat keterangan untuk keperluan bantuan sosial, beasiswa, atau keringanan biaya.",
    icon: HandHeart,
    image: "images/surat-tidakmampu.jpg",
    formUrl: letterFormLinks.tidakMampu,
  },
  {
    slug: "surat-keterangan-kehilangan",
    name: "Surat Keterangan Kehilangan",
    description:
      "Surat keterangan kehilangan dokumen atau barang sebagai persyaratan pengurusan lebih lanjut.",
    icon: FileWarning,
    image: "images/surat-kehilangan.jpg",
    formUrl: letterFormLinks.kehilangan,
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
