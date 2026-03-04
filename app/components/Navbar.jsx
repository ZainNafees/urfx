"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ButtonGradient from "./ButtonGradient";

const navItems = ["Home", "Testimonials", "About Us", "FAQ", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070d]/90 backdrop-blur">
      <div className="relative mx-auto flex h-[84px] w-full max-w-[1240px] items-center justify-between px-5 md:px-8">
        
        {/* Logo */}
        <div className="flex w-[170px] items-center">
          <Image
            src="/assets/icons/logo-header.svg"
            alt="URFX logo"
            width={134}
            height={41}
          />
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop Buttons */}
        <div className="hidden w-[260px] items-center justify-end gap-3 lg:flex">
          <ButtonGradient className="h-[40px] min-w-[80px] px-4 text-[15px]">
            Login
          </ButtonGradient>
          <ButtonGradient
            variant="register"
            className="h-[40px] min-w-[100px] px-5 text-[15px]"
          >
            Register
          </ButtonGradient>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#05070d] px-6 py-6 space-y-6">
          
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[17px] font-medium text-slate-200 transition hover:text-[#16d4f4]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4">
            <ButtonGradient className="h-[40px] w-full text-[15px]">
              Login
            </ButtonGradient>
            <ButtonGradient
              variant="register"
              className="h-[40px] w-full text-[15px]"
            >
              Register
            </ButtonGradient>
          </div>
        </div>
      )}
    </header>
  );
}