"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SafeWhatsAppLink } from "./SafeWhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <SafeWhatsAppLink
      message={siteConfig.whatsapp.defaultMessage}
      ariaLabel="Hubungi admin Pagesale lewat WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:h-14 md:w-14"
    >
      <MessageCircle size={24} />
    </SafeWhatsAppLink>
  );
}

