"use client";

import { useEffect, useState } from "react";
import ButtonGradient from "./ButtonGradient";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  itemLeft,
  itemRight,
  itemUp,
  sectionStagger,
  viewportOnce,
} from "./motionVariants";

const phaseData = {
  "Phase 1": [
    ["Profit target", "$500.00"],
    ["Daily loss limit", "6%"],
    ["Max drawdown", "12%"],
    ["Refundable fee", "100%"],
    ["Minimum trading days", "5"],
    ["Maximum trading days", "Unlimited"],
    ["Performance split", "Up to 50%"],
    ["Leverage", "Up to 50:1"],
    ["Drawdown type", "Trailing"],
    ["EAs allowed", "Yes"],
    ["Refund", "100%"],
    ["Hold over weekend", "Yes"],
    ["Trade through news", "Yes"],
    ["Platform", "MT4, MT5"],
  ],
  "Phase 2": [
    ["Profit target", "$250.00"],
    ["Daily loss limit", "6%"],
    ["Max drawdown", "12%"],
    ["Refundable fee", "100%"],
    ["Minimum trading days", "5"],
    ["Maximum trading days", "Unlimited"],
    ["Performance split", "Up to 70%"],
    ["Leverage", "Up to 50:1"],
    ["Drawdown type", "Trailing"],
    ["EAs allowed", "Yes"],
    ["Refund", "100%"],
    ["Hold over weekend", "Yes"],
    ["Trade through news", "Yes"],
    ["Platform", "MT4, MT5"],
  ],
  Funded: [
    ["Profit target", "No target"],
    ["Daily loss limit", "6%"],
    ["Max drawdown", "12%"],
    ["Refundable fee", "N/A"],
    ["Minimum trading days", "0"],
    ["Maximum trading days", "Unlimited"],
    ["Performance split", "Up to 90%"],
    ["Leverage", "Up to 50:1"],
    ["Drawdown type", "Trailing"],
    ["EAs allowed", "Yes"],
    ["Refund", "N/A"],
    ["Hold over weekend", "Yes"],
    ["Trade through news", "Yes"],
    ["Platform", "MT4, MT5"],
  ],
};

const platforms = [
  { logo: "/assets/icons/mt4.png", active: true, disabled: false },
  { logo: "/assets/icons/mt5.png", active: false, disabled: false },
  { logo: "/assets/icons/trader.png", active: false, disabled: false },
  { logo: "/assets/icons/locker.png", active: false, disabled: true },
];

export default function ChooseYourAccount() {
  const [theme, setTheme] = useState("dark");
  const [fundingType, setFundingType] = useState("Two Phase");
  const [selectedPlatform, setSelectedPlatform] = useState("/assets/icons/mt4.png");
  const [activeTab, setActiveTab] = useState("Phase 1");

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
      className={`relative overflow-hidden px-4 py-10 sm:px-6 lg:px-10 ${
        theme === "light" ? "bg-[#f5f8fc]" : "bg-[#111111] text-white"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          theme === "light"
            ? "bg-[radial-gradient(circle_at_78%_55%,rgba(157,240,40,0.08),transparent_38%),radial-gradient(circle_at_25%_80%,rgba(12,95,46,0.08),transparent_46%)]"
            : "bg-[radial-gradient(circle_at_78%_55%,rgba(157,240,40,0.22),transparent_38%),radial-gradient(circle_at_25%_80%,rgba(12,95,46,0.28),transparent_46%)]"
        }`}
      />

      <motion.div
        className="relative mx-auto mt-16 w-full max-w-6xl"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.h2
          variants={itemUp}
          className={`text-4xl font-semibold tracking-tight text-center sm:text-5xl ${
            theme === "light" ? "text-[#0f172a]" : "text-white"
          }`}
        >
          Choose Your Account
        </motion.h2>
        <motion.p
          variants={itemUp}
          className={`mt-2 text-sm text-center sm:text-base ${
            theme === "light" ? "text-[#475569]" : "text-white/60"
          }`}
        >
          Trade the way you want, how you want, for as long as you want...
        </motion.p>

        <motion.div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.95fr]" variants={sectionStagger}>
          <motion.div className="space-y-7" variants={itemLeft}>
            <div>
              <p
                className={`mb-3 text-xl font-semibold ${
                  theme === "light" ? "text-[#0f172a]" : "text-white"
                }`}
              >
                Funding Type:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Two Phase", "Instant Funding"].map((item) => {
                  const isActive = fundingType === item;
                  return (
                    <motion.button
                      key={item}
                      type="button"
                      onClick={() => setFundingType(item)}
                      className={`h-14 rounded-md border text-lg font-semibold transition ${
                        isActive
                          ? theme === "light"
                            ? "border-[#95cf2b] bg-[#def7b4] text-[#1e2d0a]"
                            : "border-[#c8f000] bg-[#435819] text-white"
                          : theme === "light"
                            ? "border-[#d5deea] bg-white text-[#1f2937] hover:bg-[#f7f9fc]"
                            : "border-transparent bg-white/10 text-white/85 hover:bg-white/15"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      {item}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <p
                className={`mb-3 text-xl font-semibold ${
                  theme === "light" ? "text-[#0f172a]" : "text-white"
                }`}
              >
                Trading Platform:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((item) => {
                  const isActive = selectedPlatform === item.logo;
                  return (
                    <motion.button
                      key={item.logo}
                      type="button"
                      onClick={() =>
                        !item.disabled && setSelectedPlatform(item.logo)
                      }
                      disabled={item.disabled}
                      className={`relative h-14 rounded-md border px-4 flex items-center justify-center transition ${
                        item.disabled
                          ? theme === "light"
                            ? "cursor-not-allowed border-[#e2e8f0] bg-[#f8fafc]"
                            : "cursor-not-allowed border-white/10 bg-white/5"
                          : isActive
                            ? theme === "light"
                              ? "border-[#95cf2b] bg-[#eefbd8]"
                              : "border-[#c8f000] bg-[#26381b]"
                            : theme === "light"
                              ? "border-[#d5deea] bg-white hover:bg-[#f7f9fc]"
                              : "border-white/10 bg-white/10 hover:bg-white/15"
                      }`}
                      whileTap={{ scale: item.disabled ? 1 : 0.97 }}
                    >
                      <img
                        src={item.logo}
                        alt={item.label}
                        className={`h-8 w-auto object-contain transition ${
                          item.disabled
                            ? "opacity-30 grayscale"
                            : isActive
                              ? "opacity-100"
                              : "opacity-70"
                        }`}
                      />
                      {item.disabled && (
                        <span
                          className="absolute bottom-1.5 right-2 px-2 py-0.5 text-[10px] font-medium leading-none text-white/80 rounded-sm"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid transparent",
                            backgroundImage:
                              theme === "light"
                                ? "linear-gradient(#fff, #fff), linear-gradient(to right, #00b7d4, #8ecf2f)"
                                : "linear-gradient(#111, #111), linear-gradient(to right, #00e5ff, #c8f000)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <p
                className={`mb-3 text-xl font-semibold ${
                  theme === "light" ? "text-[#0f172a]" : "text-white"
                }`}
              >
                Account Size:
              </p>
              <div
                className={`flex h-14 items-center justify-between rounded-md border px-4 text-3xl font-semibold sm:text-[34px] ${
                  theme === "light"
                    ? "border-[#93cd2d] bg-gradient-to-r from-[#dff6fb] to-[#eef8d2] text-[#0f172a]"
                    : "border-[#c8f000] bg-gradient-to-r from-[#0f3a3f] to-[#495f19]"
                }`}
              >
                <span>50,000</span>
                <ChevronDown />
              </div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className={`text-xl font-semibold ${
                    theme === "light" ? "text-[#0f172a]" : "text-white"
                  }`}
                >
                  Fee
                </p>
                <p
                  className={`mt-1 text-5xl font-bold ${
                    theme === "light" ? "text-[#0f172a]" : "text-white"
                  }`}
                >
                  $59.00
                </p>
              </div>
              <ButtonGradient
                type="button"
                className="h-14 min-w-52 text-[16px]"
              >
                Start Challenge
              </ButtonGradient>
            </div>
          </motion.div>

          <motion.div
            variants={itemRight}
            className={`rounded-md p-4 sm:p-5 ${
              theme === "light"
                ? "bg-[linear-gradient(135deg,#d7de45_0%,#98ce72_48%,#58cbc9_100%)] text-[#0f172a]"
                : "bg-gradient-to-br from-[#DBD633] via-[#9ED473] to-[#1CCDE6] text-black"
            }`}
          >
            <h3 className="text-4xl font-bold">50,000 Account</h3>

            <div
              className={`mt-4 grid grid-cols-3 rounded-sm p-1 ${
                theme === "light" ? "bg-[rgba(255,255,255,0.2)]" : "bg-white/20"
              }`}
            >
              {["Phase 1", "Phase 2", "Funded"].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <motion.button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`h-11 rounded-sm text-lg font-semibold transition ${
                      isActive
                        ? theme === "light"
                          ? "bg-white text-[#0f172a] shadow-sm"
                          : "bg-white text-black shadow-sm"
                        : theme === "light"
                          ? "text-[#1f2937] hover:bg-white/20"
                          : "text-black/75 hover:bg-white/35"
                    }`}
                    whileTap={{ scale: 0.97 }}
                  >
                    {tab}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-5 space-y-2">
              {phaseData[activeTab].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 text-lg sm:text-xl"
                >
                  <span
                    className={theme === "light" ? "text-[#2f4a2f]" : "text-black/65"}
                  >
                    {label}
                  </span>
                  <span
                    className={`text-right font-semibold ${
                      theme === "light" ? "text-[#050b16]" : "text-black"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
