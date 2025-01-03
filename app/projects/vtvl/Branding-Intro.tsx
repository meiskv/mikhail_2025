import Image from 'next/image';

export default function BrandingIntroduction() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav="Branding"
    >
      <div className="flex flex-col max-w-[452px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase">Introduction</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Elevating Token Management: VTVL’s Unique Brand Identity
        </h1>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav="Branding"
      >
        <Image
          src="/projects/vtvl/branding_hero.svg"
          alt="VTVL Hero"
          height={1600}
          width={900}
          className="object-contain w-full max-h-[50vh] rounded-lg"
        />
      </div>
    </section>
  );
}
