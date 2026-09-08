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
    image: "images/facility-sekolah.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f2",
    name: "Polsek Kawedanan",
    category: "Pemerintahan",
    description: "Kepolisian sektor yang melayani keamanan dan ketertiban masyarakat.",
    image: "images/facility-balai.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f3",
    name: "SMK (STM) PSM 1 Kawedanan",
    category: "Pendidikan",
    description: "Sekolah menengah kejuruan di Kecamatan Kawedanan.",
    image: "images/facility-sekolah.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f4",
    name: "Bank UMKM Jawa Timur Kantor Kas Kawedanan",
    category: "Fasilitas Umum",
    description: "Kantor kas Bank UMKM Jawa Timur di Kecamatan Kawedanan.",
    image: "images/about-village.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f5",
    name: "Ponpes MHA",
    category: "Keagamaan",
    description: "Pondok pesantren dan pusat pendidikan keislaman di Kawedanan.",
    image: "images/facility-masjid.png",
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
    image: "images/facility-masjid.png",
    location: "Desa Karangrejo, Kawedanan",
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
    name: "SDN Karangrejo 1",
    category: "Pendidikan",
    description: "Sekolah dasar negeri bagi anak-anak Desa Karangrejo.",
    image: "images/facility-sekolah.png",
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
    image: "images/facility-puskesmas.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f16",
    name: "SLB PGRI Kawedanan",
    category: "Pendidikan",
    description: "Sekolah luar biasa bagi peserta didik berkebutuhan khusus.",
    image: "images/facility-sekolah.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f17",
    name: "KUA Kecamatan Kawedanan",
    category: "Pemerintahan",
    description: "Kantor layanan urusan agama Islam Kecamatan Kawedanan.",
    image: "images/facility-balai.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f18",
    name: "Kantor Pembibitan Tebu",
    category: "Fasilitas Umum",
    description: "Fasilitas pembibitan tebu yang mendukung pertanian di Kawedanan.",
    image: "images/about-village.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f19",
    name: "UPTD Pendidikan Kecamatan Kawedanan",
    category: "Pemerintahan",
    description: "Unit pelaksana teknis yang mendukung layanan pendidikan di Kawedanan.",
    image: "images/facility-balai.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f20",
    name: "MTsN 4 Magetan",
    category: "Pendidikan",
    description: "Madrasah tsanawiyah negeri berbasis keislaman di Kawedanan.",
    image: "images/facility-sekolah.png",
    location: "Kawedanan, Magetan",
  },
  {
    id: "f21",
    name: "Punden Krapyak",
    category: "Fasilitas Umum",
    description: "Situs budaya dan tempat bersejarah bagi masyarakat setempat.",
    image: "images/about-village.png",
    location: "Krapyak, Kawedanan, Magetan",
  },
  {
    id: "f22",
    name: "Lapangan Desa Karangrejo",
    category: "Olahraga",
    description: "Lapangan desa untuk kegiatan olahraga dan aktivitas masyarakat Karangrejo.",
    image: "images/facility-lapangan.png",
    location: "Desa Karangrejo, Kawedanan",
  },
  {
    id: "f23",
    name: "Lapangan Volly Ds. Karangrejo",
    category: "Olahraga",
    description: "Lapangan voli untuk latihan dan kegiatan olahraga masyarakat Desa Karangrejo.",
    image: "images/facility-lapangan.png",
    location: "Desa Karangrejo, Kawedanan",
  },
];
