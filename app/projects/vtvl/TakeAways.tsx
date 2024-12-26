import Image from 'next/image';

export default function TakeAways() {
  return (
    <section
      className="drag-item flex flex-col p-6 rounded-lg min-w-fit"
      data-nav=""
    >
      <div className="flex flex-col justify-start pr-12">
        <div className="flex items-center space-x-2">
          <h4 className="text-base">VI. KEY TAKEAWAYS</h4>
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
            Designing a Web3 product has been an eye-opening journey. The
            inherent complexities of Web3 technology pose significant
            challenges, even for tech-savvy users. Tasks like connecting
            wallets, managing tokens, and vesting tokens can be daunting.
            Throughout this project, I learned the immense value of constant
            communication with my team, especially the engineers. This
            collaboration ensured that our design proposals were always feasible
            with the resources at hand.
          </p>
          <p className="text-lg font-normal max-w-full mt-4">
            Keeping myself updated and diving deep into various blockchain
            chains and wallets was crucial. I realized that thorough testing was
            vital to navigating the intricate nature of blockchain technology.
            Regularly seeking user feedback was instrumental in refining our
            designs, reinforcing the importance of a user-centered approach.
          </p>
          <p className="text-lg font-normal max-w-full mt-4">
            Managing expectations extended beyond the realm of design; it
            required ongoing coordination with engineers about logistics.
            Flexibility became a crucial skill, as many requirements were driven
            by customer needs rather than just product specifications. This
            experience emphasized the necessity of adaptability, in-depth
            research, and clear, constant communication in successfully
            designing and implementing Web3 products. This journey has truly
            enriched my understanding and skills in the dynamic field of Web3.
          </p>
        </div>
      </div>
    </section>
  );
}
