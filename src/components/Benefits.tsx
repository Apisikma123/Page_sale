import { ShoppingBag, MessageCircle, MapPin, Info } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: ShoppingBag,
    title: "Produk atau Jasa",
    desc: "Tampilkan apa yang usaha kamu jual dengan foto dan informasi yang jelas.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Pelanggan yang tertarik bisa langsung menghubungi kamu.",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    desc: "Tampilkan alamat dan arah Google Maps agar usaha lebih mudah ditemukan.",
  },
  {
    icon: Info,
    title: "Informasi Usaha",
    desc: "Jam buka, kontak, foto, dan informasi penting lainnya bisa ditampilkan dalam satu halaman.",
  },
];

export function Benefits() {
  return (
    <section id="layanan" className="bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          title="Layanan"
          subtitle="Satu website untuk menampilkan semua informasi penting usaha kamu."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E4E7EC] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2761EA]/10">
                <item.icon size={20} className="text-[#2761EA]" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#101828]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
