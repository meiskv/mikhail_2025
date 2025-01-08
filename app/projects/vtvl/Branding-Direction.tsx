import Image from 'next/image';

export default function BrandingDirection() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col max-w-[508px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">Direction</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Modern, Accessible, and Modular Design Language
        </h1>
        <p className="text-base font-normal">
          The VTVL branding blends clean geometric visuals with vibrant accents
          like deep blue (#2C53FA) and red (#F9623B) to balance technical
          sophistication with approachability. Minimal layouts and engaging
          illustrations simplify complex blockchain concepts, while the Sora
          font family ensures clarity and a modern feel.The design is modular
          and adaptable, creating a consistent identity across dashboards,
          marketing materials, and merchandise, making VTVL approachable for
          both Web3 users and enterprise clients.
        </p>
      </div>
    </section>
  );
}
