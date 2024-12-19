import MyExperience from './MyExperience';

const experiencesData = [
  {
    logo: '/projects/logo/vtvl_logo.svg',
    company: 'VTVL',
    role: 'Product Designer',
    products: '3',
    market: 'B2B, B2C, SaaS, Web3',
    responsibilities: 'UX/UI, Prototyping, Design System, Branding, Mentorship',
    year: '2022-2024',
  },
  {
    logo: '/projects/logo/vai_logo.svg',
    company: 'VAI Marketing',
    role: 'Staff Digital Designer',
    products: '10+',
    market: 'B2C, Blockchain, Crypto',
    responsibilities: 'UX/UI, Prototyping, Design System, Branding, Mentorship',
    year: '2021-2022',
  },
  {
    logo: '/projects/logo/aym_logo.svg',
    company: 'AYM Commerce',
    role: 'Senior Digital Designer',
    products: '2',
    market: 'B2C, Retail',
    responsibilities: 'UX/UI, Digital, Branding, Mentorship',
    year: '2017-2019',
  },
  {
    logo: '/projects/logo/grayling_logo.png',
    company: 'Grayling',
    role: 'Digital Designer, Web Developer',
    products: '10+',
    market: 'B2B, B2C',
    responsibilities: 'UX/UI, Prototyping, Design System, Branding, Mentorship',
    year: '2017-2019',
  },
  {
    logo: '/projects/logo/npm_logo.png',
    company: 'New Perspective Media',
    role: 'Digital Designer, Web Developer',
    products: '5+',
    market: 'B2C',
    responsibilities: 'UX/UI, Prototyping, Design System, Branding, Mentorship',
    year: '2016-2017',
  },
  {
    logo: '/projects/logo/micropolis_logo.png',
    company: 'Micropolis',
    role: 'UX/UI, Front-end Development',
    products: '2',
    market: 'B2B',
    responsibilities: 'UX/UI, Prototyping, Design System, Branding, Mentorship',
    year: '2015-2016',
  },
  {
    logo: '/projects/logo/ripplewerkz_logo.png',
    company: 'Ripplewerkz',
    role: 'UX/UI Designer',
    products: '10+',
    market: 'B2B',
    responsibilities: 'UX/UI, Prototyping, Design System, Branding, Mentorship',
    year: '2012-2015',
  },
];

export default function Experiences() {
  return (
    <>
      {experiencesData.map((experience, index) => (
        <MyExperience
          key={index} // Add a unique key for each item
          logo={experience.logo}
          company={experience.company}
          role={experience.role}
          products={experience.products}
          market={experience.market}
          responsibilities={experience.responsibilities}
          year={experience.year}
        />
      ))}
    </>
  );
}
