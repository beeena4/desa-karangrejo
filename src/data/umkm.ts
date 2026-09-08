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
};

export const umkmCategories: (UmkmCategory | "Semua")[] = [
  "Semua",
  "Makanan",
  "Minuman",
  "Jamu",
  "Kerajinan",
  "Pertanian",
  "Jasa",
  "Lainnya",
];

export const umkmList: Umkm[] = [
  {
    id: "u1",
    name: "Kue Tradisional Bu Waras",
    owner: "Ibu Waras",
    category: "Makanan",
    description:
      "Produsen kue tradisional harian seperti klepon, onde-onde, dan kue lapis yang dipasarkan di pasar desa.",
    image: "images/umkm-kue.png",
    products: ["Klepon", "Onde-onde", "Kue Lapis", "Gemblong"],
    whatsapp: "6281234567890",
    location: "Dukuh Karangrejo",
  },
  {
    id: "u2",
    name: "Jamu Berkah Kartika",
    owner: "Ibu Kartika",
    category: "Jamu",
    description:
      "Pengolah jamu tradisional kunyit, temulawak, dan beras kencur dengan racikan warisan keluarga.",
    image: "images/umkm-jamu.png",
    products: ["Jamu Kunyit", "Jamu Temulawak", "Beras Kencur", "Pahitan"],
    whatsapp: "6281234567891",
    location: "Dukuh Purwosari",
  },
  {
    id: "u3",
    name: "Kerajinan Bambu Sumber Rejeki",
    owner: "Bapak Suhar",
    category: "Kerajinan",
    description:
      "Pengrajin bambu yang menghasilkan anyaman tikar, tampah, dan keranjang rumah tangga.",
    image: "images/umkm-kerajinan.png",
    products: ["Tikar Bambu", "Tampah", "Keranjang", "Asesori Bambu"],
    whatsapp: "6281234567892",
    location: "Dukuh Purwoseco",
  },
  {
    id: "u4",
    name: "Tani Makmur Karangrejo",
    owner: "Kelompok Tani Makmur",
    category: "Pertanian",
    description:
      "Kelompok tani penghasil gabah dan beras segar serta produk pertanian olahan untuk konsumsi warga.",
    image: "images/umkm-tani.png",
    products: ["Beras Premium", "Gabah Kering", "Jagung Pipil", "Kedelai"],
    whatsapp: "6281234567893",
    location: "Dukuh Karangrejo",
  },
  {
    id: "u5",
    name: "Minuman Herbal Sehat Jaya",
    owner: "Ibu Endang",
    category: "Minuman",
    description:
      "Produsen minuman herbal botol dari bahan alami seperti kunyit dan jahe yang dipasarkan di sekitar desa.",
    image: "images/umkm-jamu.png",
    products: ["Wedang Jahe", "Kunyit Asam", "Sirup Temulawak"],
    whatsapp: "6281234567894",
    location: "Dukuh Purwosari",
  },
  {
    id: "u6",
    name: "Jasa Tani & Cangkul Bersama",
    owner: "Bapak Parmin",
    category: "Jasa",
    description:
      "Penyedia jasa olah lahan, pemanenan, dan perawatan tanaman untuk petani di Karangrejo.",
    image: "images/potensi-pertanian.png",
    products: ["Olah Lahan", "Panen Padi", "Perawatan Tanaman"],
    whatsapp: "6281234567895",
    location: "Dukuh Purwoseco",
  },
  {
    id: "u7",
    name: "Camilan Renyah Mak Siti",
    owner: "Ibu Siti",
    category: "Makanan",
    description:
      "Produsen keripik dan camilan renyah dari singkong dan ubi yang ditanam di pekarangan warga.",
    image: "images/umkm-kue.png",
    products: ["Keripik Singkong", "Keripik Ubi", "Rempeyek"],
    whatsapp: "6281234567896",
    location: "Dukuh Karangrejo",
  },
  {
    id: "u8",
    name: "Sayur Organik Pekarangan",
    owner: "Ibu Wati",
    category: "Pertanian",
    description:
      "Budidaya sayur organik di pekarangan rumah yang dipanen segar setiap pagi untuk warga sekitar.",
    image: "images/umkm-tani.png",
    products: ["Bayam", "Kangkung", "Cabai Rawit", "Tomat"],
    whatsapp: "6281234567897",
    location: "Dukuh Purwosari",
  },
];
