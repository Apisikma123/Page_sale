import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SafeWhatsAppLink } from "./SafeWhatsAppLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101828] sm:text-4xl md:text-5xl">
              Website untuk{" "}
              <span className="text-[#2761EA]">usaha kamu.</span>
              <br />
              <span className="text-[#2761EA]">Mulai Rp39 ribu</span>/bulan.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#667085] md:text-lg">
              Tampilkan produk, jasa, lokasi, dan WhatsApp usaha kamu dalam satu
              website yang rapi. Kamu kirim informasi usaha, Pagesale yang buatkan.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <SafeWhatsAppLink
                message={siteConfig.whatsapp.defaultMessage}
                className="rounded-lg bg-[#2761EA] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1d4fc0] hover:shadow-md"
              >
                Buat Website Usaha
              </SafeWhatsAppLink>
              <a
                href={siteConfig.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E7EC] bg-white px-6 py-3 text-sm font-semibold text-[#101828] transition-colors hover:border-[#2761EA] hover:bg-[#F7F9FC]"
              >
                Lihat Preview Asli
                <ExternalLink size={14} className="text-[#2761EA]" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#667085]">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2761EA]" />
                Tanpa biaya pembuatan
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2761EA]" />
                Siap dalam 2-3 hari
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2761EA]" />
                Alamat website gratis
              </span>
            </div>
          </div>

          {/* Visual: website preview mockup with real live preview */}
          <div className="relative flex items-center justify-center">
            {/* Desktop frame */}
            <a
              href={siteConfig.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full max-w-md overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-xl transition-all hover:border-[#2761EA]/50 hover:shadow-2xl"
              title="Buka Preview Website Asli"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F7F9FC] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="ml-2 flex flex-1 items-center justify-between rounded-md border border-[#E4E7EC] bg-white px-2.5 py-1 text-xs text-[#667085]">
                  <span className="flex items-center gap-1.5 truncate font-mono text-xs text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    {siteConfig.previewDisplay}
                  </span>
                  <ExternalLink
                    size={13}
                    className="shrink-0 text-[#2761EA] transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </div>
              {/* Content preview */}
              <div className="relative bg-slate-100">
                <Image
                  src="/preview-live.webp"
                  alt="Preview Usaha Mandiri"
                  width={600}
                  height={284}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-white">
                  <span className="text-xs font-semibold drop-shadow-sm">
                    Live Demo: Usaha Mandiri
                  </span>
                  <span className="rounded bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/30">
                    Buka Website ↗
                  </span>
                </div>
              </div>
            </a>

            {/* Phone frame overlapping */}
            <a
              href={siteConfig.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 -right-2 w-32 rounded-2xl border-2 border-slate-800 bg-slate-900 p-1 shadow-2xl transition-transform hover:scale-105 sm:w-36 md:-right-6"
              title="Buka Demo Live di HP"
            >
              {/* Phone notch */}
              <div className="mx-auto my-1 h-1 w-10 rounded-full bg-slate-700" />
              <div className="overflow-hidden rounded-xl bg-white">
                <Image
                  src="/preview-mobile.webp"
                  alt="Preview Mobile Usaha Mandiri"
                  width={180}
                  height={270}
                  className="w-full h-auto object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

