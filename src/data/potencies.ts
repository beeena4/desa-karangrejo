import {
  Sprout,
  FlaskConical,
  Store,
  Handshake,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type Potency = {
  slug: string;
  category: string;
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
  highlight?: boolean;
  details: string[];
};

export const potencies: Potency[] = [
  {
    slug: "pertanian",
    category: "Sektor Pertanian",
    title: "Pertanian",
    icon: Sprout,
    image: "images/potensi-pertanian.png",
    description:
      "Desa Karangrejo dikenal sebagai desa agraris dengan hamparan sawah subur yang menjadi tulang punggung ekonomi masyarakat.",
    details: [
      "Lahan sawah irigasi teknis dan tadah hujan",
      "Komoditas utama: padi, jagung, dan kedelai",
      "Panen raya dua kali dalam setahun",
      "Kelompok tani aktif di setiap dusun",
    ],
  },
  {
    slug: "jamu-tradisional",
    category: "Warisan Lokal",
    title: "Jamu Tradisional",
    icon: FlaskConical,
    image: "images/potensi-jamu.png",
    highlight: true,
    description:
      "Karangrejo dikenal sebagai desa penghasil jamu tradisional. Racikan herbal warisan leluhur masih lestari dan menjadi kebanggaan warga.",
    details: [
      "Pengolahan kunyit, temulawak, jahe, dan kencur",
      "Dipasarkan dalam bentuk cair dan serbuk",
      "Dikelola oleh kelompok perempuan desa",
      "Bahan baku ditanam di pekarangan warga",
    ],
  },
  {
    slug: "perdagangan",
    category: "Perekonomian",
    title: "Perdagangan",
    icon: Store,
    image: "images/potensi-perdagangan.png",
    description:
      "Aktivitas perdagangan berkembang di pasar desa dan lapak warga, menjadi simpul distribusi kebutuhan harian masyarakat.",
    details: [
      "Pasar desa aktif setiap hari",
      "Lapak sayur, sembako, dan kuliner lokal",
      "Sentra pedagang kecil dan menengah",
      "Dukungan koperasi desa",
    ],
  },
  {
    slug: "umkm",
    category: "Pemberdayaan Ekonomi",
    title: "UMKM Desa",
    icon: Handshake,
    image: "images/potensi-umkm.png",
    description:
      "Usaha Mikro, Kecil, dan Menengah tumbuh subur di Karangrejo, dari kuliner hingga kerajinan, sebagai motor ekonomi rakyat.",
    details: [
      "Kuliner tradisional dan caman lokal",
      "Kerajinan dari bambu dan anyaman",
      "Produk pertanian olahan",
      "Pendampingan BUMDes dan koperasi",
    ],
  },
  {
    slug: "budaya-tradisi",
    category: "Budaya & Tradisi",
    title: "Budaya dan Tradisi",
    icon: Landmark,
    image: "images/potensi-budaya.png",
    description:
      "Tradisi spiritual dan budaya tetap dijaga sebagai bentuk syukur dan mempererat tali persaudaraan antarwarga.",
    details: [
      "Ruwatan dan Yasinan rutin di tingkat RT",
      "Khatmil Quran dan pengajian bulanan",
      "Malam Tirakatan menjelang hari besar",
      "Gotong royong dan sambutan desa",
    ],
  },
];

export const culturalEvents = [
  {
    name: "Ruwahan",
    description:
      "Tradisi ruwat rawat desa dan lingkungan menjelang bulan Ramadhan, warga membersihkan makam dan lingkungan bersama.",
  },
  {
    name: "Yasinan",
    description:
      "Pengajian rutin membaca Surat Yasin di setiap RT sebagai bentuk syukur dan doa bersama.",
  },
  {
    name: "Khatmil Quran",
    description:
      "Khataman Al-Qur'an bersama warga yang digelar secara berkala di masjid dan mushola desa.",
  },
  {
    name: "Malam Tirakatan",
    description:
      "Malam tirakatan dan doa bersama menjelang Hari Raya Idul Fitri dan Idul Adha.",
  },
];
