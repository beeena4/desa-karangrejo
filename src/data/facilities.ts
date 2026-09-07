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
    name: "SDN Karangrejo 1",
    category: "Pendidikan",
    description:
      "Sekolah dasar negeri yang melayani pendidikan tingkat dasar bagi anak-anak Desa Karangrejo.",
    image: "/images/facility-sekolah.png",
    location: "Dukuh Karangrejo",
  },
  {
    id: "f2",
    name: "RA / TK Pertiwi Karangrejo",
    category: "Pendidikan",
    description:
      "Lembaga pendidikan anak usia dini yang mendampingi tumbuh kembang anak desa.",
    image: "/images/facility-sekolah.png",
    location: "Dukuh Purwosari",
  },
  {
    id: "f3",
    name: "Posyandu Balita & Lansia",
    category: "Kesehatan",
    description:
      "Layanan kesehatan masyarakat rutin untuk balita, ibu hamil, dan lansia di setiap dusun.",
    image: "/images/facility-puskesmas.png",
    location: "Lintas Dusun",
  },
  {
    id: "f4",
    name: "Puskesmas Pembantu Kawedanan",
    category: "Kesehatan",
    description:
      "Fasilitas rujukan kesehatan tingkat dasar terdekat yang melayani masyarakat Karangrejo.",
    image: "/images/facility-puskesmas.png",
    location: "Pusat Kecamatan Kawedanan",
  },
  {
    id: "f5",
    name: "Masjid Jami' Karangrejo",
    category: "Keagamaan",
    description:
      "Pusat kegiatan keagamaan dan ibadah utama warga Desa Karangrejo.",
    image: "/images/facility-masjid.png",
    location: "Dukuh Karangrejo",
  },
  {
    id: "f6",
    name: "Mushola Al-Hidayah",
    category: "Keagamaan",
    description:
      "Tempat ibadah harian dan kegiatan pengajian warga di Dukuh Purwosari.",
    image: "/images/facility-masjid.png",
    location: "Dukuh Purwosari",
  },
  {
    id: "f7",
    name: "Balai Desa Karangrejo",
    category: "Pemerintahan",
    description:
      "Kantor pusat pemerintahan desa tempat pelayanan administrasi dan kegiatan musyawarah warga.",
    image: "/images/facility-balai.png",
    location: "Dukuh Karangrejo",
  },
  {
    id: "f8",
    name: "Aula Serbaguna Desa",
    category: "Pemerintahan",
    description:
      "Ruang pertemuan dan kegiatan serbaguna untuk acara desa, pelatihan, dan musyawarah.",
    image: "/images/facility-balai.png",
    location: "Samping Balai Desa",
  },
  {
    id: "f9",
    name: "Lapangan Voli Desa",
    category: "Olahraga",
    description:
      "Lapangan voli yang menjadi tempat latihan dan turnamen antar-dusun.",
    image: "/images/facility-lapangan.png",
    location: "Dukuh Purwoseco",
  },
  {
    id: "f10",
    name: "Lapangan Sepak Bola",
    category: "Olahraga",
    description:
      "Lapangan terbuka untuk sepak bola dan kegiatan olahraga masyarakat.",
    image: "/images/facility-lapangan.png",
    location: "Dukuh Karangrejo",
  },
  {
    id: "f11",
    name: "Jalan Desa & Penerangan",
    category: "Fasilitas Umum",
    description:
      "Jaringan jalan desa dengan penerangan jalan umum untuk aksesibilitas warga.",
    image: "/images/about-village.png",
    location: "Lintas Dukuh",
  },
  {
    id: "f12",
    name: "Sumur & Sarana Air Bersih",
    category: "Fasilitas Umum",
    description:
      "Sarana air bersih yang dikelola secara komunal untuk memenuhi kebutuhan harian warga.",
    image: "/images/about-village.png",
    location: "Dukuh Purwosari & Purwoseco",
  },
];
