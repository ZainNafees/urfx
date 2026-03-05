"use client";

import { useEffect, useState } from "react";
import ButtonGradient from "./ButtonGradient";

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
    question:
      "Do you charge any other fees other than the initial assessment cost?",
    answer:
      "No. The only fee is the one-time assessment cost. There are no hidden charges, monthly subscriptions, or additional fees throughout the evaluation or funded phase.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle, theme }) => {
  return (
    <div
      className="relative cursor-pointer"
      style={{ padding: "1px" }}
      onClick={onToggle}
    >
      <div
        className="relative overflow-hidden"
        style={{
          background:
            theme === "light"
              ? isOpen
                ? "linear-gradient(90deg, rgba(28,205,230,0.34) 0%, rgba(219,214,51,0.42) 100%)"
                : "transparent"
              : isOpen
                ? "linear-gradient(135deg, rgba(28,205,230,0.16) 0%, rgba(31,38,18,0.96) 56%, rgba(219,214,51,0.14) 100%)"
                : "linear-gradient(180deg, #17191c 0%, #101215 100%)",
          transition: "background 0.3s ease",
        }}
      >
        {isOpen && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(120deg, rgba(28,205,230,0.18) 0%, rgba(255,255,255,0.14) 46%, rgba(219,214,51,0.24) 100%)"
                  : "linear-gradient(120deg, rgba(28,205,230,0.22) 0%, rgba(17,20,24,0.52) 48%, rgba(219,214,51,0.2) 100%)",
            }}
          />
        )}

        <div className="relative z-10 flex items-center justify-between px-6 py-5">
          <h3
            className={`pr-6 text-[15px] font-semibold leading-snug md:text-[17px] ${
              theme === "light"
                ? "text-[#101828]"
                : "text-white"
            }`}
          >
            {faq.question}
          </h3>
          <span
            className={`flex-shrink-0 text-[30px] font-light leading-none ${
              theme === "light"
                ? "text-[#111827]"
                : "text-white"
            }`}
          >
            {isOpen ? "x" : "+"}
          </span>
        </div>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? "200px" : "0px" }}
        >
          <p
            className={`relative z-10 px-6 pb-5 text-[14px] leading-6 md:text-[15px] ${
              theme === "light"
                ? "text-[#374151]"
                : "text-gray-300"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      </div>

      <span
        className="pointer-events-none absolute left-0 top-0 z-30 h-[2px] w-10 bg-[#1CCDE6]"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <span
        className="pointer-events-none absolute left-0 top-0 z-30 h-full w-[2px] bg-[#1CCDE6]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <span
        className="pointer-events-none absolute bottom-0 left-0 z-30 h-[2px] w-10 bg-[#1CCDE6]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <span
        className="pointer-events-none absolute right-0 top-0 z-30 h-[2px] w-10 bg-[#DBD633]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <span
        className="pointer-events-none absolute right-0 top-0 z-30 h-full w-[2px] bg-[#DBD633]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 z-30 h-[2px] w-10 bg-[#DBD633]"
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
    </div>
  );
};

const Faqs = () => {
  const [theme, setTheme] = useState("dark");
  const [openId, setOpenId] = useState(1);

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

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`relative mx-auto w-full max-w-[1240px] py-14 md:px-8 md:py-20 ${
        theme === "light" ? "text-[#101828]" : "text-white"
      }`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 blur-3xl"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle, rgba(28,205,230,0.16) 0%, rgba(0,0,0,0) 72%)"
              : "radial-gradient(circle, rgba(28,205,230,0.12) 0%, rgba(0,0,0,0) 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 left-1/4 h-56 w-56 blur-3xl"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle, rgba(219,214,51,0.12) 0%, rgba(0,0,0,0) 72%)"
              : "radial-gradient(circle, rgba(219,214,51,0.10) 0%, rgba(0,0,0,0) 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[700px] px-5 text-center md:px-0">
        <h2 className="text-[30px] font-bold leading-[1.1] md:text-[52px] md:leading-[1.08]">
          Our Most Asked Questions
        </h2>
        <p
          className={`mx-auto mt-4 max-w-[500px] text-[14px] leading-6 md:mt-5 md:text-[15px] ${
            theme === "light" ? "text-[#6b7280]" : "text-gray-400"
          }`}
        >
          Check out our most frequently asked questions here for helpful
          insights and answers to common queries about our company and
          opportunities.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-[640px] flex-col gap-3 px-5 md:mt-12 md:px-0">
        {faqs.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => toggle(faq.id)}
            theme={theme}
          />
        ))}
      </div>

      <div className="relative z-10 mt-10 flex justify-center px-5 md:mt-12 md:px-0">
        <ButtonGradient className="relative px-7 py-4 text-[15px] font-medium text-white">
          Got more questions?
        </ButtonGradient>
      </div>
    </section>
  );
};

export default Faqs;
