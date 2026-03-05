"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What happens if you lose money in a Prop Firm?",
    answer:
      "Traders may be subject to risk limits, suspended trading, or even termination if they consistently incur losses beyond the agreed-upon limits.",
  },
  {
    id: 2,
    question: "What are the pros and cons of being a prop trader?",
    answer:
      "Pros include access to firm capital, high profit splits, and professional trading tools. Cons include strict risk rules, evaluation fees, and the pressure of drawdown limits.",
  },
  {
    id: 3,
    question: "Do prop firms really pay out?",
    answer:
      "Yes, legitimate prop firms do pay out. Payouts are processed once traders meet the required profit targets and comply with risk management rules during the evaluation and funded phases.",
  },
  {
    id: 4,
    question: "What is a Prop Trading Firm?",
    answer:
      "A proprietary trading firm provides traders with capital to trade financial markets. In return, the firm takes a share of the profits while the trader keeps the majority of their earnings.",
  },
  {
    id: 5,
    question: "Do you charge any other fees other than the initial assessment cost?",
    answer:
      "No. The only fee is the one-time assessment cost. There are no hidden charges, monthly subscriptions, or additional fees throughout the evaluation or funded phase.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className="relative cursor-pointer"
      style={{
        padding: "1px",
        background: isOpen
          ? "linear-gradient(135deg, #1CCDE6, #DBD633)"
          : "rgba(255,255,255,0.10)",
        transition: "background 0.3s ease",
      }}
      onClick={onToggle}
    >
      <div
        className="relative overflow-hidden"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, rgba(28,205,230,0.08) 0%, rgba(30,35,15,0.95) 60%, rgba(219,214,51,0.08) 100%)"
            : "linear-gradient(180deg, #1a1a1a 0%, #111111 100%)",
          transition: "background 0.3s ease",
        }}
      >
        {/* Glow overlays when open */}
        {isOpen && (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(28,205,230,0.18) 0%, rgba(17,20,24,0.5) 50%, rgba(219,214,51,0.18) 100%)",
              }}
            />
          </>
        )}

        {/* Question row */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5">
          <h3
            className="pr-6 text-[15px] font-semibold leading-snug text-white md:text-[17px]"
          >
            {faq.question}
          </h3>
          <span
            className="flex-shrink-0 text-[22px] font-light leading-none text-white transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(0deg)" }}
          >
            {isOpen ? "×" : "+"}
          </span>
        </div>

        {/* Answer */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? "200px" : "0px" }}
        >
          <p className="relative z-10 px-6 pb-5 text-[14px] leading-6 text-gray-300 md:text-[15px]">
            {faq.answer}
          </p>
        </div>
      </div>

      {/* Left cyan border */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[#1CCDE6]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      {/* Right yellow border */}
      <span
        className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-[#DBD633]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
    </div>
  );
};

const Faqs = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative mx-auto w-full max-w-[1240px] py-14 text-white md:px-8 md:py-20">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(28,205,230,0.12) 0%, rgba(0,0,0,0) 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 left-1/4 h-56 w-56 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(219,214,51,0.10) 0%, rgba(0,0,0,0) 72%)",
        }}
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-[640px] px-5 text-center md:px-0">
        <h2 className="text-[30px] font-bold leading-[1.1] md:text-[52px] md:leading-[1.08]">
          Our Most Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-[420px] text-[14px] leading-6 text-gray-400 md:mt-5 md:text-[15px]">
          Check out our most frequently asked questions here for helpful insights
          and answers to common queries about our company and opportunities.
        </p>
      </div>

      {/* FAQ List */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-[640px] flex-col gap-3 px-5 md:mt-12 md:px-0">
        {faqs.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => toggle(faq.id)}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-10 flex justify-center px-5 md:mt-12 md:px-0">
        <button
          className="relative px-7 py-3 text-[15px] font-medium text-white transition-opacity duration-200 hover:opacity-80"
          style={{
            background: "transparent",
            border: "none",
            padding: "1px",
          }}
        >
          {/* Gradient border wrapper */}
          <span
            className="block"
            style={{
              padding: "1px",
              background: "linear-gradient(135deg, #1CCDE6, #DBD633)",
            }}
          >
            <span
              className="block px-7 py-3 text-[15px] font-medium text-white"
              style={{ background: "#0a0a0a" }}
            >
              Got more questions?
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Faqs;