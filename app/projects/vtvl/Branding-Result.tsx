import Image from 'next/image';

export default function BrandingResult() {
  return (
    <section
      // className="drag-item flex flex-col md:flex-row md:p-6 rounded-lg min-w-fit"
      className="drag-item flex flex-col md:flex-row md:p-6 md:rounded-lg min-w-fit space-y-8 md:border-0 border-b border-black px-4 py-8 rounded-none gap-14"
      data-nav="Result"
    >
      <div className="flex flex-col justify-end min-w-[526px] max-w-[526px] gap-6">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">Result</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h2 className="text-3xl font-medium">
          A Recognizable and Scalable Identity
        </h2>
        <p className="text-base font-normal max-w-full">
          A Recognizable and Scalable Identity The new branding elevated VTVL as
          a recognizable leader in the Web3 space. Its cohesive visual language
          resonates across all touchpoints, from dashboards and marketing
          materials to merchandise and social media. Users and stakeholders
          alike benefit from an identity that is professional yet approachable,
          reflecting the platform’s technical innovation and usability.
        </p>
        <h3 className="text-base font-medium">Key Outcomes:</h3>
        <ul className="list-disc list-inside">
          <li>
            Increased user engagement through cohesive, intuitive visuals.
          </li>
          <li>
            Improved trust and credibility in enterprise client partnerships.
          </li>
          <li>
            Elevated the brand’s presence in the Web3 ecosystem, fostering
            community growth.
          </li>
        </ul>
      </div>
    </section>
  );
}
