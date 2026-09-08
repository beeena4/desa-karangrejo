export const villageStats = [
  { label: "Luas Wilayah", value: 312, suffix: " Ha", icon: "map" },
  { label: "Jumlah Dusun", value: 3, suffix: " Dusun", icon: "tree" },
  { label: "Jumlah RT", value: 24, suffix: " RT", icon: "home" },
  { label: "Jumlah RW", value: 10, suffix: " RW", icon: "users" },
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
  "Menurut asal usul, Karangrejo terdiri dari dua suku kata yakni Karang dan Rejo. Karang mengandung arti batu dan Rejo mengandung makna ramai. Jadi Karangrejo berarti banyak bebatuan. Namun bila diartikan secara sejarahnya, maka desa ini penduduknya mempunyai semangat yang keras bagai batu di dalam mencapai cita-cita. Dan karena semangat yang keras, pantang menyerah inilah banyak didatangi oleh masyarakat dari luar untuk ngangsu kawruh pada masyarakat dan pemuka desa ini.",
  "Risalah singkat ini bersumber dari beberapa tokoh Desa Karangrejo dan cerita para leluhur yang dituturkan secara turun-temurun. Sejak awal, desa ini dipimpin secara turun-temurun seperti sistem kerajaan, mulai dari demang (sebutan lurah zaman dahulu) hingga lurah dan kepala desa. Walaupun saat ini kepala desa dipilih sesuai zamannya, pemimpin yang terpilih masih memiliki garis keturunan dari pemimpin sebelumnya.",
  "Tidak banyak diketahui kapan Dukuh Purwoseco dan Karangrejo disatukan karena kurangnya peninggalan dan data. Kedua pedukuhan ini menjadi satu kawasan tanpa pembatas yang jelas. Mulai tahun 1984, Desa Karangrejo dibagi menjadi tiga dusun: wilayah barat disebut Dusun Karangrejo, wilayah tengah disebut Dusun Purwosari, dan wilayah timur disebut Dusun Purwoseco. Setelah Pangeran Diponegoro ditangkap Belanda, banyak pengikutnya melarikan diri untuk mencari perlindungan ke Desa Karangrejo. Salah satunya adalah Ki Surodiko, yang karena kewibawaan dan kesaktiannya menjadi demang pertama Desa Karangrejo. Sementara itu, pedukuhan dipimpin oleh seorang palang bernama Ki Mangun Wijoyo.",
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
  { role: "Kepala Desa", name: "Suharno, SE", img: "images/profile-struktur.png" },
  { role: "Sekretaris Desa", name: "Ika Dwi R.", img: "images/profile-struktur.png" },
  { role: "Kasi Kesejahteraan", name: "Nurohim", img: "images/profile-struktur.png" },
  { role: "Kasi Pelayanan", name: "Abdul Wahib", img: "images/profile-struktur.png" },
  { role: "Kasi Pemerintahan", name: "Lini Widyawati", img: "images/profile-struktur.png" },
  { role: "Kaur Tata Usaha & Umum", name: "Suwarno", img: "images/profile-struktur.png" },
  { role: "Kaur Keuangan", name: "Tarmuji", img: "images/profile-struktur.png" },
  { role: "Kaur Perencanaan", name: "Sunarto", img: "images/profile-struktur.png" },
  { role: "Kasun Karangrejo", name: "Lasito", img: "images/profile-struktur.png" },
  { role: "Kasun Purwosari", name: "Drs. Suyitno", img: "images/profile-struktur.png" },
  { role: "Kasun Purwoseco", name: "Zawa Ida Fauziatin, S.Pd.", img: "images/profile-struktur.png" },
];

export const territoryData = [
  { label: "Luas Wilayah", value: "312 Ha" },
  { label: "Batas Utara", value: "Desa Belotan" },
  { label: "Batas Selatan", value: "Desa Sampung" },
  { label: "Batas Timur", value: "Desa Genengan" },
  { label: "Batas Barat", value: "Desa Ngadirejo" },
  { label: "Ketinggian", value: "± 150 mdpl" },
];
