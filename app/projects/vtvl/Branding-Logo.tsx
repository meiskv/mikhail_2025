import Image from 'next/image';

export default function BrandingLogo() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col max-w-[452px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">Logo</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Simplifying Complexity with a Unified Symbol
        </h1>
        <p className="text-base font-normal">
          The VTVL logo embodies the seamless interconnectivity of token
          workflows, combining clean geometric shapes to symbolize trust and
          transparency. Its modular design echoes blockchain’s inherent
          structure, creating a strong, scalable identity that speaks to VTVL’s
          innovative solutions.
        </p>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav="Branding"
      >
        <Image
          src="/projects/vtvl/branding_logo.svg"
          alt="VTVL Logo"
          width={2316}
          height={508}
          className="object-fill w-full max-h-[100vh] rounded-lg"
        />
      </div>
    </section>
  );
}
