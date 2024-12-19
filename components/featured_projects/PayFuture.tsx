import Image from 'next/image';
import Link from 'next/link';

export default function PayFuture() {
  return (
    <div className="border border-black rounded-xl overflow-hidden">
      <div className="p-4 md:p-6 bg-black text-white flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="md:text-lg text-base">PayFuture</h1>
          <h2 className="md:text-lg text-base">2022-2024</h2>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-sm">
          <Image
            src="/projects/payfuture_hero.png"
            alt="Responsive Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="word-wrap">
          A web3 SaaS specializing in portfolio and token management solutions.
        </p>
      </div>
      <div className="flex justify-between py-4 px-6">
        <Link className="uppercase underline font-bold text-sm" href="#">
          Read Full Case Study
        </Link>
        →
      </div>
    </div>
  );
}
