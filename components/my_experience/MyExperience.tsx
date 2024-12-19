import Image from 'next/image';

interface MyExperience {
  logo: string;
  company: string;
  role: string;
  products: string;
  market: string;
  responsibilities: string;
  year: string;
}

export default function MyExperience({
  logo,
  company,
  role,
  products,
  market,
  responsibilities,
  year,
}: MyExperience) {
  return (
    <ul className="md:grid md:grid-cols-6 md:gap-x-4 md:items-center md:py-3 md:border-b md:border-dashed border-black space-y-2">
      <li className="flex items-center col-span-1 border-b md:border-0 border-black pb-3 md:pb-0">
        <Image src={logo} alt="VTVL Logo" width={32} height={32} />
        <h1 className="pl-2 font-semibold text-base">{company}</h1>
      </li>
      <li className="font-semibold col-span-1">{role}</li>
      <li className="hidden md:block col-span-1">{products}</li>
      <li className="hidden md:block col-span-1">{market}</li>
      <li className="col-span-1">{responsibilities}</li>
      <li className="col-span-1 md:text-right">{year}</li>
    </ul>
  );
}
