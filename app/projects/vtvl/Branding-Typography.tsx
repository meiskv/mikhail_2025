import Image from 'next/image';

export default function BrandingTypography() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col min-w-[546px] max-w-[746px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">Color Palette</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          A Blend of Modernity and Technical Precision
        </h1>
        <p className="text-base font-normal">
          VTVL’s typography captures a balance of professionalism and
          approachability:
        </p>
        <ul>
          <li>
            <strong>Sora</strong>: The primary font, delivering modern, sleek
            elegance across branding and marketing.
          </li>
          <li>
            <strong>Inter</strong>: Used for the web app and product, ensuring
            clean readability and user-friendly design.
          </li>
        </ul>

        <p className="text-base font-normal">
          Together, these fonts enhance VTVL’s identity, highlighting
          innovation, clarity, and usability.
        </p>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_typo_01.svg"
          alt="VTVL Typography"
          width={940}
          height={553}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_typo_02.svg"
          alt="VTVL Typography"
          width={940}
          height={553}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
    </section>
  );
}
