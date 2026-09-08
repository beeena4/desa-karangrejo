export type UmkmCategory =
  | "Makanan"
  | "Minuman"
  | "Jamu"
  | "Kerajinan"
  | "Pertanian"
  | "Jasa"
  | "Lainnya";

export type Umkm = {
  id: string;
  name: string;
  owner: string;
  category: UmkmCategory;
  description: string;
  image: string;
  products: string[];
  whatsapp: string;
  location: string;
  featured?: boolean;
};

export const umkmCategories: (UmkmCategory | "Semua")[] = [
  "Semua",
  "Makanan",
  "Minuman",
  "Kerajinan",
];

export const umkmList: Umkm[] = [
  {
    id: "u1",
    name: "Jamu Cair",
    owner: "Bapak Jayus",
    category: "Minuman",
    description:
      "Produsen jamu tradisional harian yang dipasarkan di pasar desa.",
    image: "images/njamu.png",
    products: ["Beras Kencur", "Kunir Asem", "Pahitan", "Jamu Suruh"],
    whatsapp: "62 81234567890",
    location: "Dukuh Karangrejo",
    featured: true,
  },
  {
    id: "u2",
    name: "Krupuk Lempeng",
    owner: "Bapak Toyo",
    category: "Makanan",
    description:
      "Produsen krupuk lempeng rumahan dengan racikan turun temurun keluarga.",
    image: "images/lempeng.png",
    products: ["Krupuk lempeng matang","Krupuk lempeng mentah"],
    whatsapp: "62 81234567891",
    location: "Dukuh Purwosari",
  },
  {
    id: "u3",
    name: "Telur Asin",
    owner: "Bapak Kholiq",
    category: "Makanan",
    description:
      "Pembuat telur asin rumahan yang di buat dengan metode yang masih tradisional.",
    image: "images/asin.png",
    products: ["Telur asin"],
    whatsapp: "62 81234567892",
    location: "Dukuh Karangrejo",
  },
  {
    id: "u4",
    name: "Susu Kedelai",
    owner: "Kelompok Tani Makmur",
    category: "Minuman",
    description:
      "Produsen susu kedelai yang di pasarkan di dalam maupun diluar masyarakat desa Karangrejo.",
    image: "images/susu.png",
    products: ["Susu Kedelai"],
    whatsapp: "62 81234567893",
    location: "Dukuh Purwoseco",
  },
  {
    id: "u5",
    name: "Kripik Pisang",
    owner: "Ibu Endang",
    category: "Makanan",
    description:
      "Pembuat kripik Pisang yang dipasarkan di sekitar desa dan diluar daerah desa.",
    image: "images/pisang.png",
    products: ["Kripik Pisang"],
    whatsapp: "62 81234567894",
    location: "Dukuh Purwoseco",
  },
  {
    id: "u6",
    name: "Kerajinan Bambu",
    owner: "Bapak Parmin",
    category: "Kerajinan",
    description:
      "Produsen kerajinan anyaman bambu.",
    image: "images/bambu.png",
    products: ["Anyaman Bambu"],
    whatsapp: "62 81234567895",
    location: "Dukuh Purwoseco",
  },
];
