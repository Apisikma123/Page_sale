"use client";

import { useState, useEffect, ReactNode, MouseEvent } from "react";
import { getSafeWaUrl } from "@/utils/contactSecurity";

interface SafeWhatsAppLinkProps {
  type?: "primary" | "secondary";
  message?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  id?: string;
}

export function SafeWhatsAppLink({
  type = "primary",
  message,
  children,
  className = "",
  ariaLabel = "Chat WhatsApp",
  id,
}: SafeWhatsAppLinkProps) {
  const [href, setHref] = useState<string>("#");

  useEffect(() => {
    // Generated only in real browser environment after hydration
    setHref(getSafeWaUrl(type, message));
  }, [type, message]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // If clicked before state sync or in special client
    const targetUrl = href !== "#" ? href : getSafeWaUrl(type, message);
    if (href === "#") {
      e.preventDefault();
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      onMouseEnter={() => {
        if (href === "#") setHref(getSafeWaUrl(type, message));
      }}
      onTouchStart={() => {
        if (href === "#") setHref(getSafeWaUrl(type, message));
      }}
    >
      {children}
    </a>
  );
}
