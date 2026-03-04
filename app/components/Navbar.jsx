import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const navItems = ["Home", "Testimonials", "About Us", "FAQ", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070d]/90 backdrop-blur">
      <div className="relative mx-auto flex h-[84px] w-full max-w-[1240px] items-center justify-between px-5 md:px-8">
        <div className="flex w-[170px] items-center">
          <Image src="/assets/icons/logo-header.svg" alt="URFX logo" width={134} height={41} />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[17px] font-medium text-slate-200 transition hover:text-[#16d4f4]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex w-[260px] items-center justify-end gap-3">
          <ButtonGradient className="h-[40px] min-w-[80px] px-4 text-[15px]">Login</ButtonGradient>
          <ButtonGradient variant="register" className="h-[40px] min-w-[100px] px-5 text-[15px]">
            Register
          </ButtonGradient>
        </div>
      </div>
    </header>
  );
}
