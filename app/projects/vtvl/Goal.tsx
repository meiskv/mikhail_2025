import Image from 'next/image';

export default function Goal() {
  return (
    <section
      // className="drag-item flex flex-col md:flex-row md:p-6 rounded-lg min-w-fit"
      className="drag-item flex flex-col md:flex-row md:p-6 md:rounded-lg min-w-fit space-y-8 md:border-0 border-b border-black px-4 py-8 rounded-none"
      data-nav=""
    >
      <div className="flex flex-col justify-end md:pr-40 min-w-[526px] max-w-[526px] gap-6">
        <div className="flex items-center space-x-2">
          <h4 className="text-base">II. GOAL</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h2 className="text-3xl font-medium">
          Overcoming Token Vesting Challenges in Web3 Projects
        </h2>
        <p className="text-base font-normal max-w-full">
          To provide Web3 founders with a easy, secure, efficient, and
          transparent solution for managing token vesting. By leveraging VTVL's
          automated platform, projects can eliminate manual errors, reduce
          security risks, and enhance real-time visibility for stakeholders.
        </p>
      </div>
      <div className="relative w-full aspect-[1/1]">
        <Image
          src="/projects/vtvl/ii_goal.png"
          alt="Title arrow"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
