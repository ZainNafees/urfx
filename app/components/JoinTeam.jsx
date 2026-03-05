import ButtonGradient from "./ButtonGradient";

const JoinTeam = () => {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-white md:px-8">
      <div className="absolute inset-0 " />
      <div className="relative mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
        <h2 className="text-[32px] font-semibold leading-tight md:text-[56px]">
          Join our Team of Experienced Traders
        </h2>
        <p className="mt-6 max-w-[980px] text-[16px] leading-relaxed text-[#B7B7B7] md:text-[30px] md:leading-tight">
          Traders can take their trading to the next level by refining their
          skills and strategies, setting themselves up for success in the
          competitive financial markets. By doing so, they can embark on their
          journey to become funded prop traders, unlocking new opportunities and
          challenges that come with professional trading careers.
        </p>
        <div className="mt-10">
          <ButtonGradient className="px-8 py-3 text-base font-medium">
            Start Challenge
          </ButtonGradient>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
