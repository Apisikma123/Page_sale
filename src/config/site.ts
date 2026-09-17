export const siteConfig = {
  name: "Pagesale",
  title: "Pagesale | Website untuk Usaha Mulai Rp39 Ribu/Bulan",
  description:
    "Pagesale membantu UMKM dan usaha kecil di Indonesia memiliki website untuk menampilkan produk, jasa, lokasi, dan WhatsApp. Mulai Rp39 ribu per bulan.",
  url: "https://pagesale.id",
  whatsapp: {
    defaultMessage:
      "Halo Pagesale, saya tertarik membuat website untuk usaha saya.",
  },
  instagram: {
    handle: "@pagesale._",
    url: "https://www.instagram.com/pagesale._/",
  },
  previewUrl: "https://landing-page-rho-lilac-55.vercel.app/",
  previewDisplay: "landing-page-rho-lilac-55.vercel.app",
  nav: [
    { label: "Layanan", href: "#layanan" },
    { label: "Contoh", href: "#contoh" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export function waLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
