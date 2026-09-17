import { SectionHeader } from "./SectionHeader";

export function NoTech() {
  return (
    <section className="bg-[#2761EA] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader
          title="Tidak Perlu Mengerti Teknis"
          subtitle="Kamu cukup mengurus usaha. Pagesale yang mengurus pembuatan websitenya."
          dark
        />
      </div>
    </section>
  );
}

