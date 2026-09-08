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
    "Balai Desa Karangrejo, Jl. Raya Kawedanan, Dukuh Karangrejo, Desa Karangrejo, Kec. Kawedanan, Kab. Magetan, Jawa Timur 63354",
  phone: "(0271) 000-0000",
  email: "pemdes.karangrejo@magetan.go.id",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  mapEmbed:
    "https://www.google.com/maps?q=Karangrejo,Kawedanan,Magetan&output=embed",
  hours: "Senin – Jumat • 08.00 – 14.00 WIB",
} as const;

export const socialLinks = {
  instagram: "https://instagram.com/desa.karangrejo",
  facebook: "https://facebook.com/desa.karangrejo",
  youtube: "https://youtube.com/@desa-karangrejo",
} as const;

/**
 * Tautan Google Form untuk setiap layanan surat.
 * Ganti placeholder di bawah dengan tautan Google Form yang sebenarnya.
 */
export const letterFormLinks = {
  domisili: "[LINK_GFORM_DOMISILI]",
  usaha: "[LINK_GFORM_USAHA]",
  tidakMampu: "[LINK_GFORM_TIDAK_MAMPU]",
  kehilangan: "[LINK_GFORM_KEHILANGAN]",
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
