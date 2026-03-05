"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import ButtonGradient from "./ButtonGradient";

const navItems = ["Home", "Testimonials", "About Us", "FAQ", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className="site-navbar sticky top-0 z-40 border-b border-white/10 bg-[var(--nav-bg)] backdrop-blur">
      <div className="relative mx-auto flex h-[84px] w-full max-w-[1240px] items-center justify-between px-5 md:px-8">
        
        {/* Logo */}
        <div className="flex w-[170px] items-center">
          <Image
            src={
              theme === "light"
                ? "/assets/icons/nav-logo-dark.png"
                : "/assets/icons/logo-header.svg"
            }
            alt="URFX logo"
            width={134}
            height={41}
            className={theme === "light" ? "h-auto w-[116px]" : "h-auto w-[134px]"}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[17px] font-medium text-[var(--nav-link)] transition hover:text-[#16d4f4]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden w-[320px] items-center justify-end gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-[40px] min-w-[110px] items-center justify-center gap-2 rounded-full border border-[var(--theme-toggle-border)] bg-[var(--theme-toggle-bg)] px-4 text-[14px] font-semibold text-[var(--theme-toggle-text)] transition hover:opacity-90"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
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
          className="lg:hidden text-[var(--nav-link)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="space-y-6 border-t border-white/10 bg-[var(--nav-bg-solid)] px-6 py-6 lg:hidden">
          
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[17px] font-medium text-[var(--nav-link)] transition hover:text-[#16d4f4]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-[40px] w-full items-center justify-center gap-2 rounded-full border border-[var(--theme-toggle-border)] bg-[var(--theme-toggle-bg)] px-4 text-[14px] font-semibold text-[var(--theme-toggle-text)] transition hover:opacity-90"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
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
