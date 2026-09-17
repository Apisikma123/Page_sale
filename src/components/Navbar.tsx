"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PagesaleLogo } from "./Logo";
import { siteConfig } from "@/config/site";
import { SafeWhatsAppLink } from "./SafeWhatsAppLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#E4E7EC] shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#" aria-label="Pagesale home">
          <PagesaleLogo className="h-7 w-auto" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 text-sm font-medium text-[#667085] md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-[#101828]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <SafeWhatsAppLink
          message={siteConfig.whatsapp.defaultMessage}
          className="hidden rounded-lg bg-[#2761EA] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1d4fc0] md:inline-flex"
        >
          Chat WhatsApp
        </SafeWhatsAppLink>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#101828] md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#E4E7EC] bg-white px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#667085] transition-colors hover:bg-[#F7F9FC] hover:text-[#101828]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <SafeWhatsAppLink
            message={siteConfig.whatsapp.defaultMessage}
            className="mt-3 block rounded-lg bg-[#2761EA] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1d4fc0]"
          >
            Chat WhatsApp
          </SafeWhatsAppLink>
        </div>
      )}
    </header>
  );
}
