"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonGradient from "./ButtonGradient";
import {
  itemLeft,
  itemUp,
  sectionStagger,
} from "./motionVariants";

const LandingSection = () => {
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

  const featuresData = [
    { title: "No SL Required", icon: "/assets/icons/tick.png" },
    { title: "Performance Protect", icon: "/assets/icons/tick.png" },
    { title: "Instant Credentials", icon: "/assets/icons/tick.png" },
    { title: "100% Refund", icon: "/assets/icons/tick.png" },
    { title: "Martingale & Grid Allowed", icon: "/assets/icons/tick.png" },
    { title: "Unlimited Days Available", icon: "/assets/icons/tick.png" },
  ];

  return (
    <section
      className={`relative w-full overflow-hidden min-h-[860px] sm:min-h-[940px] md:min-h-[calc(100vh-74px)] ${
        theme === "light" ? "bg-gray-100" : "bg-black"
      }`}
    >
      {/* Desktop Background */}
      <Image
        src={
          theme === "light"
            ? "/assets/images/light-hero.png"
            : "/assets/images/hero-section.webp"
        }
        alt="Hero background"
        width={1570}
        height={800}
        className="absolute right-[-120px] min-h-[800px] -bottom-30 z-0 hidden object-cover object-center scale-90 md:block"
      />

      {/* Mobile Background */}
      <Image
        src={
          theme === "light"
            ? "/assets/images/light-hero-mobile.png"
            : "/assets/images/hero-mobile.webp"
        }
        alt="Hero mobile background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-bottom md:hidden"
      />

      {/* Blend layer to avoid hard vertical seams in hero background */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            theme === "light"
              ? "linear-gradient(90deg, rgba(243,244,246,0.96) 0%, rgba(243,244,246,0.86) 34%, rgba(243,244,246,0.54) 52%, rgba(243,244,246,0.12) 72%, rgba(243,244,246,0) 100%)"
              : "linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.9) 34%, rgba(0,0,0,0.58) 52%, rgba(0,0,0,0.2) 72%, rgba(0,0,0,0) 100%)",
        }}
      />


      {/* Content */}
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        animate="show"
        className="relative z-20 mx-auto flex h-full w-full max-w-[1240px] items-center px-4 pt-8 sm:px-5 sm:pt-10 md:items-start md:px-8 md:pt-24"
      >
        <motion.div
          variants={itemLeft}
          className={`w-full max-w-[580px] text-center md:text-left ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <motion.div
            variants={itemUp}
            className={`mx-auto mb-6 inline-block rounded px-4 py-2 text-[12px] font-semibold tracking-[2.4px] md:mx-0 md:mb-8 ${
              theme === "light"
                ? "border border-[#c9e53f] bg-[linear-gradient(90deg,#5ed6f3_0%,#c9e53f_100%)] text-[#0f172a] shadow-[0_8px_24px_rgba(132,190,63,0.28)]"
                : "border border-[#5acdcf]/70 bg-[linear-gradient(90deg,rgba(28,205,230,0.12)_0%,rgba(158,212,115,0.12)_100%)] text-[#cfe879]"
            }`}
          >
            THE LEADING PROP TRADING FIRM
          </motion.div>
          <motion.h1
            variants={itemUp}
            className="mb-6 text-[32px] font-semibold leading-[1.1] sm:mb-8 md:mb-10 md:text-[48px] md:leading-[74px]"
          >
            Empowering Ambitious <br />
            Traders to Succeed
          </motion.h1>

          <motion.div variants={itemUp} className="mb-8 flex justify-center md:mb-10 md:justify-start">
            <ButtonGradient className="px-6 py-3 text-[16px] font-medium sm:px-8">
              Start Challenge
            </ButtonGradient>
          </motion.div>

          <motion.div
            variants={sectionStagger}
            className={`mx-auto grid max-w-[560px] grid-cols-1 gap-x-6 gap-y-4 text-left text-[16px] leading-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 sm:text-[14px] md:mx-0 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {featuresData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemUp}
                className="flex items-center gap-2"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={16}
                  height={16}
                />
                <span>{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LandingSection;
