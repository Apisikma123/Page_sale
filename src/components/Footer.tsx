import { PagesaleLogo } from "./Logo";
import { siteConfig } from "@/config/site";
import { CurrentYear } from "./CurrentYear";
import { SafePhoneDisplay } from "./SafePhoneDisplay";

export function Footer() {
  return (
    <footer className="border-t border-[#E4E7EC] bg-white py-12">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <PagesaleLogo className="h-7 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#667085]">
              Website sederhana dan terjangkau untuk membantu usaha tampil lebih
              rapi secara online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-[#101828]">Navigasi</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#667085] transition-colors hover:text-[#101828]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-[#101828]">Kontak</p>
            <ul className="mt-3 space-y-2 text-sm text-[#667085]">
              <li>
                <SafePhoneDisplay
                  type="primary"
                  className="transition-colors hover:text-[#101828]"
                />
              </li>
              <li>
                <SafePhoneDisplay
                  type="secondary"
                  className="transition-colors hover:text-[#101828]"
                />
              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#101828]"
                >
                  Instagram {siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E4E7EC] pt-6 text-center text-xs text-[#667085]">
          © <CurrentYear /> Pagesale
        </div>
      </div>
    </footer>
  );
}

