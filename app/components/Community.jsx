"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGradient from "./ButtonGradient";
import {
  itemLeft,
  itemRight,
  itemUp,
  scaleIn,
  sectionStagger,
  viewportOnce,
} from "./motionVariants";

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
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const updateTheme = () => {
      const attrTheme = document.documentElement.getAttribute("data-theme");
      setTheme(attrTheme === "light" ? "light" : "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`mx-auto w-full max-w-[1240px] px-5 py-10 md:px-8 ${
        theme === "light" ? "text-[#111827]" : "text-white"
      }`}
    >
      <motion.h2
        className="text-center text-[20px] font-bold uppercase tracking-wide md:text-[28px]"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={itemUp}
      >
        URFX Community and Support
      </motion.h2>

      <motion.div
        className="mt-12 flex flex-col gap-4 lg:flex-row"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-2" variants={sectionStagger}>
          {statCards.map((item) => (
            <motion.article
              key={item.id}
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`
                flex min-h-[150px] flex-col items-center gap-4 px-5 py-6 text-center sm:min-h-[164px] sm:flex-row sm:items-center sm:gap-0 sm:text-left
                ${
                  theme === "light"
                    ? "bg-[linear-gradient(90deg,#9fe5ee_0%,#dce5a3_100%)]"
                    : "bg-[linear-gradient(120deg,#1f2528_0%,#15181b_100%)]"
                }
              `}
            >
              <div className="flex-1">
                <h3
                  className={`text-[28px] font-semibold leading-none sm:text-[40px] ${
                    theme === "light" ? "text-[#0b1220]" : "text-white"
                  }`}
                >
                  {item.value}
                </h3>
                <p
                  className={`mt-2 text-[14px] sm:mt-3 sm:text-[20px] ${
                    theme === "light" ? "text-[#475569]" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </p>
              </div>

              <motion.div variants={scaleIn}>
                <Image
                  src={item.img}
                  alt={item.label}
                  width={110}
                  height={110}
                  className="h-[70px] w-[70px] object-contain sm:h-[110px] sm:w-[110px]"
                />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.article
          variants={itemRight}
          className="flex w-full flex-col justify-between bg-[linear-gradient(120deg,#d9df37_0%,#24d6f4_100%)] p-8 text-black lg:w-[46%]"
        >
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
          <div className="self-end">
            <motion.div variants={scaleIn} className="h-[195px] w-[195px] self-end">
              <Image
                src="/assets/icons/headphone.png"
                alt="Headphone"
                width={195}
                height={195}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.article>
      </motion.div>

      <motion.div
        className="mt-10 flex justify-center"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={itemLeft}
      >
        <ButtonGradient className="px-8 py-3 text-base font-medium">
          Start Challenge
        </ButtonGradient>
      </motion.div>
    </section>
  );
};

export default Community;
