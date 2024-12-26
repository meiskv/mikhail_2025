import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SolutionCardProps {
  number: string;
  title: string;
  imageSrc: string;
  caseStudyLink: string;
}

export default function SolutionCard({
  number,
  title,
  imageSrc,
  caseStudyLink,
}: SolutionCardProps) {
  return (
    <div className="flex md:flex-row flex-col md:pr-12 gap-6">
      <div className="min-w-[268px] max-w-[268px] space-y-3 flex flex-col justify-end">
        <h3 className="text-2xl font-medium space-y-0">
          <span className="text-2xl font-thin italic block">{number}.</span>
          {title}
        </h3>
        <Link href={caseStudyLink}>
          <Button
            variant="outline"
            className="border border-black p-3 text-base w-full"
          >
            View Case Study
          </Button>
        </Link>
      </div>
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={imageSrc}
          alt={`Solution ${number}`}
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
