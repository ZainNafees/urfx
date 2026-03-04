import Image from "next/image";

const LandingSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/assets/images/bg-hero.png"
        alt="Hero background"
        width={1570}
        height={600}
        className="absolute left-32 -bottom-12 z-0 object-cover object-center scale-90"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,8,14,0.9)_0%,rgba(4,8,14,0.55)_40%,rgba(4,8,14,0.25)_70%,rgba(4,8,14,0.1)_100%)]" />

      {/* Glow Effect */}
      <div className="absolute -left-28 bottom-0 z-10 h-[320px] w-[560px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,210,170,0.7)_0%,rgba(26,210,170,0.28)_45%,rgba(26,210,170,0)_78%)]" />
      <div className="absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-[#050910]/65 via-[#050910]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] items-center px-16">
        <div className="max-w-[580px] text-white">
          
          <div className="mb-8 inline-block border border-[#16d4f4] px-4 py-2 text-[12px] tracking-[3px] text-[#16d4f4]">
            THE LEADING PROP TRADING FIRM
          </div>

          <h1 className="mb-10 text-[52px] font-semibold leading-[64px]">
            Empowering Ambitious <br />
            Traders to Succeed
          </h1>

          <button className="mb-10 border border-[#16d4f4] px-8 py-3 text-[16px] font-medium transition-all duration-300 hover:bg-[#16d4f4] hover:text-black">
            Start Challenge
          </button>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[14px] text-gray-300">
            <div>No SL Required</div>
            <div>Performance Protect</div>
            <div>Instant Credentials</div>
            <div>100% Refund</div>
            <div>Martingale & Grid Allowed</div>
            <div>Unlimited Days Available</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingSection;