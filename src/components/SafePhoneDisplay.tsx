"use client";

import { useState, useEffect, MouseEvent } from "react";
import { getSafeDisplay, getSafeWaUrl } from "@/utils/contactSecurity";

export function SafePhoneDisplay({
  type = "primary",
  className = "",
}: {
  type?: "primary" | "secondary";
  className?: string;
}) {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    // Decoded dynamically only in client browser
    setDisplayText(getSafeDisplay(type));
  }, [type]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = getSafeWaUrl(type);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href="#whatsapp"
      onClick={handleClick}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={className}
      title="Chat ke nomor ini via WhatsApp"
    >
      {displayText ? (
        <span>{displayText}</span>
      ) : (
        <span className="inline-block h-4 w-32 animate-pulse rounded bg-slate-200/40" />
      )}
    </a>
  );
}
