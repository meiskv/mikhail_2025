import Image from 'next/image';

export default function Discovery() {
  return (
    <section
      //   className="drag-item flex flex-col md:p-6 rounded-lg min-w-fit"
      className="drag-item md:p-6 md:rounded-lg min-w-fit space-y-8 md:border-0 border-b border-black px-4 py-8 rounded-none"
      data-nav=""
    >
      <div className="flex flex-col justify-start md:pr-12 min-w-[526px] max-w-[526px] gap-6">
        <div className="flex items-center space-x-2">
          <h4 className="text-base">III. DISCOVERY</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h2 className="text-3xl font-medium">
          We began by engaging with founders and stakeholders to identify their
          most significant problems and needs.
        </h2>
        <p className="text-base font-normal max-w-full">
          We engaged with founders to understand how they handle token vesting
          and uncovered critical pain points.
        </p>
      </div>
      <div className="flex justify-around md:flex-row flex-col gap-10 md:pt-12">
        <div className="flex md:flex-row flex-col md:justify-center md:items-center items-start gap-8">
          <div className="md:text-center">
            <h1 className="md:text-8xl text-6xl leading-tight font-semibold">
              80%
            </h1>
            <p>Manual Spreadsheets</p>
          </div>
          <ul className="list-none space-y-3 text-base font-normal">
            <li>✦ Slow and tedious processes</li>
            <li>✦ Lack of transparency</li>
            <li>✦ Error-prone operations</li>
            <li>✦ Non-scalability</li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col md:justify-center md:items-center items-start gap-8">
          <div className="md:text-center">
            <h1 className="md:text-8xl text-6xl leading-tight font-semibold">
              20%
            </h1>
            <p>Internal Solutions</p>
          </div>
          <ul className="list-none space-y-3 text-base font-normal">
            <li>✦ Take away developer resources</li>
            <li>✦ Incur high auditing costs</li>
            <li>✦ Suffer from poor maintenance</li>
            <li>✦ Bad UI/UX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
