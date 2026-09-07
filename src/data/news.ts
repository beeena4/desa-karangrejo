export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: "n1",
    title: "Gotong Royong Pembersihan Saluran Irigasi Desa",
    excerpt:
      "Warga Desa Karangrejo bersama pemdes menggelar gotong royong membersihkan saluran irigasi menjelang musim tanam.",
    category: "Kegiatan Warga",
    date: "2026-02-18",
    image: "/images/news-1.png",
    author: "Sekretariat Desa Karangrejo",
    content: [
      "Dalam rangka menyambut musim tanam berikutnya, warga Desa Karangrejo bersama perangkat desa menggelar kegiatan gotong royong pembersihan saluran irigasi yang melintasi tiga dusun.",
      "Kegiatan ini diikuti oleh tokoh masyarakat, pemuda, dan ibu-ibu PKK. Dengan semangat kebersamaan, saluran air yang tersumbat dapat dibersihkan sehingga pasokan air ke sawah kembali lancar.",
      "Kepala Desa menyampaikan apresiasi atas antusiasme warga dan berharap semangat gotong royong tetap terjaga sebagai bagian dari identitas Desa Karangrejo.",
    ],
  },
  {
    id: "n2",
    title: "Posyandu Balita Desa Karangrejo Raih Predikat Mandiri",
    excerpt:
      "Posyandu Balita di Desa Karangrejo meraih predikat Mandiri berkat partisipasi aktif kader dan masyarakat.",
    category: "Kesehatan",
    date: "2026-02-10",
    image: "/images/news-2.png",
    author: "Sekretariat Desa Karangrejo",
    content: [
      "Posyandu Balita Desa Karangrejo berhasil meraih predikat Mandiri pada penilaian Posyandu tingkat kecamatan.",
      "Pencapaian ini merupakan hasil kerja keras kader posyandu, dukungan tenaga kesehatan, serta partisipasi aktif orang tua balita dalam setiap kegiatan penimbangan dan pemberian vitamin.",
      "Pemdes berkomitmen untuk terus mendukung peningkatan layanan kesehatan masyarakat, termasuk penyediaan fasilitas dan tambahan gizi bagi balita dan ibu hamil.",
    ],
  },
  {
    id: "n3",
    title: "Peningkatan Jalan Dusun Purwoseco Mulai Dikerjakan",
    excerpt:
      "Proyek peningkatan jalan Dusun Purwoseco dimulai untuk memperlancar aksesibilitas warga dan distribusi hasil tani.",
    category: "Pembangunan",
    date: "2026-01-28",
    image: "/images/news-3.png",
    author: "Sekretariat Desa Karangrejo",
    content: [
      "Pemerintah Desa Karangrejo memulai pekerjaan peningkatan jalan di Dusun Purwoseco sebagai bagian dari program pembangunan infrastruktur desa.",
      "Pekerjaan meliputi pengerasan dan penataan drainase sehingga akses warga menuju lahan pertanian dan fasilitas umum menjadi lebih lancar sepanjang tahun.",
      "Warga diajak berpartisipasi mengawal pelaksanaan pekerjaan agar dapat diselesaikan tepat waktu dan bermanfaat maksimal bagi masyarakat.",
    ],
  },
];

export function formatDateID(iso: string) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
