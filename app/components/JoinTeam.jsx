"use client";

import { motion } from "framer-motion";
import ButtonGradient from "./ButtonGradient";
import { itemUp, sectionStagger, viewportOnce } from "./motionVariants";

const JoinTeam = () => {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-white md:px-8">
      <div className="absolute inset-0 " />
      <motion.div
        className="relative mx-auto flex w-full max-w-[980px] flex-col items-center text-center"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.h2 variants={itemUp} className="text-[32px] font-semibold leading-tight md:text-[56px]">
          Join our Team of Experienced Traders
        </motion.h2>
        <motion.p variants={itemUp} className="mt-6 max-w-[980px] text-[14px] leading-relaxed text-[#B7B7B7] md:text-[18px] md:leading-tight">
          Traders can take their trading to the next level by refining their
          skills and strategies, setting themselves up for success in the
          competitive financial markets. By doing so, they can embark on their
          journey to become funded prop traders, unlocking new opportunities and
          challenges that come with professional trading careers.
        </motion.p>
        <motion.div variants={itemUp} className="mt-10">
          <ButtonGradient className="px-8 py-3 text-base font-medium">
            Start Challenge
          </ButtonGradient>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinTeam;
