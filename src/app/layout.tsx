import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pagesale.id"),
  title: "Pagesale | Website untuk Usaha Mulai Rp39 Ribu/Bulan",
  description:
    "Pagesale membantu UMKM dan usaha kecil di Indonesia memiliki website untuk menampilkan produk, jasa, lokasi, dan WhatsApp. Mulai Rp39 ribu per bulan.",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Pagesale | Website untuk Usaha Mulai Rp39 Ribu/Bulan",
    description:
      "Pagesale membantu UMKM dan usaha kecil di Indonesia memiliki website untuk menampilkan produk, jasa, lokasi, dan WhatsApp. Mulai Rp39 ribu per bulan.",
    type: "website",
    locale: "id_ID",
    siteName: "Pagesale",
    images: [
      {
        url: "/logo.webp",
        width: 1024,
        height: 1024,
        alt: "Pagesale Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pagesale | Website untuk Usaha Mulai Rp39 Ribu/Bulan",
    description:
      "Pagesale membantu UMKM dan usaha kecil di Indonesia memiliki website untuk menampilkan produk, jasa, lokasi, dan WhatsApp.",
    images: ["/logo.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
