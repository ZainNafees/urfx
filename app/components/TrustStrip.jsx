"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const trustStripItems = [
  {
    title: "No SL Required",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "Backed by a Broker",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "Unlimited Days",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "EAs Allowed",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "No SL Required",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "Backed by a Broker",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "Unlimited Days",
    icon: "/assets/icons/slider-icon.png",
  },
  {
    title: "EAs Allowed",
    icon: "/assets/icons/slider-icon.png",
  },
];

const TrustStrip = () => {
  const [theme, setTheme] = useState("dark");
  const loopItems = [...trustStripItems, ...trustStripItems];

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
      className="relative mt-16 w-full overflow-hidden"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(to right, #26c8e2 0%, #d5e33f 100%)"
            : "linear-gradient(to right, #0a2420 0%, #1a2a10 50%, #252d00 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "1.5px",
          background:
            theme === "light"
              ? "rgba(11, 18, 32, 0.14)"
              : "linear-gradient(to right, #00e5ff, #ffd600)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "1.5px",
          background:
            theme === "light"
              ? "rgba(11, 18, 32, 0.14)"
              : "linear-gradient(to right, #00e5ff, #ffd600)",
        }}
      />
      {/* Bottom border — yellow-green */}
      <div
        style={{
          height: "1.5px",
          background: theme === "light" ? "transparent" : "#c8e800",
        }}
      />

      <div
        className={`marquee-track flex min-w-max items-center gap-12 px-6 py-3 md:gap-16 ${
          theme === "light" ? "text-[#0b1220]" : "text-white"
        }`}
      >
        {loopItems.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            <Image src={item.icon} alt={item.title} width={36} height={36} />
            <span className="text-[26px] font-medium leading-none">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TrustStrip;
