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
    <section className="relative min-h-[calc(100vh-74px)] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/hero-section.webp"
        alt="Hero background"
        width={1570}
        height={800}
        className="absolute right-[-120px] min-h-[800px] -bottom-30 z-0 object-cover object-center scale-90"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1240px] items-start px-5 pt-20 md:px-8 md:pt-24">
        <div className="max-w-[580px] text-white">
          <div
            className="mb-8 inline-block p-[2px] rounded"
            style={{
              border: "2px solid",
              borderImageSlice: 1,
              borderWidth: "2px",
              borderImageSource:
                "linear-gradient(to right, #1CCDE6, #9ED473, #DBD633)",
            }}
          >
            <div className=" inline-block font-semibold px-4 py-2 text-[12px] tracking-[3px] bg-gradient-to-r from-[#1CCDE6] via-[#9ED473] to-[#DBD633] bg-clip-text text-transparent">
              THE LEADING PROP TRADING FIRM
            </div>
          </div>

          <h1 className="mb-10 text-[48px] font-semibold leading-[58px] md:leading-[74px]">
            Empowering Ambitious <br />
            Traders to Succeed
          </h1>

          <ButtonGradient className="mb-10 px-8 py-3 text-[16px] font-medium">
            Start Challenge
          </ButtonGradient>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[14px] text-gray-300">
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
