import Image from "next/image";

export function PagesaleLogo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <Image
        src="/logo-sm.webp"
        alt="Pagesale Logo"
        width={32}
        height={32}
        className="h-7 w-7 shrink-0 object-contain"
        priority
      />
      {showText && (
        <span className="text-xl font-bold tracking-tight text-[#101828]">
          Page<span className="text-[#2761EA]">sale</span>
        </span>
      )}
    </div>
  );
}

export function PagesaleLogoWhite({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <Image
        src="/logo-sm.webp"
        alt="Pagesale Logo"
        width={32}
        height={32}
        className="h-7 w-7 shrink-0 object-contain"
      />
      {showText && (
        <span className="text-xl font-bold tracking-tight text-white">
          Page<span className="text-blue-400">sale</span>
        </span>
      )}
    </div>
  );
}

