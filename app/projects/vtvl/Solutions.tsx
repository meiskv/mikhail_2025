import Image from 'next/image';
import Solution from './Solution';

const solutionsData = {
  '1': {
    number: '01',
    title: 'Simplifying Token Minting and Import Process',
    imageSrc: '/projects/vtvl/sol_01.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-simplifying-token-minting-and-import-process-by-mikhail-villamor-product-designer',
  },
  '2': {
    number: '02',
    title: 'Streamlining Token Vesting for Web3 Projects',
    imageSrc: '/projects/vtvl/sol_02.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-token-management-solutions-case-study-by-mikhail-villamor-founding-product-designer',
  },
  '3': {
    number: '03',
    title: 'Streamlining the Claims Process for Token Recipients',
    imageSrc: '/projects/vtvl/sol_03.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-streamlining-the-claims-process-for-token-recipients-by-mikhail-villamor-product-designer',
  },
  '4': {
    number: '04',
    title: 'Enhancing Withdrawn Token Visualization and Monitoring',
    imageSrc: '/projects/vtvl/sol_04.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-enhancing-withdrawn-token-visualization-and-monitoring-by-mikhail-villamor-product-designer',
  },
  '5': {
    number: '05',
    title: 'Visualizing Key Metrics with Real-Time Charts',
    imageSrc: '/projects/vtvl/sol_05.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-visualizing-key-metrics-with-real-time-charts-by-mikhail-villamor-product-designer',
  },
  '6': {
    number: '06',
    title: 'Simplifying Task Management with Dynamic Solutions',
    imageSrc: '/projects/vtvl/sol_06.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-simplifying-task-management-with-dynamic-solutions-by-mikhail-villamor-product-designer',
  },
  '7': {
    number: '07',
    title: 'Simplifying Transaction History for Better Clarity',
    imageSrc: '/projects/vtvl/sol_07.svg',
    caseStudyLink:
      'https://mikhailvillamor.webflow.io/vtvl-simplifying-transaction-history-for-better-clarity-by-mikhail-villamor-product-designer',
  },
};

export default function Solutions() {
  return (
    <section
      //   className="drag-item flex flex-row p-6 rounded-lg min-w-fit"
      className="drag-item flex flex-col md:flex-row md:p-6 md:rounded-lg min-w-fit space-y-8 md:border-0 border-b border-black px-4 py-8 rounded-none"
      data-nav=""
    >
      <div className="flex flex-col justify-end md:pr-12 gap-6">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">IV. SOLUTIONS</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <div className="min-w-[526px] max-w-[526px]">
          <h2 className="mt-4 text-3xl font-medium">
            VTVL's Comprehensive Solution for Token Vesting
          </h2>
          <p className="text-base font-normal max-w-full mt-4">
            VTVL simplifies and secures token vesting with automated schedules,
            real-time tracking, and a unified dashboard. Advanced features like
            organizational accounts, multisig support, and rigorous security
            audits ensure a seamless and trustworthy experience, allowing Web3
            projects to focus on growth.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:px-20 gap-12">
        {Object.values(solutionsData).map((solution) => (
          <Solution
            key={solution.number}
            number={solution.number}
            title={solution.title}
            imageSrc={solution.imageSrc}
            caseStudyLink={solution.caseStudyLink}
          />
        ))}
      </div>
    </section>
  );
}
