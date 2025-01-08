import Image from 'next/image';

export default function BrandingMerch() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col min-w-[546px] max-w-[746px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">
            Merchandise and NFTs
          </h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Extending the Brand Beyond Digital
        </h1>

        <p className="text-base font-normal">
          VTVL’s branding extends into physical merchandise like t-shirts,
          hoodies, and mugs, as well as its unique NFT collection. Each item
          reflects the brand’s visual language, creating an engaging and
          recognizable identity for the Web3 community.
        </p>
      </div>
      <div
        className="relative w-full h-full aspect-[1/1] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_nft.png"
          alt="VTVL NFT"
          width={858.33}
          height={569.22}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_merch.png"
          alt="VTVL Merch"
          width={1457.18}
          height={568}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
    </section>
  );
}
