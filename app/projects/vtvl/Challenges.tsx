import Image from 'next/image';

export default function Challenges() {
  return (
    <section
      //   className="drag-item py-6 rounded-lg min-w-[526px] max-w-[526px]"
      className="drag-item md:p-6 md:rounded-lg min-w-fit space-y-8 md:border-0 border-b border-black px-4 py-8 rounded-none"
      data-nav="Product Design"
    >
      <div className="flex flex-col min-w-[526px] max-w-[526px] gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <h4 className="text-base">I. CHALLENGES</h4>
            <Image
              src="/title_arrow.svg"
              alt="Title arrow"
              width={14}
              height={14}
            />
          </div>
        </div>
        <h2 className="text-3xl font-medium">
          Overcoming Token Vesting Challenges in Web3 Projects
        </h2>
        <p className="text-base font-normal">
          Web3 founders face challenges in token vesting: defining terms,
          writing/deploying contracts, funding, and claiming tokens. This
          error-prone manual process, lacking transparency and efficiency,
          complicates token management and hinders stakeholder trust.
        </p>
        <Image
          src="/projects/vtvl/i_challenges.png"
          alt="Title arrow"
          width={526}
          height={250}
          className="object-cover rounded-lg pt-8"
        />
      </div>
    </section>
  );
}
