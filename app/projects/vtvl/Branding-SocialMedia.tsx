import Image from 'next/image';

export default function BrandingSocialMedia() {
  return (
    <section
      className="drag-item flex flex-col md:flex-row md:p-0 md:rounded-lg min-w-fit md:border-0 border-b border-black py-8 rounded-none md:gap-12"
      data-nav="Digital"
    >
      <div className="flex flex-col min-w-[546px] max-w-[746px] gap-6 md:pl-6 md:pt-6 pl-4 pt-4 pr-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-base uppercase text-[#757575]">
            Social Media and Marketing Assets
          </h4>
          <Image
            src="/title_arrow.svg"
            alt="Title arrow"
            width={14}
            height={14}
          />
        </div>
        <h1 className="text-3xl leading-tight font-medium">
          Engaging the Web3 Community with Bold Visuals
        </h1>
        <p className="text-base font-normal">
          VTVL’s social media visuals leverage its brand language grid system
          for clarity and hierarchy. Posts highlight key messaging, using a mix
          of engaging animations, product visuals, and strategic use of the
          Electric Yellow accent to draw attention.
        </p>
        <p className="text-base font-normal">
          Dynamic animations and engaging layouts showcase VTVL’s innovation,
          while the strategic use of gradients adds depth and modernity. These
          assets create a visually cohesive identity, resonating with the Web3
          audience and reinforcing VTVL’s focus on clarity and technical
          precision.
        </p>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_social_media.svg"
          alt="VTVL Social Media"
          width={1146}
          height={565}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
      <div className="relative h-full w-full grid place-items-center">
        <video
          id="promo-video"
          loop
          playsInline
          controls
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate nopictureinpicture"
          className="max-h-[50vh] aspect-video rounded-lg"
        >
          <source
            src="https://res.cloudinary.com/deiadvpqb/video/upload/v1736336435/Twitter-Video_cdaecl.mp4"
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
            src="https://res.cloudinary.com/deiadvpqb/video/upload/v1736335763/Marketing_Promo_Video_qgbq5k.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="relative w-full h-full aspect-[16/9] flex items-center justify-center"
        data-nav=""
      >
        <Image
          src="/projects/vtvl/branding_social_media_02.svg"
          alt="VTVL Social Media"
          width={1439}
          height={565}
          className="object-fill w-full max-h-[50vh] rounded-lg"
        />
      </div>
    </section>
  );
}
