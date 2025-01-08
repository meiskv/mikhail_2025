import Image from 'next/image';

export default function BrandingVideos() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav=""
    >
      <div className="flex flex-col min-w-[546px] max-w-[546px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">Promo Video</h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Visual Storytelling in Motion
        </h1>
        <p className="text-base font-normal">
          The VTVL promo video combines sleek animations and clear messaging to
          demonstrate the platform’s core features. Using the brand’s color
          palette and typography, the video communicates ease of use, security,
          and scalability with dynamic transitions and engaging visuals.
        </p>
      </div>

      <div className="relative w-full">
        <video
          id="promo-video"
          loop
          playsInline
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate nopictureinpicture"
          className="max-h-[50vh] overflow-hidden rounded-lg"
        >
          <source
            src="https://res.cloudinary.com/deiadvpqb/video/upload/v1736338326/LP_Animation_R8_oajedp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative w-full flex items-center  justify-center">
        <video
          id="promo-video"
          loop
          playsInline
          controls
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate nopictureinpicture"
          className="max-h-[50vh] overflow-hidden rounded-lg"
        >
          <source
            src="https://res.cloudinary.com/deiadvpqb/video/upload/v1736335770/VTVL-PromoVideo-R7_ykpdgm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
