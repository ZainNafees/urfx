import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const cards = [
  {
    id: 1,
    title: "Guaranteed Payouts",
    description:
      "Receive your payment within 24 hours, or we'll add an extra $1,000 to your earnings!",
    image: "/assets/images/phone1.png",
  },
  {
    id: 2,
    title: "Best Trading Conditions",
    description:
      "Transforming trading journeys globally through industry-leading resources.",
    image: "/assets/images/phone2.png",
  },
  {
    id: 3,
    title: "Best Trading Platforms",
    description:
      "Our MO licenses and tech boost experience, security, and efficiency.",
    image: "/assets/images/phone3.png",
  },
];

const ReliableCardsSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1240px] px-5 py-20 text-white md:px-8">
      <div className="pointer-events-none absolute -left-8 top-28 h-72 w-72 bg-[radial-gradient(circle,rgba(28,205,230,0.26)_0%,rgba(0,0,0,0)_72%)] blur-2xl" />
      <div className="pointer-events-none absolute left-52 top-32 h-72 w-72 bg-[radial-gradient(circle,rgba(219,214,51,0.24)_0%,rgba(0,0,0,0)_72%)] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-[700px] text-center">
        <h2 className="text-[44px] font-semibold leading-[1.08] md:text-[56px]">
          Trade with the Most
          <br />
          Reliable Prop Firm
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-6 text-gray-400">
          Reliable and swift, our service ensures precision and stability,
          building trust with every interaction.
        </p>
      </div>

      <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.id} className="group relative bg-white/[0.08] p-[1px]">
            <article className="relative flex h-full min-h-[390px] flex-col overflow-hidden bg-[linear-gradient(180deg,#1b1b1b_0%,#0f0f0f_100%)] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(28,205,230,0.28)_0%,rgba(17,20,24,0.5)_45%,rgba(219,214,51,0.24)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,205,230,0.22)_0%,rgba(219,214,51,0.22)_100%)] opacity-0 transition duration-300 group-hover:opacity-100 z-10" />
              <div className="relative z-10 mb-5 flex h-[200px] items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="size-[250px] md:size-[300px] 2k:size-[410px] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]"
                />
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-[42px] font-semibold leading-[1.03] tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-6 text-gray-300">
                  {card.description}
                </p>
              </div>
            </article>

            <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-10 bg-[#1CCDE6] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[#1CCDE6] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-10 bg-[#1CCDE6] opacity-0 transition duration-300 group-hover:opacity-100" />

            <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-10 bg-[#DBD633] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-[#DBD633] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute right-0 bottom-0 h-[2px] w-10 bg-[#DBD633] opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <ButtonGradient className="px-8 py-3 text-base font-medium">
          Start Challenge
        </ButtonGradient>
      </div>
    </section>
  );
};

export default ReliableCardsSection;
