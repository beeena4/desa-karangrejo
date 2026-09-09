import {
  GraduationCap,
  HeartPulse,
  Moon,
  Building2,
  Volleyball,
  TreePine,
  type LucideIcon,
} from "lucide-react";

export type FacilityCategory =
  | "Pendidikan"
  | "Kesehatan"
  | "Keagamaan"
  | "Pemerintahan"
  | "Olahraga"
  | "Fasilitas Umum";

export type Facility = {
  id: string;
  name: string;
  category: FacilityCategory;
  description: string;
  image: string;
  location: string;
  mapsUrl?: string;
};

export const facilityCategories: {
  key: FacilityCategory | "Semua";
  label: string;
  icon: LucideIcon;
}[] = [
  { key: "Semua", label: "Semua", icon: Building2 },
  { key: "Pendidikan", label: "Pendidikan", icon: GraduationCap },
  { key: "Kesehatan", label: "Kesehatan", icon: HeartPulse },
  { key: "Keagamaan", label: "Keagamaan", icon: Moon },
  { key: "Pemerintahan", label: "Pemerintahan", icon: Building2 },
  { key: "Olahraga", label: "Olahraga", icon: Volleyball },
  { key: "Fasilitas Umum", label: "Umum", icon: TreePine },
];

export const facilities: Facility[] = [
  {
    id: "f1",
    name: "SMPN 1 Kawedanan",
    category: "Pendidikan",
    description: "Sekolah menengah pertama negeri di Kecamatan Kawedanan.",
    image: "images/smpn 1 kawedanan.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f2",
    name: "Polsek Kawedanan",
    category: "Pemerintahan",
    description: "Kepolisian sektor yang melayani keamanan dan ketertiban masyarakat.",
    image: "images/polsek.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f3",
    name: "SMK (STM) PSM 1 Kawedanan",
    category: "Pendidikan",
    description: "Sekolah menengah kejuruan di Kecamatan Kawedanan.",
    image: "images/smk psm.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f4",
    name: "Bank UMKM Jawa Timur Kantor Kas Kawedanan",
    category: "Fasilitas Umum",
    description: "Kantor kas Bank UMKM Jawa Timur di Kecamatan Kawedanan.",
    image: "images/kantor kas kawedanan.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f5",
    name: "Ponpes MHA",
    category: "Keagamaan",
    description: "Pondok pesantren dan pusat pendidikan keislaman di Kawedanan.",
    image: "images/ponpes mha.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f6",
    name: "TPA Al-Hidayah",
    category: "Keagamaan",
    description: "Taman pendidikan Al-Qur'an bagi anak-anak di Desa Karangrejo.",
    image: "images/facility-masjid.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f7",
    name: "Masjid Al-Huda",
    category: "Keagamaan",
    description: "Tempat ibadah dan kegiatan keagamaan masyarakat Desa Karangrejo.",
    image: "images/masjid al-huda.png",
    location: "Desa Karangrejo, Kawedanan",
    mapsUrl: "https://maps.app.goo.gl/QLMMe6zTMM7Cck9y8",
  },
  {
    id: "f8",
    name: "Masjid Nurul Ulum",
    category: "Keagamaan",
    description: "Tempat ibadah dan pengajian masyarakat Desa Karangrejo.",
    image: "images/facility-masjid.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f9",
    name: "Masjid Baitulrohim",
    category: "Keagamaan",
    description: "Tempat ibadah dan kegiatan sosial keagamaan di Desa Karangrejo.",
    image: "images/facility-masjid.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f10",
    name: "SDN Karangrejo",
    category: "Pendidikan",
    description: "Sekolah dasar negeri bagi anak-anak Desa Karangrejo.",
    image: "images/sdn karangrejo.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f11",
    name: "TK Darma Wanita",
    category: "Pendidikan",
    description: "Taman kanak-kanak yang mendukung pendidikan anak usia dini.",
    image: "images/facility-sekolah.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f12",
    name: "RA Muslimat Karangrejo",
    category: "Pendidikan",
    description: "Raudhatul Athfal berbasis keislaman di Desa Karangrejo.",
    image: "images/facility-sekolah.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f13",
    name: "Masjid Al Ihsan",
    category: "Keagamaan",
    description: "Tempat ibadah dan kegiatan keagamaan masyarakat Karangrejo.",
    image: "images/facility-masjid.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f14",
    name: "Madrasah Ibtidaiyah Plus Nurul Ulum",
    category: "Pendidikan",
    description: "Madrasah ibtidaiyah dengan pendidikan umum dan keagamaan.",
    image: "images/facility-sekolah.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f15",
    name: "Puskesmas Kawedanan",
    category: "Kesehatan",
    description: "Pusat layanan kesehatan tingkat pertama di Kecamatan Kawedanan.",
    image: "images/pukesmas.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f16",
    name: "SLB PGRI Kawedanan",
    category: "Pendidikan",
    description: "Sekolah luar biasa bagi peserta didik berkebutuhan khusus.",
    image: "images/slb pgri kawedanan.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f17",
    name: "KUA Kecamatan Kawedanan",
    category: "Pemerintahan",
    description: "Kantor layanan urusan agama Islam Kecamatan Kawedanan.",
    image: "images/kua.jpeg",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f19",
    name: "UPTD Pendidikan Kecamatan Kawedanan",
    category: "Pemerintahan",
    description: "Unit pelaksana teknis yang mendukung layanan pendidikan di Kawedanan.",
    image: "images/uptd pendidikan.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f20",
    name: "MTsN 4 Magetan",
    category: "Pendidikan",
    description: "Madrasah tsanawiyah negeri berbasis keislaman di Kawedanan.",
    image: "images/mtsn 4 magetan.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f21",
    name: "Punden Krapyak",
    category: "Fasilitas Umum",
    description: "Situs budaya dan tempat bersejarah bagi masyarakat setempat.",
    image: "images/punden.jpeg",
    location: "Krapyak, Kawedanan, Magetan",
  },
  {
    id: "f22",
    name: "Lapangan Desa Karangrejo",
    category: "Olahraga",
    description: "Lapangan desa untuk kegiatan olahraga dan aktivitas masyarakat Karangrejo.",
    image: "images/lapangan karangrejo.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f24",
    name: "Koramil Kawedanan",
    category: "Pemerintahan",
    description: "Komando rayon militer yang mendukung keamanan wilayah Kecamatan Kawedanan.",
    image: "images/koramil.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f25",
    name: "UPTD Pengairan Bringin",
    category: "Pemerintahan",
    description: "Unit pelaksana teknis yang mendukung pengelolaan dan layanan pengairan di Bringin.",
    image: "images/uptd pengairan.png",
    location: "Bringin, Magetan",
  },
];
