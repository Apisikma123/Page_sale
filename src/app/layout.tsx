import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { faqs } from "@/config/faq";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
  metadataBase: new URL("https://page-sale.vercel.app"),
  title: "Jasa Pembuatan Website UMKM Murah Mulai Rp39 Ribu | Pagesale",
  description:
    "Jasa pembuatan website 1 halaman profesional untuk UMKM & usaha kecil di Indonesia. Terima beres dalam 2-3 hari, mulai Rp39rb/bulan tanpa biaya pembuatan. Chat WhatsApp sekarang!",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website umkm",
    "website umkm murah",
    "bikin website murah",
    "website mulai 39 ribu",
    "landing page umkm",
    "jasa buat web usaha",
    "website profil bisnis",
    "website katalog whatsapp",
    "jasa website terpercaya",
    "pagesale",
    "website siap pakai",
    "website toko online murah",
  ],
  authors: [{ name: "Pagesale", url: "https://page-sale.vercel.app" }],
  creator: "Pagesale",
  publisher: "Pagesale",
  applicationName: "Pagesale",
  category: "business",
  alternates: {
    canonical: "https://page-sale.vercel.app",
  },
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Jasa Pembuatan Website UMKM Murah Mulai Rp39 Ribu | Pagesale",
    description:
      "Jasa pembuatan website 1 halaman profesional untuk UMKM & usaha kecil di Indonesia. Terima beres dalam 2-3 hari, mulai Rp39rb/bulan tanpa biaya pembuatan. Chat WhatsApp sekarang!",
    url: "https://pagesale.id",
    type: "website",
    locale: "id_ID",
    siteName: "Pagesale",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "Pagesale - Jasa Pembuatan Website UMKM Murah Mulai Rp39 Ribu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website UMKM Murah Mulai Rp39 Ribu | Pagesale",
    description:
      "Jasa pembuatan website 1 halaman profesional untuk UMKM & usaha kecil di Indonesia. Siap 2-3 hari mulai Rp39rb/bln.",
    images: ["/og.webp"],
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
      "@id": "https://page-sale.vercel.app/#organization",
      name: "Pagesale",
      url: "https://page-sale.vercel.app",
      logo: "https://page-sale.vercel.app/logo.webp",
      description:
        "Jasa pembuatan website 1 halaman profesional untuk UMKM dan usaha kecil di seluruh Indonesia mulai Rp39.000/bulan tanpa biaya pembuatan di awal.",
      sameAs: ["https://www.instagram.com/pagesale._/"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-895-0338-6321",
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://page-sale.vercel.app/#website",
      url: "https://page-sale.vercel.app",
      name: "Pagesale",
      publisher: {
        "@id": "https://page-sale.vercel.app/#organization",
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://page-sale.vercel.app/#service",
      name: "Pagesale - Jasa Pembuatan Website UMKM",
      url: "https://page-sale.vercel.app",
      image: "https://page-sale.vercel.app/og.webp",
      priceRange: "Rp39.000 - Rp99.000 / bulan",
      currenciesAccepted: "IDR",
      paymentAccepted: "Transfer Bank, QRIS, E-Wallet",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      serviceType: "Jasa Pembuatan Website 1 Halaman UMKM",
      provider: {
        "@id": "https://page-sale.vercel.app/#organization",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paket Pembuatan Website Usaha Pagesale",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Paket Hemat",
            description: "Website 1 halaman usaha dengan profil dan tombol WhatsApp langsung.",
            price: "39000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "39000",
              priceCurrency: "IDR",
              unitText: "BULAN",
            },
          },
          {
            "@type": "Offer",
            name: "Paket Usaha",
            description: "Website 1 halaman usaha dengan katalog produk, foto, dan lokasi Google Maps.",
            price: "59000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "59000",
              priceCurrency: "IDR",
              unitText: "BULAN",
            },
          },
          {
            "@type": "Offer",
            name: "Paket Pro",
            description: "Website 1 halaman lengkap untuk usaha aktif dengan bantuan update prioritas.",
            price: "99000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "99000",
              priceCurrency: "IDR",
              unitText: "BULAN",
            },
          },
        ],
      },
    },
    {
      "@type": "HowTo",
      "@id": "https://page-sale.vercel.app/#howto",
      name: "Cara Membuat Website Usaha di Pagesale",
      description: "Langkah mudah memiliki website 1 halaman praktis untuk usaha kecil dan UMKM.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Kirim informasi usaha",
          text: "Kirim nama usaha, foto, produk atau jasa, alamat, dan nomor WhatsApp ke admin Pagesale.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Pagesale buatkan website",
          text: "Tim Pagesale menyusun semua materi menjadi website 1 halaman yang rapi dan profesional dalam 2-3 hari.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Website online & siap promosi",
          text: "Website langsung online, siap dibagikan ke calon pelanggan di bio media sosial dan terhubung langsung ke WhatsApp.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://page-sale.vercel.app/#faq",
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
