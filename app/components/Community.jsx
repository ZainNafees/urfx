import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const statCards = [
  {
    id: 1,
    value: "105M+",
    label: "Total Rewards",
    img: "/assets/icons/moneybank.png",
  },
  { id: 2, value: "97k+", label: "Traders", img: "/assets/icons/user.png" },
  {
    id: 3,
    value: "5hrs",
    label: "Avg. Rewards Time",
    img: "/assets/icons/clock.png",
  },
  { id: 4, value: "170+", label: "Countries", img: "/assets/icons/world.png" },
];

const Community = () => {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-5 py-36 text-white md:px-8">
      <h2 className="text-center text-[20px] font-bold uppercase tracking-wide md:text-[28px]">
        URFX Community and Support
      </h2>

      <div className="mt-12 flex flex-col gap-4 lg:flex-row">
        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-2">
          {statCards.map((item) => (
            <article
  key={item.id}
  className="
    flex flex-col sm:flex-row
    items-center sm:items-center
    text-center sm:text-left
    gap-4 sm:gap-0
    min-h-[150px] sm:min-h-[164px]
    bg-[linear-gradient(120deg,#1f2528_0%,#15181b_100%)]
    px-5 py-6
  "
>
  {/* Text Section */}
  <div className="flex-1">
    <h3 className="text-[28px] sm:text-[40px] font-semibold leading-none">
      {item.value}
    </h3>
    <p className="mt-2 sm:mt-3 text-[14px] sm:text-[20px] text-gray-400">
      {item.label}
    </p>
  </div>

  {/* Image */}
  <Image
    src={item.img}
    alt={item.label}
    width={110}
    height={110}
    className="
      h-[70px] w-[70px]
      sm:h-[110px] sm:w-[110px]
      object-contain
    "
  />
</article>
          ))}
        </div>

        <article className="flex w-full flex-col justify-between bg-[linear-gradient(120deg,#d9df37_0%,#24d6f4_100%)] p-8 text-black lg:w-[46%]">
          <div>
            <p className="text-[18px] font-medium uppercase text-black/55">
              Serving Over 1.2M+ Members
            </p>
            <h3 className="mt-4 text-[24px] font-semibold leading-tight">
              24/7 Pro Support
            </h3>
            <p className="mt-4 max-w-[390px] text-[18px] leading-tight text-black/70">
              With a 50-second average response time, we&apos;re a prop trading
              firm that truly cares about our traders.
            </p>
          </div>
          <div className=" self-end">
            <div className="self-end w-[195px] h-[195px]">
              <Image
                src="/assets/icons/headphone.png"
                alt="Headphone"
                width={195}
                height={195}
                className="object-contain"
              />
            </div>
          </div>
        </article>
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonGradient className="px-8 py-3 text-base font-medium">
          Start Challenge
        </ButtonGradient>
      </div>
    </section>
  );
};

export default Community;
