"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  itemUp,
  scaleIn,
  sectionStagger,
  viewportOnce,
} from "./motionVariants";

const PayoutSection = () => {
  const payoutData = [
    {
      id: 1,
      title: "Up to 95%",
      subtitle: "Profit Split",
      icon: "/assets/icons/coin.png",
    },
    {
      id: 2,
      title: "Up to 1M",
      subtitle: "Trading Accounts",
      icon: "/assets/icons/dollar.png",
    },
    {
      id: 3,
      title: "24 Hours",
      subtitle: "Guaranteed Payout",
      icon: "/assets/icons/bank.png",
    },
    {
      id: 4,
      title: "No Time Limit",
      subtitle: "in Challenge Phase",
      icon: "/assets/icons/graph.png",
    },
  ];

  return (
    <section className="mx-auto w-full px-5 py-10 text-white md:px-20">
      <motion.div
        className="px-6 py-10 md:px-10"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8" variants={sectionStagger}>
          {payoutData.map((item) => (
            <motion.div key={item.id} className="text-center" variants={itemUp}>
              <motion.div
                className="mx-auto mb-5 flex items-center justify-center"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-[100px] md:h-[100px] object-contain"
                />
              </motion.div>
              <h3 className="text-xl font-semibold leading-tight sm:text-2xl md:text-[30px]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PayoutSection;
