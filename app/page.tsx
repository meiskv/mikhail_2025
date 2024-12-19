import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Separator from '@/components/mv_components/Separator';
import TitleBanner from '@/components/mv_components/TitleBanner';
import VTVL from '@/components/featured_projects/VTVL';
import VAI from '@/components/featured_projects/VAI';
import PayFuture from '@/components/featured_projects/PayFuture';
import Experiences from '@/components/my_experience/Experiences';
import ExperienceHeader from '@/components/my_experience/ExperienceHeader';
import PortfolioGridOverlay from '@/components/mv_components/PortfolioGridLayout';

export default function Home() {
  return (
    <div className="relative m-6">
      <main className="">
        <div className="flex justify-between border-b border-black pb-3">
          <div className="text-xl">MV</div>
          <ul className="flex flex-row w-full justify-end gap-4">
            <li>
              <Link href="#">Work</Link>
            </li>
            <li>
              <Link
                className="border-black border px-3 py-2 rounded-xl"
                href="#"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link className="border-l border-r border-black px-4" href="#">
                in
              </Link>
            </li>
            <li>
              <Link href="#">Hire me</Link>
            </li>
          </ul>
        </div>
        <div className="pt-12">
          <h1 className="uppercase md:text-7xl text-6xl font-semibold">
            Digital Product Designer
          </h1>
        </div>
        <div className="flex md:flex-col flex-row md:gap-y-12 md:py-20 py-10">
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-start-3 col-span-1  md:col-span-2 md:text-lg text-sm">
              <h5>End-to-end design</h5>
            </div>
            <div className="md:col-start-5 col-span-1 md:text-lg md:col-span-2 text-sm text-[#757575]">
              <h5>Design System</h5>
              <h5>Prototyping</h5>
            </div>
            <div className="md:col-start-7 col-span-1 md:col-span-2 md:text-lg text-sm">
              <h5>Digital+Branding</h5>
              <h5>Visual Design</h5>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-start-3 col-span-1  md:col-span-2 md:text-lg text-sm">
              <h5>In-house &</h5>
              <h5>agency experience</h5>
            </div>
            <div className="md:col-start-5 col-span-1 md:text-lg md:col-span-2 text-sm text-[#757575]">
              <h5>Cross-Functional</h5>
              <h5>Collaboration</h5>
            </div>
            <div className="md:col-start-7 col-span-1 md:col-span-2 md:text-lg text-sm">
              <h5>UX/UI Design</h5>
              <h5>Product Design</h5>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12">
          <Tabs
            defaultValue="anyone"
            className="relative rounded-sm h-auto bg-transparent col-start-6 col-end-11 col-span-full"
          >
            <div className="overflow-x-auto">
              <TabsList className="flex flex-row justify-stretch w-max bg-transparent p-0 m-0">
                <TabsTrigger value="anyone">✦ For anyone</TabsTrigger>
                <TabsTrigger value="recruiter">/Recruiters</TabsTrigger>
                <TabsTrigger value="founders">/Founders</TabsTrigger>
                <TabsTrigger value="designers">/Designers</TabsTrigger>
                <TabsTrigger value="engineers">/Engineers</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="anyone"
              className="md:text-3xl text-lg font-medium mt-4"
            >
              Hi! I’m a designer with over 10 years of experience in brand,
              product, and digital design. I love solving problems and building
              meaningful experiences.
            </TabsContent>
            <TabsContent
              value="recruiter"
              className="md:text-3xl text-lg font-medium mt-4"
            >
              I’m open to roles where I can focus on UX/UI, design systems, and
              collaboration.
            </TabsContent>
            <TabsContent
              value="founders"
              className="md:text-3xl text-lg font-medium mt-4"
            >
              I’m a hands-on designer who builds scalable designs and works
              closely with engineers. I’ve led teams, built systems, and love
              turning ideas into great products.
            </TabsContent>
            <TabsContent
              value="designers"
              className="md:text-3xl text-lg font-medium mt-4"
            >
              I focus on creating clean, user-friendly designs. From big ideas
              to small details, I collaborate to deliver work we can all be
              proud of.
            </TabsContent>
            <TabsContent
              value="engineers"
              className="md:text-3xl text-lg font-medium mt-4"
            >
              I’m a designer who codes. I’ve built this site and worked with
              tools like React, Next.js, and Tailwind. I focus on designs that
              are easy to build and scale.
            </TabsContent>
          </Tabs>
        </div>
        <Separator />
        <TitleBanner
          title="Featured"
          backgroundText="Featured Projects ✧ Featured Projects ✧ Featured Projects"
        />
        <div className="flex flex-col gap-4">
          <VTVL />
          <VAI />
          <PayFuture />
        </div>
        {/* Design Philosophy */}
        <Separator />
        <TitleBanner
          title="Design Philosophy"
          backgroundText="Values ✧ Values ✧ Values"
        />
        <div className="md:grid space-y-14 md:space-y-0 md:grid-cols-12">
          <h1 className="font-semibold text-5xl md:text-7xl uppercase col-span-5">
            Design is action-driven
          </h1>
          <div className="space-y-8 text-lg col-span-7">
            <p>
              For me, design is not static or just theory. It is dynamic,
              hands-on, and focused on creating real, meaningful change.
            </p>
            <p className="indent-24">
              I believe in responding quickly to challenges, learning as I go,
              and constantly evolving toward solutions that truly make an
              impact. It is not about rushing or taking shortcuts. It is about
              staying adaptable, agile, and always moving forward with purpose.
            </p>
          </div>
        </div>
        {/* Design Process */}
        <Separator />
        <TitleBanner
          title="Design Process"
          backgroundText="Workflow ✧ Workflow ✧ Workflow"
        />
        <div className="space-y-6">
          <div className="border border-black rounded-md p-6">
            <h1 className="uppercase font-semibold text-xl pb-4">
              1.0 Research
            </h1>
            <ul className="text-[#757575]">
              <li>/Problem Identification</li>
              <li>/Data Collection</li>
              <li>/Insights</li>
            </ul>
            <p className="text-base py-6">
              This phase focuses on identifying problems, collecting data, and
              gaining insights to establish a solid foundation for the project.
              Every decision stems from understanding the “why” and the needs of
              the users and stakeholders.
            </p>
          </div>
          <div className="border border-black rounded-md p-6">
            <h1 className="uppercase font-semibold text-xl pb-4">2.0 Define</h1>
            <ul className="text-[#757575]">
              <li>/Goal</li>
              <li>/Scope</li>
              <li>/Requirements</li>
            </ul>
            <p className="text-base py-6">
              Here, I set the direction by outlining clear goals, scope, and
              requirements. It’s about turning insights into actionable
              strategies to ensure alignment and focus for the next steps.
            </p>
          </div>
          <div className="border border-black rounded-md p-6">
            <h1 className="uppercase font-semibold text-xl pb-4">
              3.0 Ideation
            </h1>
            <ul className="text-[#757575]">
              <li>/Brainstorming</li>
              <li>/Prototypes</li>
              <li>/User Feedback</li>
            </ul>
            <p className="text-base py-6">
              This is where creativity takes center stage. I brainstorm,
              prototype, and gather user feedback to refine ideas into viable
              solutions. It’s about exploring and testing until the best concept
              emerges.
            </p>
          </div>
          <div className="border border-black rounded-md p-6">
            <h1 className="uppercase font-semibold text-xl pb-4">
              4.0 Implementation
            </h1>
            <ul className="text-[#757575]">
              <li>/Testing</li>
              <li>/Refinement</li>
              <li>/Delivery</li>
            </ul>
            <p className="text-base py-6">
              The final stage is all about execution. I focus on testing,
              refining, and delivering a polished solution that meets objectives
              while ensuring a seamless experience.
            </p>
          </div>
        </div>
        {/* Experience */}
        <Separator />
        <TitleBanner
          title="Experience"
          backgroundText="History ✧ History ✧ History"
        />
        <div className="space-y-0">
          <div className="md:py-6 space-y-8">
            {/* Header */}

            <ExperienceHeader />
            {/* Content */}
            <Experiences />
          </div>
        </div>
        <Separator />
        <div className="bg-[#181B24] rounded-xl text-white p-6 text-center">
          <div className="space-y-1">
            <h1 className="text-sm">
              Available worldwide ✦ Based in Melbourne
            </h1>
            <h1 className="uppercase text-sm">Last update on December 2024</h1>
          </div>
          <div className="py-24">
            <h1 className="font-semibold text-5xl uppercase">
              Have a project in mind?
            </h1>
          </div>
          <ul className="flex justify-between">
            <li className="border border-white rounded-md py-1 px-2">
              <Link href="#" className="underline text-sm">
                Phone
              </Link>
            </li>
            <li className="border border-white rounded-md py-1 px-2">
              <Link href="#" className="underline text-sm">
                LinkedIn
              </Link>
            </li>
            <li className="border border-white rounded-md py-1 px-2">
              <Link href="#" className="underline text-sm">
                Dribble
              </Link>
            </li>
            <li className="border border-white rounded-md py-1 px-2">
              <Link href="#" className="underline text-sm">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between py-6 border-b border-black">
        <div>©2017 — 2024</div>
        <div className="uppercase">
          CRAFTED by <b className="font-semibold">Mikhail Villamor</b>
        </div>
      </footer>
      <PortfolioGridOverlay />
    </div>
  );
}
