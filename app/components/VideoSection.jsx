"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { itemUp, scaleIn, sectionStagger, viewportOnce } from "./motionVariants";

const VideoSection = () => {
  return (
    <section className="mx-auto w-full px-5 py-10 text-white md:px-8">
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div
          variants={itemUp}
          className="relative mx-auto aspect-video max-w-[1240px]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            src="/assets/images/video-sec.png"
            alt="demo video"
            fill
            className="object-cover max-h-[616px]"
            priority
          />
          <motion.div
            variants={scaleIn}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_52%)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
