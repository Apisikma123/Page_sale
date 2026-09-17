import { Check } from "lucide-react";
import { plans } from "@/config/pricing";
import { SectionHeader } from "./SectionHeader";
import { SafeWhatsAppLink } from "./SafeWhatsAppLink";

export function Pricing() {
  return (
    <section id="harga" className="bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          title="Pilihan Harga"
          subtitle="Harga hemat mulai Rp39 ribu per bulan tanpa biaya pembuatan di awal."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border bg-white p-6 transition-shadow hover:shadow-md ${
                plan.highlighted
                  ? "border-[#2761EA] shadow-md ring-1 ring-[#2761EA]"
                  : "border-[#E4E7EC]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2761EA] px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-[#101828]">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[#667085]">{plan.description}</p>
              <div className="mt-4">
                <span className="text-3xl font-extrabold text-[#101828]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#667085]">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[#667085]"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#2761EA]"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <SafeWhatsAppLink
                message={`Halo Pagesale, saya tertarik dengan ${plan.name}.`}
                className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-[#2761EA] text-white hover:bg-[#1d4fc0]"
                    : "border border-[#E4E7EC] text-[#101828] hover:bg-[#F7F9FC]"
                }`}
              >
                {plan.cta}
              </SafeWhatsAppLink>
            </div>
          ))}
        </div>

        {/* Pricing explanation */}
        <div className="mt-10 rounded-xl border border-[#E4E7EC] bg-white p-6 md:p-8">
          <div className="mx-auto max-w-2xl space-y-3 text-center text-sm leading-relaxed text-[#667085]">
            <p className="font-semibold text-[#101828]">
              Tidak ada biaya pembuatan.
            </p>
            <p>
              Mau pakai .com? Domain dibeli terpisah oleh pelanggan dan Pagesale
              bantu pasangkan.
            </p>
          </div>
        </div>

        {/* Free address + custom domain */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-6">
            <h3 className="text-base font-semibold text-[#101828]">
              Alamat website gratis
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#667085]">
              Belum punya domain? Tidak masalah. Website tetap bisa online
              menggunakan alamat website gratis.
            </p>
            <p className="mt-3 rounded-md bg-[#F7F9FC] px-3 py-2 text-sm font-mono text-[#667085]">
              namausaha.vercel.app
            </p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-6">
            <h3 className="text-base font-semibold text-[#101828]">
              Sudah punya domain sendiri?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#667085]">
              Kami bantu pasangkan. Jika kamu ingin menggunakan alamat seperti{" "}
              <span className="font-medium text-[#101828]">
                namausaha.com
              </span>
              , domain dibeli terpisah oleh pelanggan dan Pagesale bantu
              menghubungkannya ke website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
