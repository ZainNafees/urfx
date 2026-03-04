import Image from "next/image";

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
  const loopItems = [...trustStripItems, ...trustStripItems];

  return (
    <section
      className="relative mt-16 w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #0a2420 0%, #1a2a10 50%, #252d00 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "1.5px",
          background: "linear-gradient(to right, #00e5ff, #ffd600)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "1.5px",
          background: "linear-gradient(to right, #00e5ff, #ffd600)",
        }}
      />
      {/* Bottom border — yellow-green */}
      <div style={{ height: "1.5px", background: "#c8e800" }} />

      <div className="marquee-track flex min-w-max items-center gap-12 px-6 py-3 text-white md:gap-16">
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
