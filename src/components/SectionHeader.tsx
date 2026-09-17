export function SectionHeader({
  title,
  subtitle,
  dark = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          dark ? "text-white" : "text-[#101828]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            dark ? "text-white" : "text-[#667085]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
