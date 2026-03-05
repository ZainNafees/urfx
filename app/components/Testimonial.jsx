"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Professional support team and great spreads on EUR/USD. URFX is my go-to prop firm now.",
    subtext: "Just cashed out €1,300 from my second payout.",
    name: "Jose Satire",
    location: "Milan, Italy 🇮🇹",
    avatar: "https://i.pravatar.cc/48?img=12",
  },
  {
    id: 2,
    quote:
      "Payout process was smooth and fast. Got my share in 48 hours via e-transfer. These guys are legit.",
    subtext: "💰 First payout: CAD 1,400. Straight to my account.",
    name: "Nuray Aksoy",
    location: "Quebec, Canada 🇨🇦",
    avatar: "https://i.pravatar.cc/48?img=47",
  },
  {
    id: 3,
    quote:
      "The fact that I can track everything in real-time is a huge plus. The metrics are incredibly helpful.",
    subtext: "📈 Made over €1,000 in my first 10 days trading.",
    name: "Lena Muller",
    location: "Amsterdam, Netherlands 🇳🇱",
    avatar: "https://i.pravatar.cc/48?img=45",
  },
];

const Testimonial = () => {
  const mobileTrackRef = useRef(null);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardWidth = track.clientWidth;
      if (!cardWidth) return;
      const nextIndex = Math.round(track.scrollLeft / cardWidth);
      setActiveMobileCard(
        Math.min(testimonials.length - 1, Math.max(0, nextIndex)),
      );
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative mx-auto w-full max-w-[1240px] py-14 text-white md:px-8 md:py-20"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute -left-16 top-20 h-72 w-72 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(28,205,230,0.15) 0%, rgba(0,0,0,0) 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(219,214,51,0.12) 0%, rgba(0,0,0,0) 72%)",
        }}
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-[900px] px-5 text-center md:px-0">
        <h2 className="text-[30px] font-semibold leading-[1.12] md:text-[48px] md:leading-[1.08]">
          Trusted by Traders All Around the World
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-6 text-gray-400 md:mt-5 md:text-[15px]">
          See why so many traders worldwide choose URFX as their preferred Prop
          Firm.
        </p>

        {/* TrustAdvisor badge */}
        <div
          className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-medium text-white"
          
        >
          Reviews provided by&nbsp;
          <span className="inline-flex items-center gap-1.5">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[11px]"
              style={{ background: "#22c55e" }}
            >
              ✓
            </span>
            <span className="font-semibold">TrustAdvisor</span>
          </span>
        </div>
      </div>

      {/* ── MOBILE CAROUSEL ── */}
      <div className="relative z-10 mt-10 md:hidden">
        <div
          ref={mobileTrackRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, index) => {
            const isActive = activeMobileCard === index;
            return (
              <div key={t.id} className="w-full flex-none snap-center px-5">
                <TestimonialCard testimonial={t} forcedActive={isActive} />
              </div>
            );
          })}
        </div>
        {/* Dot indicators */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const track = mobileTrackRef.current;
                if (track)
                  track.scrollTo({
                    left: i * track.clientWidth,
                    behavior: "smooth",
                  });
              }}
              className="rounded-full transition-all duration-300"
              style={{
                height: "6px",
                width: activeMobileCard === i ? "28px" : "12px",
                background:
                  activeMobileCard === i ? "#1CCDE6" : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP GRID ── */}
      <div className="relative z-10 mt-12 hidden grid-cols-3 gap-5 md:grid">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} forcedActive={false} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, forcedActive }) => {
  const [hovered, setHovered] = useState(false);
  const isActive = forcedActive || hovered;

  return (
    <div
      className="relative h-full w-full cursor-default text-left"
      style={{
        padding: "1px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="relative flex h-full w-full min-h-[220px] flex-col overflow-hidden p-5 text-left md:min-h-[240px] md:p-6"
        style={{
          background: isActive
            ? "linear-gradient(145deg, #1a2a1a 0%, #1c1c10 50%, #1a1a0a 100%)"
            : "linear-gradient(180deg, #1b1b1b 0%, #0f0f0f 100%)",
          transition: "background 0.3s ease",
        }}
      >
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(28,205,230,0.18) 0%, rgba(17,20,24,0.5) 45%, rgba(219,214,51,0.18) 100%)",
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,205,230,0.12) 0%, rgba(219,214,51,0.12) 100%)",
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex h-full flex-col justify-between text-left">
          <div>
            <p className="text-left text-[15px] font-semibold leading-[1.5] text-white md:text-[16px]">
              "{testimonial.quote}"
            </p>
            <p className="mt-3 text-left text-[13px] leading-5 text-gray-400">
              {testimonial.subtext}
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 text-left">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="rounded-full object-cover"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="w-full text-left">
              <p className="text-left text-[14px] font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-left text-[12px] text-gray-400">
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Corner accents — cyan left, yellow right */}
      <span
        className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] bg-[#1CCDE6]"
        style={{ opacity: isActive ? 1 : 0.55, transition: "opacity 0.3s ease" }}
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 top-0 w-[2px] bg-[#DBD633]"
        style={{ opacity: isActive ? 1 : 0.55, transition: "opacity 0.3s ease" }}
      />
    </div>
  );
};

export default Testimonial;
