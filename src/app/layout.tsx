import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { faqs } from "@/config/faq";

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
    "Pagesale membantu UMKM dan usaha kecil di seluruh Indonesia memiliki website 1 halaman profesional untuk menampilkan produk, jasa, lokasi, dan WhatsApp mulai Rp39 ribu/bulan.",
  keywords: [
    "jasa pembuatan website",
    "website umkm",
    "website usaha kecil",
    "bikin web murah",
    "website mulai 39 ribu",
    "landing page umkm",
    "jasa buat web usaha",
    "website profil bisnis",
    "website katalog whatsapp",
    "pagesale",
    "website siap pakai",
    "website toko online murah",
  ],
  authors: [{ name: "Pagesale", url: "https://pagesale.id" }],
  creator: "Pagesale",
  publisher: "Pagesale",
  applicationName: "Pagesale",
  category: "business",
  alternates: {
    canonical: "https://pagesale.id",
  },
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
      "Pagesale membantu UMKM dan usaha kecil di seluruh Indonesia memiliki website 1 halaman profesional untuk menampilkan produk, jasa, lokasi, dan WhatsApp mulai Rp39 ribu/bulan.",
    url: "https://pagesale.id",
    type: "website",
    locale: "id_ID",
    siteName: "Pagesale",
    images: [
      {
        url: "/preview-live.webp",
        width: 1200,
        height: 630,
        alt: "Pagesale Website Preview",
      },
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
    images: ["/preview-live.webp"],
  },
  verification: {
    google: "c3e739d4426414fe",
    other: {
      "google-site-verification": [
        "c3e739d4426414fe",
        "googlec3e739d4426414fe.html",
        "googlec3e739d4426414fe",
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pagesale.id/#organization",
      name: "Pagesale",
      url: "https://pagesale.id",
      logo: "https://pagesale.id/logo.webp",
      description:
        "Jasa pembuatan website 1 halaman profesional untuk UMKM dan usaha kecil di seluruh Indonesia mulai Rp39.000/bulan.",
      sameAs: ["https://www.instagram.com/pagesale._/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://pagesale.id/#website",
      url: "https://pagesale.id",
      name: "Pagesale",
      publisher: {
        "@id": "https://pagesale.id/#organization",
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://pagesale.id/#service",
      name: "Pagesale",
      url: "https://pagesale.id",
      image: "https://pagesale.id/preview-live.webp",
      priceRange: "Rp39.000 - Rp99.000 / bulan",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      serviceType: "Jasa Pembuatan Website 1 Halaman UMKM",
      provider: {
        "@id": "https://pagesale.id/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://pagesale.id/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
