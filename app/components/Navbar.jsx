import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const navItems = ["Home", "Testimonials", "About Us", "FAQ", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070d]/90 backdrop-blur">
      <div className="mx-auto flex h-[74px] w-full max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Image src="/assets/icons/logo-header.svg" alt="URFX logo" width={134} height={41} />

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="flex items-center gap-3">
          <ButtonGradient className="h-[44px] min-w-[92px] px-4 text-[18px]">Login</ButtonGradient>
          <ButtonGradient variant="register" className="h-[44px] min-w-[122px] px-5 text-[18px]">
            Register
          </ButtonGradient>
        </div>
      </div>
    </header>
  );
}
