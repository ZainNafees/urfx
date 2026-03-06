"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGradient from "./ButtonGradient";
import { itemUp, scaleIn, sectionStagger, viewportOnce } from "./motionVariants";

const Revaloution = () => {
  return (
    <section className="mx-auto w-full px-5 py-10 text-white md:px-8">
      <motion.div
        className="mx-auto max-w-[1240px]"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div variants={itemUp} className="mx-auto mb-8 max-w-[760px] text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Revolutionary Trading Dashboard
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-sm text-white/70 md:text-base">
            Unleash your trading potential with our state-of-the-art dashboard,
            featuring advanced analytics that provide unparalleled insights into
            your performance.
          </p>
        </motion.div>

        <motion.div variants={scaleIn} className="mx-auto max-w-[1240px]">
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
        </motion.div>

        <motion.div variants={itemUp} className="mt-8 flex justify-center">
          <ButtonGradient>Start Challenge</ButtonGradient>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Revaloution;
