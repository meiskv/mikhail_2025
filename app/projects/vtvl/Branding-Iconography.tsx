import Image from 'next/image';

export default function BrandingIconography() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col min-w-[546px] max-w-[746px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">
            Iconography and Illustration
          </h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          A Unified Visual Ecosystem
        </h1>

        <ul className="list-none space-y-4">
          <li>
            <strong className="block">Icons:</strong>Crafted using a modular
            grid system, VTVL’s custom icons emphasize clarity and scalability.
            These icons, utilized across dashboards, pitch decks, and marketing
            materials, reinforce the platform’s focus on efficiency and
            precision.
          </li>
          <li>
            <strong className="block">Illustrations:</strong>VTVL’s
            illustrations incorporate a modern and approachable style, blending
            technical details with engaging visuals. They complement the icons
            by adding depth to dashboards, promotional content, and storytelling
            elements, creating a cohesive and dynamic visual narrative.
          </li>
        </ul>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_iconography.svg"
          alt="VTVL Iconography"
          width={1276}
          height={536}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
    </section>
  );
}
