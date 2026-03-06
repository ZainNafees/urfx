"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGradient from "./ButtonGradient";
import { itemLeft, itemRight, itemUp, sectionStagger, viewportOnce } from "./motionVariants";

const TradersTogether = () => {
  return (
    <section className="w-full bg-black px-5 md:px-8">
      <div className="mx-auto max-w-[1240px] border-b border-[#27340d] bg-[radial-gradient(120%_140%_at_88%_34%,rgba(206,234,66,0.22)_0%,rgba(0,0,0,0)_45%),#020305]">
        <motion.div
          className="relative flex min-h-[230px] flex-col items-center justify-center gap-10 overflow-hidden px-6 py-8 text-center md:min-h-[240px] md:flex-row md:items-center md:justify-between md:px-14 md:text-left"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          
          {/* Left Content */}
          <motion.div variants={itemLeft} className="relative z-10 flex max-w-[530px] flex-col items-center md:items-start">
            <motion.h2 variants={itemUp} className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-white md:text-[40px]">
              We&apos;re bringing the best and brightest traders together.
            </motion.h2>

            <motion.div variants={itemUp}>
              <ButtonGradient
                type="button"
                className="mt-7 px-6 py-3"
              >
                Join Community
              </ButtonGradient>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemRight} className="pointer-events-none relative z-10 flex w-full justify-center md:w-auto md:justify-end">
            <Image
              src="/assets/icons/plane.png"
              alt="Paper plane outline"
              width={230}
              height={100}
              className="w-[180px] md:w-[230px] object-contain"
              priority
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default TradersTogether;
