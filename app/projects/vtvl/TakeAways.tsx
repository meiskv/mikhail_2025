import Image from 'next/image';

export default function TakeAways() {
  return (
    <section
      className="drag-item flex flex-col p-6 rounded-lg min-w-fit"
      data-nav=""
    >
      <div className="flex flex-col justify-start pr-12">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">
            VI. KEY TAKEAWAYS
          </h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <div className="min-w-[526px] max-w-[952px]">
          <h2 className="mt-4 text-3xl font-medium">
            Personal Insights from Designing a Web3 Product
          </h2>
          <p className="text-lg font-normal max-w-full mt-4">
            Designing a Web3 product has been a transformative experience. The
            complexities of blockchain technology, like wallet integration and
            token management, highlighted the importance of constant team
            communication, especially with engineers, to ensure feasible
            solutions.
          </p>
          <p className="text-lg font-normal max-w-full mt-4">
            Staying updated on blockchain systems, rigorous testing, and user
            feedback reinforced the value of a user-centered approach.
            Flexibility was essential, as customer needs often dictated
            requirements. This journey deepened my understanding of
            adaptability, research, and collaboration in creating impactful Web3
            products.
          </p>
        </div>
      </div>
    </section>
  );
}
