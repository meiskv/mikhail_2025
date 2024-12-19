import Image from 'next/image';

interface TitleBannerProps {
  title: string;
  backgroundText: string;
}

export default function TitleBanner({
  title,
  backgroundText,
}: TitleBannerProps) {
  return (
    <div className="relative overflow-hidden md:h-24 h-8 flex items-center justify-start mb-8">
      {/* Foreground Content */}
      <div className="flex items-center gap-2 z-10">
        <h1 className="text-base">{title}</h1>
        <Image
          src="/title_arrow.svg"
          alt="Title arrow"
          width={14}
          height={14}
        />
      </div>

      {/* Background Content */}
      <h1 className="absolute top-0 left-0 w-full md:h-24 h-7 text-[#757575] uppercase font-thin md:text-8xl text-5xl whitespace-nowrap opacity-10 flex items-center">
        {backgroundText}
      </h1>
    </div>
  );
}
