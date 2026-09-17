import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";

export function Showcase() {
  return (
    <section id="contoh" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          title="Contoh Tampilan"
          subtitle="Bayangkan usaha kamu punya halaman online seperti ini. Coba buka preview aslinya."
        />

        <div className="mt-12 mx-auto max-w-2xl">
          {/* Featured Live Preview Card: Usaha Mandiri */}
          <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-[#2761EA] bg-white shadow-xl transition-all hover:shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F7F9FC] px-3.5 py-2.5 sm:px-4 sm:py-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-1.5 flex min-w-0 flex-1 items-center justify-between rounded-md border border-[#E4E7EC] bg-white px-2.5 py-1 text-xs text-slate-700 sm:px-3 sm:py-1.5">
                <span className="flex min-w-0 items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
                  <span className="truncate">{siteConfig.previewDisplay}</span>
                </span>
                <span className="ml-2 shrink-0 rounded bg-emerald-100 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-emerald-900 border border-emerald-300/60">
                  Live
                </span>
              </span>
            </div>

            {/* Real Screenshot Preview */}
            <a
              href={siteConfig.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[16/10] overflow-hidden bg-slate-100"
              title="Buka Website Contoh Usaha Mandiri"
              aria-label="Buka demo asli website contoh di tab baru"
            >
              <Image
                src="/preview-live.webp"
                alt="Contoh Website Usaha Mandiri"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 672px"
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#101828] shadow-lg">
                  Buka Demo Asli
                  <ExternalLink size={14} className="text-[#2761EA]" />
                </span>
              </div>
            </a>

            {/* Card info & action */}
            <div className="flex flex-col gap-4 border-t border-[#E4E7EC] p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-base font-bold text-[#101828]">Usaha Mandiri</p>
                  <span className="rounded-full bg-[#2761EA]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2761EA]">
                    Preview Asli
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#667085] sm:text-sm">
                  Contoh website 1 halaman UMKM dengan profil, katalog produk & integrasi WhatsApp.
                </p>
              </div>

              <a
                href={siteConfig.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2761EA] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#1d4fc0] sm:text-sm w-full sm:w-auto text-center"
              >
                Buka Website Contoh
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

