/**
 * Konfigurasi situs Desa Karangrejo.
 * Semua tautan Google Form untuk layanan surat dikelompokkan di satu tempat
 * agar mudah diganti sewaktu-waktu.
 */

export const siteConfig = {
  name: "Desa Karangrejo",
  tagline: "Maju, Mandiri, dan Berbudaya",
  district: "Kecamatan Kawedanan",
  regency: "Kabupaten Magetan",
  province: "Jawa Timur",
  fullLocation: "Desa Karangrejo • Kawedanan • Magetan",
  description:
    "Website resmi Desa Karangrejo — media informasi dan pelayanan digital untuk masyarakat.",
} as const;

export const villageContact = {
  address:
    "Jl. Raya Bendo, Dukuh Purwosari, Desa Karangrejo, Kec. Kawedanan, Kabupaten Magetan, Jawa Timur 63382",
  whatsapp: "6289504189599",
  whatsappDisplay: "0895-0418-9599",
  mapEmbed:
    "https://www.google.com/maps?q=Desa+Karangrejo,+Kawedanan,+Magetan&output=embed",
  hours: "Senin – Jumat • 08.00 – 15.00 WIB",
} as const;

export const socialLinks = {
  instagram: "https://instagram.com/desa.karangrejo",
  youtube: "https://youtube.com/@desa-karangrejo",
} as const;

/**
 * Tautan Google Form untuk setiap layanan surat.
 * Ganti placeholder di bawah dengan tautan Google Form yang sebenarnya.
 */
export const letterFormLinks = {
  domisili: "https://forms.gle/NLKQDreyRGfuiGDv6",
  usaha: "https://forms.gle/ye6T32rQA8wzEefq8",
  tidakMampu: "https://forms.gle/bLRVA2QU8mg9FwYM6",
  kehilangan: "https://forms.gle/gNx5QbodmES8pFMW6",
} as const;

export type NavKey =
  | "home"
  | "profil"
  | "potensi"
  | "fasilitas"
  | "layanan"
  | "umkm";

export const navItems: { key: NavKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "profil", label: "Profil" },
  { key: "potensi", label: "Potensi" },
  { key: "fasilitas", label: "Fasilitas" },
  { key: "layanan", label: "Layanan Surat" },
  { key: "umkm", label: "UMKM" },
];
