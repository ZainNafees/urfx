import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const LandingSection = () => {
  const featuresData = [
    {
      title: "No SL Required",
      icon: "/assets/icons/tick.png",
    },
    {
      title: "Performance Protect",
      icon: "/assets/icons/tick.png",
    },
    {
      title: "Instant Credentials",
      icon: "/assets/icons/tick.png",
    },
    {
      title: "100% Refund",
      icon: "/assets/icons/tick.png",
    },
    {
      title: "Martingale & Grid Allowed",
      icon: "/assets/icons/tick.png",
    },
    {
      title: "Unlimited Days Available",
      icon: "/assets/icons/tick.png",
    },
  ];
  return (
    <section className="relative w-full overflow-hidden min-h-[860px] sm:min-h-[940px] md:min-h-[calc(100vh-74px)]">
      {/* Desktop Background Image */}
      <Image
        src="/assets/images/hero-section.webp"
        alt="Hero background"
        width={1570}
        height={800}
        className="absolute right-[-120px] min-h-[800px] -bottom-30 z-0 hidden object-cover object-center scale-90 md:block"
      />

      {/* Mobile Background Image */}
      <Image
        src="/assets/images/hero-mobile.webp"
        alt="Hero mobile background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-bottom md:hidden"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1240px] items-start px-4 pt-6 sm:px-5 sm:pt-7 md:px-8 md:pt-24">
        <div className="max-w-[580px] text-white">
          <div
            className="mb-5 inline-block rounded p-[2px] sm:mb-8"
            style={{
              border: "2px solid",
              borderImageSlice: 1,
              borderWidth: "2px",
              borderImageSource:
                "linear-gradient(to right, #1CCDE6, #9ED473, #DBD633)",
            }}
          >
            <div className="inline-block bg-gradient-to-r from-[#1CCDE6] via-[#9ED473] to-[#DBD633] bg-clip-text px-3 py-2 text-[10px] font-semibold tracking-[2px] text-transparent sm:px-4 sm:text-[12px] sm:tracking-[3px]">
              THE LEADING PROP TRADING FIRM
            </div>
          </div>

          <h1 className="mb-6 text-[32px] md:text-[48px] font-semibold leading-[1.08] sm:mb-10 md:leading-[74px]">
            Empowering Ambitious <br />
            Traders to Succeed
          </h1>

          <ButtonGradient className="mb-8 px-6 py-3 text-[16px] font-medium sm:mb-10 sm:px-8">
            Start Challenge
          </ButtonGradient>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-[16px] leading-6 text-gray-300 sm:gap-x-8 sm:gap-y-5 sm:text-[14px]">
            {featuresData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={16}
                  height={16}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
