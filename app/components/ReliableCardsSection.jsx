"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const cards = [
  {
    id: 1,
    title: "Guaranteed Payouts",
    description:
      "Receive your payment within 24 hours, or we'll add an extra $1,000 to your earnings!",
    image: "/assets/images/phone1.png",
  },
  {
    id: 2,
    title: "Best Trading Conditions",
    description:
      "Transforming trading journeys globally through industry-leading resources.",
    image: "/assets/images/phone2.png",
  },
  {
    id: 3,
    title: "Best Trading Platforms",
    description:
      "Our MO licenses and tech boost experience, security, and efficiency.",
    image: "/assets/images/phone3.png",
  },
];

const ReliableCardsSection = () => {
  const mobileTrackRef = useRef(null);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cardWidth = track.clientWidth;
      if (!cardWidth) return;
      const nextIndex = Math.round(track.scrollLeft / cardWidth);
      const boundedIndex = Math.min(cards.length - 1, Math.max(0, nextIndex));
      setActiveMobileCard(boundedIndex);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCard = (index) => {
    const track = mobileTrackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto w-full max-w-[1240px] py-14 text-white md:px-8 md:py-20">
      {/* Background glows */}
      {/* Blue Glow */}
      <div
        className="
          pointer-events-none absolute
          -left-16 top-20
          h-40 w-40
          sm:-left-10 sm:top-24 sm:h-56 sm:w-56
          md:-left-8 md:top-28 md:h-72 md:w-72
          bg-[radial-gradient(circle,rgba(28,205,230,0.26)_0%,rgba(0,0,0,0)_72%)]
          blur-2xl
        "
      />

      {/* Yellow Glow */}
      <div
        className="
        pointer-events-none absolute
        left-20 top-24
        h-40 w-40
        sm:left-40 sm:top-28 sm:h-56 sm:w-56
        md:left-52 md:top-32 md:h-72 md:w-72
        bg-[radial-gradient(circle,rgba(219,214,51,0.24)_0%,rgba(0,0,0,0)_72%)]
        blur-2xl
      "
      />
      {/* Heading — has its own horizontal padding on mobile */}
      <div className="relative z-10 mx-auto max-w-[700px] px-5 text-center md:px-0">
        <h2 className="text-[30px] font-semibold leading-[1.12] md:text-[56px] md:leading-[1.08]">
          Trade with the Most
          <br />
          Reliable Prop Firm
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-6 text-gray-400 md:mt-5 md:text-[15px]">
          Reliable and swift, our service ensures precision and stability,
          building trust with every interaction.
        </p>
      </div>

      {/* ── MOBILE CAROUSEL (hidden on md+) ── */}
      <div className="relative z-10 mt-9 md:hidden">
        {/*
          No horizontal padding on the track itself — slides fill the full width.
          Each slide gets px-5 internally so the card aligns with the heading above.
        */}
        <div
          ref={mobileTrackRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card, index) => {
            const isActive = activeMobileCard === index;
            return (
              <div
                key={card.id}
                className="flex-none snap-center px-5"
                style={{ width: "100%" }}
              >
                {/* 1px border wrapper */}
                <div className="relative bg-white/[0.08] p-[1px]">
                  <article className="relative flex min-h-[310px] flex-col overflow-hidden bg-[linear-gradient(180deg,#1b1b1b_0%,#0f0f0f_100%)] p-5">
                    {/* Gradient overlays — only visible on active card */}
                    <div
                      className={`absolute inset-0 bg-[linear-gradient(120deg,rgba(28,205,230,0.28)_0%,rgba(17,20,24,0.5)_45%,rgba(219,214,51,0.24)_100%)] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(28,205,230,0.22)_0%,rgba(219,214,51,0.22)_100%)] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Image */}
                    <div className="relative z-10 mb-3 flex h-[165px] items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={300}
                        height={300}
                        className="size-[190px] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]"
                      />
                    </div>

                    {/* Text */}
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-[24px] font-semibold leading-[1.05] tracking-[-0.02em]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-6 text-gray-300">
                        {card.description}
                      </p>
                    </div>
                  </article>

                  {/* Corner accents — only on active card */}
                  <span
                    className={`pointer-events-none absolute left-0 top-0 h-[2px] w-10 bg-[#1CCDE6] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[#1CCDE6] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-10 bg-[#1CCDE6] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute right-0 top-0 h-[2px] w-10 bg-[#DBD633] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-[#DBD633] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute bottom-0 right-0 h-[2px] w-10 bg-[#DBD633] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tappable dot indicators */}
        {/* <div className="mt-5 flex items-center justify-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileCard === index
                  ? "w-7 bg-[#1CCDE6]"
                  : "w-3 bg-white/30"
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* ── DESKTOP GRID (hidden below md) ── */}
      <div className="relative z-10 mt-12 hidden grid-cols-3 gap-5 md:grid">
        {cards.map((card) => (
          <div key={card.id} className="group relative bg-white/[0.08] p-[1px]">
            <article className="relative flex h-full min-h-[390px] flex-col overflow-hidden bg-[linear-gradient(180deg,#1b1b1b_0%,#0f0f0f_100%)] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(28,205,230,0.28)_0%,rgba(17,20,24,0.5)_45%,rgba(219,214,51,0.24)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(28,205,230,0.22)_0%,rgba(219,214,51,0.22)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 mb-5 flex h-[200px] items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="size-[300px] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)] 2k:size-[410px]"
                />
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-[24px] max-w-[160px] font-semibold leading-[1.03] tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[18px] leading-6 text-gray-300">
                  {card.description}
                </p>
              </div>
            </article>

            {/* Corner accents — hover only on desktop */}
            <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-10 bg-[#1CCDE6] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[#1CCDE6] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-10 bg-[#1CCDE6] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-10 bg-[#DBD633] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-[#DBD633] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-10 bg-[#DBD633] opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-9 flex justify-center px-5 md:mt-12 md:px-0">
        <ButtonGradient className="px-7 py-3 text-[15px] font-medium md:px-8 md:text-base">
          Start Challenge
        </ButtonGradient>
      </div>
    </section>
  );
};

export default ReliableCardsSection;
