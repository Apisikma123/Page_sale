import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import { SafeWhatsAppLink } from "./SafeWhatsAppLink";
import { SafePhoneDisplay } from "./SafePhoneDisplay";

export function Contact() {
  return (
    <section className="bg-[#2761EA] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <SectionHeader
          title="Yuk, Bikin Website untuk Usaha Kamu"
          subtitle="Mulai Rp39 ribu per bulan. Kirim informasi usaha lewat WhatsApp dan Pagesale yang bantu buatkan."
          dark
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <SafeWhatsAppLink
            message={siteConfig.whatsapp.defaultMessage}
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2761EA] transition-colors hover:bg-white/90 shadow-sm"
          >
            Chat Pagesale
          </SafeWhatsAppLink>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Instagram {siteConfig.instagram.handle}
          </a>
        </div>

        {/* Contact numbers protected from scraping */}
        <div className="mt-10 space-y-2 text-sm text-white">
          <p className="font-semibold text-white">WhatsApp</p>
          <p>
            <SafePhoneDisplay
              type="primary"
              className="text-white underline decoration-white/60 underline-offset-2 hover:text-blue-100"
            />
          </p>
          <p>
            <SafePhoneDisplay
              type="secondary"
              className="text-white underline decoration-white/60 underline-offset-2 hover:text-blue-100"
            />
          </p>
          <p className="mt-4 font-semibold text-white">Instagram</p>
          <p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/60 underline-offset-2 hover:text-blue-100"
            >
              {siteConfig.instagram.handle}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
