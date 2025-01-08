import Image from 'next/image';

export default function BrandingChallenges() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col max-w-[508px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">Challenge</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Establishing Trust and Innovation in a Complex Industry 
        </h1>
        <p className="text-base font-normal">
          In the fragmented and rapidly evolving Web3 landscape, VTVL faced the
          challenge of creating a brand identity that resonated with both
          crypto-native audiences and enterprise clients. The goal was to
          inspire trust while showcasing VTVL’s technological expertise.
          Balancing accessibility, innovation, and professionalism was critical
          to positioning VTVL as a leader in token management solutions.
        </p>
      </div>
    </section>
  );
}
