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
        src="/assets/images/bg-hero.png"
        alt="Hero background"
        width={1570}
        height={600}
        className="absolute right-[-120px] -bottom-30 z-0 object-cover object-center scale-90"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,8,14,0.9)_0%,rgba(4,8,14,0.55)_40%,rgba(4,8,14,0.25)_70%,rgba(4,8,14,0.1)_100%)]" />

      {/* Glow Effect */}
      <div className="absolute -left-28 bottom-0 z-10 h-[320px] w-[560px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,210,170,0.7)_0%,rgba(26,210,170,0.28)_45%,rgba(26,210,170,0)_78%)]" />
      <div className="absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-[#050910]/65 via-[#050910]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1240px] items-start px-5 pt-20 md:px-8 md:pt-24">
        <div className="max-w-[580px] text-white">
          <div className="mb-8 inline-block border border-[#16d4f4] px-4 py-2 text-[12px] tracking-[3px] bg-gradient-to-r from-[#DBD633] via-[#9ED473] to-[#1CCDE6] bg-clip-text text-transparent">
            THE LEADING PROP TRADING FIRM
          </div>

          <h1 className="mb-10 text-[48px] font-semibold leading-[58px] md:leading-[74px]">
            Empowering Ambitious <br />
            Traders to Succeed
          </h1>

          <ButtonGradient className="mb-10 px-8 py-3 text-[16px] font-medium shadow-lg shadow-yellow-100/50">
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
