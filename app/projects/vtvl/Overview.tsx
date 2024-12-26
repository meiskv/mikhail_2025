import Image from 'next/image';

export default function Overview() {
  return (
    <section
      className="drag-item md:p-6 md:rounded-lg min-w-fit space-y-8 md:border-0 border-b border-black px-4 py-8 rounded-none"
      data-nav="Intro"
    >
      {/* <Image
        src="/projects/logo/vtvl_merged_logo.svg"
        width={40}
        height={40}
        alt="VTVL Logo"
      /> */}
      <div className="flex items-center space-x-2">
        <h4 className="text-base">OVERVIEW</h4>
        <Image
          src="/title_arrow.svg"
          alt="Title arrow"
          width={14}
          height={14}
        />
      </div>
      <h1 className="mt-4 text-3xl leading-tight font-medium max-w-[452px]">
        VTVL is a startup developing Web3 investment infrastructure to enhance
        portfolio and token management.
      </h1>
      <div className=" relative w-full aspect-[16/9]" data-nav="Branding">
        <Image
          src="/projects/vtvl/hero.png"
          alt="VTVL Hero"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
