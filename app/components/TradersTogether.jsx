import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const TradersTogether = () => {
  return (
    <section className="w-full bg-black px-5 md:px-8">
      <div className="mx-auto max-w-[1240px] border-b border-[#27340d] bg-[radial-gradient(120%_140%_at_88%_34%,rgba(206,234,66,0.22)_0%,rgba(0,0,0,0)_45%),#020305]">
        <div className="relative flex min-h-[230px] flex-col items-center text-center justify-center gap-10 overflow-hidden px-6 py-8 md:min-h-[240px] md:flex-row md:items-center md:justify-between md:text-left md:px-14">
          
          {/* Left Content */}
          <div className="relative z-10 max-w-[530px] flex flex-col items-center md:items-start">
            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-white md:text-[40px]">
              We&apos;re bringing the best and brightest traders together.
            </h2>

            <ButtonGradient
              type="button"
              className="mt-7 py-3 px-6"
            >
              Join Community
            </ButtonGradient>
          </div>

          {/* Image */}
          <div className="pointer-events-none relative z-10 flex w-full justify-center md:justify-end md:w-auto">
            <Image
              src="/assets/icons/plane.png"
              alt="Paper plane outline"
              width={230}
              height={100}
              className="w-[180px] md:w-[230px] object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradersTogether;