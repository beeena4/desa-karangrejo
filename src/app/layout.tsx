import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desa Karangrejo — Kawedanan, Magetan | Website Resmi Desa",
  description:
    "Website resmi Desa Karangrejo, Kecamatan Kawedanan, Kabupaten Magetan, Jawa Timur. Kenali profil desa, potensi lokal, fasilitas, layanan surat online, dan UMKM Desa Karangrejo.",
  keywords: [
    "Desa Karangrejo",
    "Karangrejo Magetan",
    "Kawedanan",
    "Desa Magetan",
    "Website Desa",
    "Layanan Surat Desa",
    "UMKM Desa",
    "Jawa Timur",
  ],
  authors: [{ name: "Pemerintah Desa Karangrejo" }],
  openGraph: {
    title: "Desa Karangrejo — Kawedanan, Magetan",
    description:
      "Website resmi Desa Karangrejo. Modern, hijau, dan digital. Kenali desa, potensi lokal, layanan, dan UMKM.",
    siteName: "Desa Karangrejo",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
