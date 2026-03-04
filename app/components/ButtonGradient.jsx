export default function ButtonGradient({
  children,
  variant = "login",
  className = "",
  type = "button",
}) {
  const isRegister = variant === "hello";

  return (
    <button
      type={type}
      className={`group relative inline-flex min-h-[40px] px-4 py-2 items-center justify-center overflow-hidden text-[14px] font-semibold leading-none text-white ${className}`}
    >
      {/* Base Gradient background */}
      <span
        className={`absolute inset-0 ${
          isRegister
            ? "bg-[linear-gradient(90deg,rgba(36,169,206,0.28)_0%,rgba(104,181,66,0.35)_45%,rgba(171,195,42,0.28)_100%)]"
            : "bg-[linear-gradient(90deg,rgba(27,175,215,0.16)_0%,rgba(14,18,25,0.9)_50%,rgba(175,196,43,0.16)_100%)]"
        }`}
      />

      {/* 🔥 Hover Glow Overlay (NEW) */}
     <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,205,230,0.22)_0%,rgba(219,214,51,0.22)_100%)] opacity-0 transition duration-300 group-hover:opacity-100 z-10" />
      {/* Decorative borders */}
      <span className="absolute left-0 top-0 h-[2px] w-[20px] bg-[#18d6f5]" />
      <span className="absolute left-0 top-0 h-full w-[2px] bg-[#18d6f5]" />
      <span className="absolute left-0 bottom-0 h-[2px] w-[20px] bg-[#18d6f5]" />

      <span className="absolute right-0 top-0 h-[2px] w-[20px] bg-[#d9e62a]" />
      <span className="absolute right-0 top-0 h-full w-[2px] bg-[#d9e62a]" />
      <span className="absolute right-0 bottom-0 h-[2px] w-[20px] bg-[#d9e62a]" />

      {/* Button content */}
      <span className="relative z-10 drop-shadow-[0_1px_0_rgba(0,0,0,0.45)]">
        {children}
      </span>
    </button>
  );
}