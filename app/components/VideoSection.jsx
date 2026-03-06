import Image from "next/image";

const VideoSection = () => {
  return (
    <section className="mx-auto w-full px-5 py-10 text-white md:px-8">
    

        {/* video image / embed placeholder */}
        <div className="relative aspect-video mx-auto max-w-[1240px]">
          <Image
            src="/assets/images/video-sec.png"
            alt="demo video"
            fill
            className="object-cover max-h-[616px]"
            priority
          />
        </div>

    </section>
  );
};

export default VideoSection;
