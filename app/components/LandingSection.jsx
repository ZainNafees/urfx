"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonGradient from "./ButtonGradient";

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

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1240px] items-start px-4 pt-6 sm:px-5 sm:pt-7 md:px-8 md:pt-24">
        <div
          className={`max-w-[580px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <h1 className="mb-6 text-[32px] md:text-[48px] font-semibold leading-[1.08] sm:mb-10 md:leading-[74px]">
            Empowering Ambitious <br />
            Traders to Succeed
          </h1>
          <ButtonGradient className="mb-8 px-6 py-3 text-[16px] font-medium sm:mb-10 sm:px-8">
            Start Challenge
          </ButtonGradient>

          <div
            className={`grid grid-cols-2 gap-x-4 gap-y-4 text-[16px] leading-6 sm:gap-x-8 sm:gap-y-5 sm:text-[14px] ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {featuresData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={16}
                  height={16}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
