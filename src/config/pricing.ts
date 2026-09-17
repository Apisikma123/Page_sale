export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export const plans: PricingPlan[] = [
  {
    name: "Paket Hemat",
    price: "Rp39.000",
    period: "/bulan",
    description: "Usaha yang ingin mulai tampil online.",
    features: [
      "Website 1 halaman",
      "Maks. 5 produk/jasa",
      "Foto usaha",
      "Tombol WhatsApp",
      "Lokasi Google Maps",
      "Nyaman dibuka dari HP",
      "Alamat website gratis",
      "2x perubahan isi per bulan",
    ],
    cta: "Pilih Hemat",
  },
  {
    name: "Paket Usaha",
    price: "Rp59.000",
    period: "/bulan",
    description: "Usaha yang punya lebih banyak produk atau jasa.",
    features: [
      "Website 1 halaman",
      "Maks. 10 produk/jasa",
      "Foto usaha",
      "Tombol WhatsApp",
      "Lokasi Google Maps",
      "Nyaman dibuka dari HP",
      "Alamat website gratis",
      "Bisa pakai domain sendiri",
      "3x perubahan isi per bulan",
    ],
    cta: "Pilih Usaha",
    highlighted: true,
    badge: "Paling Cocok",
  },
  {
    name: "Paket Pro",
    price: "Rp89.000",
    period: "/bulan",
    description: "Usaha yang membutuhkan lebih banyak isi dan perubahan.",
    features: [
      "Website 1 halaman",
      "Maks. 20 produk/jasa",
      "Foto usaha",
      "Tombol WhatsApp",
      "Lokasi Google Maps",
      "Nyaman dibuka dari HP",
      "Alamat website gratis",
      "Bisa pakai domain sendiri",
      "5x perubahan isi per bulan",
      "Bantuan lebih prioritas",
    ],
    cta: "Pilih Pro",
  },
];
