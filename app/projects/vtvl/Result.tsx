import Image from 'next/image';

export default function Result() {
  return (
    <section
      className="drag-item flex flex-col p-6 rounded-lg min-w-fit"
      data-nav=""
    >
      <div className="flex flex-col justify-start pr-12">
        <div className="flex items-center space-x-2">
          <h4 className="text-base">V. RESULTS</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <div className="min-w-[526px] max-w-[526px]">
          <h2 className="mt-4 text-3xl font-medium">
            Optimizing User Experience and Operational Efficiency
          </h2>
          <p className="text-base font-normal max-w-full mt-4">
            The UX/UI improvements have significantly enhanced user efficiency
            and satisfaction, evidenced by faster task completion, increased
            engagement, and higher user retention rates.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
        <li className="md:text-center text-left">
          <h1 className="md:text-6xl text-5xl leading-tight font-semibold">
            83%
          </h1>
          <p>Reduction in Administrative Time</p>
        </li>
        <li className="md:text-center text-left">
          <h1 className="md:text-6xl text-5xl leading-tight font-semibold">
            83%
          </h1>
          <p>Increase in Security Compliance</p>
        </li>
        <li className="md:text-center text-left">
          <h1 className="md:text-6xl text-5xl leading-tight font-semibold">
            70%
          </h1>
          <p>Faster Token Distribution</p>
        </li>
        <li className="md:text-center text-left">
          <h1 className="md:text-6xl text-5xl leading-tight font-semibold">
            95%
          </h1>
          <p>Reduction in Operational Errors</p>
        </li>
        <li className="md:text-center text-left">
          <h1 className="md:text-6xl text-5xl leading-tight font-semibold">
            80%
          </h1>
          <p>Improvement in Stakeholder Transparency</p>
        </li>
      </ul>
    </section>
  );
}
