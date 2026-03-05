export default function ButtonGradient({
  children,
  variant = "login",
  className = "",
  type = "button",
}) {
  const isRegister = variant === "not used";

  return (
    <button
      type={type}
      className={`btn-gradient group relative inline-flex min-h-[40px] items-center justify-center overflow-hidden px-4 py-2 text-[14px] font-semibold leading-none text-white ${className}`}
      data-variant={isRegister ? "register" : "login"}
    >
      <span className="btn-gradient-bg absolute inset-0" />
      <div className="btn-gradient-hover absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100" />

      <span className="absolute left-0 top-0 h-[2px] w-[20px] bg-[#18d6f5]" />
      <span className="absolute left-0 top-0 h-full w-[2px] bg-[#18d6f5]" />
      <span className="absolute bottom-0 left-0 h-[2px] w-[20px] bg-[#18d6f5]" />

      <span className="absolute right-0 top-0 h-[2px] w-[20px] bg-[#d9e62a]" />
      <span className="absolute right-0 top-0 h-full w-[2px] bg-[#d9e62a]" />
      <span className="absolute bottom-0 right-0 h-[2px] w-[20px] bg-[#d9e62a]" />

      <span className="relative z-20 drop-shadow-[0_1px_0_rgba(0,0,0,0.45)]">
        {children}
      </span>
    </button>
  );
}
