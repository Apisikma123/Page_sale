import { getSafeDisplay, getSafeWaUrl } from "@/utils/contactSecurity";

export function SafePhoneDisplay({
  type = "primary",
  className = "",
}: {
  type?: "primary" | "secondary";
  className?: string;
}) {
  const displayText = getSafeDisplay(type);
  const href = getSafeWaUrl(type);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title="Chat ke nomor ini via WhatsApp"
      aria-label={`WhatsApp ${displayText}`}
    >
      {displayText}
    </a>
  );
}
