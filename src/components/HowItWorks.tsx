import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import { SafeWhatsAppLink } from "./SafeWhatsAppLink";

const steps = [
  {
    num: "01",
    title: "Kirim informasi usaha",
    desc: "Kirim nama usaha, foto, produk atau jasa, alamat, dan nomor WhatsApp.",
  },
  {
    num: "02",
    title: "Pagesale buatkan",
    desc: "Kami menyusun informasi tersebut menjadi website usaha yang rapi.",
  },
  {
    num: "03",
    title: "Website online",
    desc: "Dalam sekitar 2-3 hari, website siap dibagikan ke pelanggan.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          title="Cara Kerja"
          subtitle="Proses cepat dan mudah, kamu cukup kirim bahan dan kami buatkan sampai online."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2761EA] text-xl font-bold text-white">
                {s.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#101828]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <SafeWhatsAppLink
            message={siteConfig.whatsapp.defaultMessage}
            className="inline-flex rounded-lg bg-[#2761EA] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4fc0]"
          >
            Mulai lewat WhatsApp
          </SafeWhatsAppLink>
        </div>
      </div>
    </section>
  );
}
