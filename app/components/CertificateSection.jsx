const certificates = [
  {
    id: 1,
    name: "Andres Moore",
    quote:
      "I started to realize that I could have all this capital to trade and generate 3x more income.",
    badgeTone: "teal",
    active: false,
  },
  {
    id: 2,
    name: "Ines Morean",
    quote:
      "I started to realize that I could have all this capital to trade and generate 3x more income.",
    badgeTone: "gold",
    active: true,
  },
  {
    id: 3,
    name: "Mike McCullogh",
    quote:
      "It's incredible to be able to diversify and have different streams of income.",
    badgeTone: "silver",
    active: false,
  },
  {
    id: 4,
    name: "Mike McCullogh",
    quote:
      "It's incredible to be able to diversify and have different streams of income.",
    badgeTone: "silver",
    active: false,
  },
];

const badgeToneClasses = {
  teal: "from-[#43f4d6] to-[#00a79a] border-[#7dfce9]",
  gold: "from-[#ffcf62] to-[#ff9e3d] border-[#ffe49f]",
  silver: "from-[#b9c0ca] to-[#7e8794] border-[#d2d8df]",
};

const CertificateSection = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-20 pt-16 text-white md:px-8">
      <div className="pointer-events-none absolute left-1/2 top-[220px] h-[360px] w-[360px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(194,221,58,0.33)_0%,rgba(21,187,227,0.2)_38%,rgba(0,0,0,0)_74%)] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <header className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[50px]">
            Certified Trader Achievements
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-[23px] leading-[1.35] text-gray-400">
            Recognizing top traders for their achievements and payouts. These certificates celebrate
            dedication, skill, and consistent performance.
          </p>
        </header>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {certificates.map((item) => (
            <article
              key={item.id}
              className={`group relative w-[315px] shrink-0 bg-[#111] p-[1px] ${
                item.active
                  ? "bg-[linear-gradient(135deg,#00d7ff_0%,#d8e23e_100%)]"
                  : "bg-[linear-gradient(180deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_100%)]"
              }`}
            >
              <div className="h-full bg-[linear-gradient(180deg,#171717_0%,#101010_100%)] p-4">
                <div className="relative h-[182px] overflow-hidden bg-[linear-gradient(125deg,#183a8d_0%,#221868_48%,#14215f_100%)]">
                  <div className="absolute -left-7 top-9 h-[130px] w-[130px] rounded-full border border-white/20" />
                  <div className="absolute -left-2 top-14 h-[2px] w-[150px] rotate-[26deg] bg-white/30" />
                  <div className="absolute left-[138px] top-2 h-8 w-8 bg-white/90" />
                  <div className="absolute left-5 top-5 text-[12px] font-semibold tracking-[0.2em] text-white/90">
                    URFX
                  </div>
                  <div className="absolute left-[92px] top-[52px] text-[31px] font-semibold tracking-[0.04em] text-white">
                    CERTIFICATE
                  </div>
                  <div className="absolute left-[131px] top-[88px] text-[8px] tracking-[0.35em] text-white/70">
                    OF PERFORMANCE
                  </div>

                  <div
                    className={`absolute left-6 top-10 flex h-[84px] w-[84px] items-center justify-center rounded-full border-4 bg-[linear-gradient(180deg,var(--tw-gradient-from),var(--tw-gradient-to))] text-center text-[10px] font-semibold leading-[1.2] text-white ${badgeToneClasses[item.badgeTone]}`}
                  >
                    URFX
                    <br />
                    & CO
                  </div>
                </div>

                <p className="mt-4 text-[22px] leading-[1.3] text-gray-200">{item.quote}</p>
                <p className="mt-4 text-[35px] font-medium leading-[1.2]">{item.name}</p>
              </div>

              {item.active && (
                <>
                  <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-10 bg-[#1CCDE6]" />
                  <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[#1CCDE6]" />
                  <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-10 bg-[#1CCDE6]" />

                  <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-10 bg-[#DBD633]" />
                  <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-[#DBD633]" />
                  <span className="pointer-events-none absolute right-0 bottom-0 h-[2px] w-10 bg-[#DBD633]" />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
