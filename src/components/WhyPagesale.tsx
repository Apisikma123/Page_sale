import { SectionHeader } from "./SectionHeader";

const reasons = [
  {
    title: "Kami yang buat",
    desc: "Tidak perlu membuat website sendiri.",
  },
  {
    title: "Harga ringan",
    desc: "Mulai Rp39 ribu per bulan tanpa biaya pembuatan.",
  },
  {
    title: "Mudah diperbarui",
    desc: "Mau mengganti foto atau informasi? Pagesale bantu sesuai paket yang dipilih.",
  },
  {
    title: "Cocok untuk usaha kecil",
    desc: "Dibuat sederhana agar usaha bisa mulai punya website tanpa biaya besar di awal.",
  },
];

export function WhyPagesale() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          title="Kenapa Pagesale?"
          subtitle="Solusi praktis dan hemat untuk membantu usaha kamu mulai punya website."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-[#E4E7EC] p-6"
            >
              <h3 className="text-base font-semibold text-[#101828]">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
