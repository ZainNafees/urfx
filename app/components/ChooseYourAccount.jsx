"use client";

import { useState } from "react";
import ButtonGradient from "./ButtonGradient";
import { ArrowDown, ChevronDown } from "lucide-react";

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
  const [fundingType, setFundingType] = useState("Two Phase");
  const [selectedPlatform, setSelectedPlatform] = useState("MetaTrader 4");
  const [activeTab, setActiveTab] = useState("Phase 1");

  return (
    <section className="relative overflow-hidden bg-[#111111] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute  inset-0 bg-[radial-gradient(circle_at_78%_55%,rgba(157,240,40,0.22),transparent_38%),radial-gradient(circle_at_25%_80%,rgba(12,95,46,0.28),transparent_46%)]" />

      <div className="relative mx-auto w-full max-w-6xl mt-16">
        <h2 className="text-4xl font-semibold tracking-tight text-center sm:text-5xl">
          Choose Your Account
        </h2>
        <p className="mt-2 text-sm text-white/60 text-center sm:text-base">
          Trade the way you want, how you want, for as long as you want...
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.95fr]">
          <div className="space-y-7">
            <div>
              <p className="mb-3 text-xl font-semibold">Funding Type:</p>
              <div className="grid grid-cols-2 gap-3">
                {["Two Phase", "Instant Funding"].map((item) => {
                  const isActive = fundingType === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFundingType(item)}
                      className={`h-14 rounded-md border text-lg font-semibold transition ${
                        isActive
                          ? "border-[#c8f000] bg-[#435819] text-white"
                          : "border-transparent bg-white/10 text-white/85 hover:bg-white/15"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xl font-semibold">Trading Platform:</p>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((item) => {
                  const isActive = selectedPlatform === item.logo;
                  return (
                    <button
                      key={item.logo}
                      type="button"
                      onClick={() =>
                        !item.disabled && setSelectedPlatform(item.logo)
                      }
                      disabled={item.disabled}
                      className={`relative h-14 rounded-md border px-4 flex items-center justify-center transition ${
                        item.disabled
                          ? "cursor-not-allowed border-white/10 bg-white/5"
                          : isActive
                            ? "border-[#c8f000] bg-[#26381b]"
                            : "border-white/10 bg-white/10 hover:bg-white/15"
                      }`}
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
                              "linear-gradient(#111, #111), linear-gradient(to right, #00e5ff, #c8f000)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xl font-semibold">Account Size:</p>
              <div className="flex h-14 items-center justify-between rounded-md border border-[#c8f000] bg-gradient-to-r from-[#0f3a3f] to-[#495f19] px-4 text-3xl font-semibold sm:text-[34px]">
                <span>50,000</span>
                <ChevronDown />
              </div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xl font-semibold">Fee</p>
                <p className="mt-1 text-5xl font-bold">$59.00</p>
              </div>
              <ButtonGradient
                type="button"
                className="h-14 min-w-52 text-[16px]"
              >
                Start Challenge
              </ButtonGradient>
            </div>
          </div>

          <div className="rounded-md bg-gradient-to-br from-[#DBD633] via-[#9ED473] to-[#1CCDE6] p-4 text-black sm:p-5">
            <h3 className="text-4xl font-bold">50,000 Account</h3>

            <div className="mt-4 grid grid-cols-3 rounded-sm bg-white/20 p-1">
              {["Phase 1", "Phase 2", "Funded"].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`h-11 rounded-sm text-lg font-semibold transition ${
                      isActive
                        ? "bg-white text-black shadow-sm"
                        : "text-black/75 hover:bg-white/35"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-2">
              {phaseData[activeTab].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 text-lg sm:text-xl"
                >
                  <span className="text-black/65">{label}</span>
                  <span className="text-right font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
