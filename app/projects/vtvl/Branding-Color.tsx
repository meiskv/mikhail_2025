import Image from 'next/image';

export default function BrandingColor() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col max-w-[746px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
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
          A Bold and Vibrant Visual Identity 
        </h1>
        <p className="text-base font-normal">
          The VTVL color palette emphasizes clarity, innovation, and energy:
        </p>
        <ul className="list-disc pl-2">
          <li>
            Blue (#2C53FA, #1B369A): Represents trust, technology, and
            precision.
          </li>
          <li>
            Red (#D3442D, #F9623B): Conveys urgency, action, and accessibility.
          </li>
          <li>
            Gradient (Blue to Red): Symbolizes seamless transitions and dynamic
            blockchain processes.
          </li>
          <li>
            Black (#141414): Adds depth and contrast for a polished and modern
            look.
          </li>
        </ul>
        <p className="text-base font-normal">
          This cohesive palette ensures VTVL’s branding communicates both
          technical sophistication and user-friendliness.
        </p>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav="Branding"
      >
        <Image
          src="/projects/vtvl/branding_color.svg"
          alt="VTVL Logo"
          width={2316}
          height={508}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
    </section>
  );
}
