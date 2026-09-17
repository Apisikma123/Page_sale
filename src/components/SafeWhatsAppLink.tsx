import { ReactNode } from "react";
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
  ariaLabel,
  id,
}: SafeWhatsAppLinkProps) {
  const href = getSafeWaUrl(type, message);

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      {children}
    </a>
  );
}
