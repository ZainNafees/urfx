import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const Revaloution = () => {
  return (
    <section className="mx-auto w-full px-5 py-10 text-white md:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-8 max-w-[760px] text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Revolutionary Trading Dashboard
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-sm text-white/70 md:text-base">
            Unleash your trading potential with our state-of-the-art dashboard,
            featuring advanced analytics that provide unparalleled insights into
            your performance.
          </p>
        </div>

        <div className="mx-auto max-w-[1240px]">
          <Image
            src="/assets/images/laptop.png"
            alt="Trading dashboard on laptop"
            width={1240}
            height={617}
            className="hidden h-auto w-full md:block"
            priority
          />
          <Image
            src="/assets/images/mobile-laptop.png"
            alt="Trading dashboard on mobile"
            width={375}
            height={688}
            className="mx-auto h-auto w-full max-w-[375px] md:hidden"
            priority
          />
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonGradient>Start Challenge</ButtonGradient>
        </div>
      </div>
    </section>
  );
};

export default Revaloution;
