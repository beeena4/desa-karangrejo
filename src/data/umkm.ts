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
    name: "Kerupuk Lempeng",
    owner: "Bapak Toyo",
    category: "Makanan",
    description:
      "Produsen kerupuk lempeng rumahan dengan racikan turun temurun keluarga.",
    image: "images/lempeng.png",
    products: ["Kerupuk lempeng matang","Kerupuk lempeng mentah"],
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
    owner: "Ibu Sriani",
    category: "Minuman",
    description:
      "Produsen susu kedelai yang di olah secara manual dan pasarkan di dalam maupun diluar masyarakat desa Karangrejo.",
    image: "images/susu.png",
    products: ["Susu Kedelai"],
    whatsapp: "62 85607533268",
    location: "Dukuh Purwoseco",
  },
  {
    id: "u5",
    name: "Kripik Pisang",
    owner: "Bapak Juari",
    category: "Makanan",
    description:
      "Produsen kripik Pisang yang dipasarkan di sekitar desa dan diluar daerah desa.",
    image: "images/pisang.png",
    products: ["Kripik Pisang (Manis/Asin),Pangsit Goreng,Onde Onde Ketawa"],
    whatsapp: "62 85732425326",
    location: "Dukuh Purwoseco",
  },
  {
    id: "u6",
    name: "Kerajinan Bambu",
    owner: "Bapak Jarwo",
    category: "Kerajinan",
    description:
      "Produsen kerajinan anyaman bambu untuk menjemur krupuk",
    image: "images/bambu.png",
    products: ["Anyaman Bambu Tempat Penjemur Krupuk"],
    whatsapp: "62 85604008531",
    location: "Dukuh Purwosari",
  },
  {    id: "u7",
    name: "Tape Singkong",
    owner: "Ibu Sunarti",
    category: "Makanan",
    description:
      "Produsen Tape Singkong secara tradisional yang di pasarkan di pasar sekitar.",
    image: "images/tape.png",
    products: ["Tape Singkong"],
    whatsapp: "62 895386029707",
    location: "Dukuh Purwoseco",
  },
  {    id: "u8",
    name: "Rengginang",
    owner: "Ibu Winarti",
    category: "Makanan",
    description:
      "Produsen Rengginang yang di olah secara manual dan di pasarkan di pasar sekitar.",
    image: "images/rengginang.png",
    products: ["Rengginang Original,Rengginang Manis,Rengginang Bawang"],
    whatsapp: "62 81335773678",
    location: "Dukuh Purwoseco",
  },

];
