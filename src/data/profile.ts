export const villageStats = [
  { label: "Luas Wilayah", value: 312, suffix: " Ha", icon: "map" },
  { label: "Jumlah Dusun", value: 3, suffix: " Dusun", icon: "tree" },
  { label: "Jumlah RT/RW", value: 24, suffix: " RT", icon: "home" },
] as const;

export type Stat = (typeof villageStats)[number];

export const dusunList = [
  {
    name: "Dukuh Karangrejo",
    description:
      "Pusat pemerintahan desa dengan balai desa, masjid jami', dan pasar desa.",
    rw: "04 RW",
    rt: "12 RT",
  },
  {
    name: "Dukuh Purwosari",
    description:
      "Dukuh dengan mayoritas warga berprofesi sebagai petani dan pengrajin jamu tradisional.",
    rw: "03 RW",
    rt: "05 RT",
  },
  {
    name: "Dukuh Purwoseco",
    description:
      "Dukuh yang dikenal sebagai sentra kerajinan bambu dan aktivitas pertanian.",
    rw: "04 RW",
    rt: "07 RT",
  },
];

export const villageHistory = [
  "Desa Karangrejo merupakan desa di Kecamatan Kawedanan, Kabupaten Magetan, yang terbentuk dari perpaduan tiga dukuh utama: Purwosari, Purwoseco, dan Karangrejo.",
  "Nama Karangrejo bermakna \"karang yang rejeki\", mencerminkan harapan masyarakat akan tanah yang membawa keberkahan dan kesejahteraan bagi seluruh warganya.",
  "Sejak dahulu, masyarakat Karangrejo hidup dari sektor pertanian dan pengolahan jamu tradisional yang diwariskan turun-temurun. Tradisi gotong royong tetap lestari hingga saat ini.",
  "Seiring waktu, Desa Karangrejo terus berkembang menjadi desa yang maju, mandiri, dan berbudaya, dengan komitmen memanfaatkan teknologi digital untuk meningkatkan pelayanan publik.",
];

export const visiMisi = {
  visi:
    "Terwujudnya Desa Karangrejo yang Maju, Mandiri, Berbudaya, dan Sejahtera berlandaskan gotong royong.",
  misi: [
    "Meningkatkan kualitas pelayanan publik berbasis digital dan transparan.",
    "Memberdayakan ekonomi masyarakat melalui pertanian, UMKM, dan jamu tradisional.",
    "Melestarikan budaya, tradisi, dan nilai-nilai gotong royong warga.",
    "Membangun infrastruktur desa yang merata dan berkelanjutan.",
    "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan.",
  ],
};

export const governmentStructure = [
  { role: "Kepala Desa", name: "Bapak H. Sutrisno, S.Sos", img: "images/profile-struktur.png" },
  { role: "Sekretaris Desa", name: "Bapak Agus Priyanto, S.E", img: "images/profile-struktur.png" },
  { role: "Kaur Keuangan", name: "Ibu Dwi Astuti, A.Md", img: "images/profile-struktur.png" },
  { role: "Kaur Perencanaan", name: "Bapak Joko Susilo", img: "images/profile-struktur.png" },
  { role: "Kasi Pemerintahan", name: "Bapak Suparman", img: "images/profile-struktur.png" },
  { role: "Kasi Kesejahteraan", name: "Ibu Sulastri", img: "images/profile-struktur.png" },
  { role: "Kasi Pelayanan", name: "Bapak Bambang Wijaya", img: "images/profile-struktur.png" },
  { role: "Kepala Dusun Purwosari", name: "Bapak Wahyudi", img: "images/profile-struktur.png" },
];

export const territoryData = [
  { label: "Luas Wilayah", value: "312 Ha" },
  { label: "Batas Utara", value: "Desa Kawedanan" },
  { label: "Batas Selatan", value: "Hutan dan Persawahan" },
  { label: "Batas Timur", value: "Desa Selopuro" },
  { label: "Batas Barat", value: "Desa Ngunut" },
  { label: "Ketinggian", value: "± 150 mdpl" },
];
