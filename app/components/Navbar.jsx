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
      <div className="relative mx-auto flex h-[84px] w-full max-w-[1240px] items-center justify-between gap-4 px-5 md:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex w-[140px] items-center md:w-[170px] lg:shrink-0">
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
        <nav className="hidden flex-1 items-center justify-center gap-6 px-2 md:flex lg:gap-7 xl:gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="whitespace-nowrap text-[15px] font-medium text-[var(--nav-link)] transition hover:text-[#16d4f4] xl:text-[17px]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center justify-end gap-2 lg:flex lg:shrink-0 xl:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-[40px] min-w-[96px] items-center justify-center gap-2 rounded-full border border-[var(--theme-toggle-border)] bg-[var(--theme-toggle-bg)] px-3 text-[14px] font-semibold text-[var(--theme-toggle-text)] transition hover:opacity-90 xl:min-w-[110px] xl:px-4"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <ButtonGradient className="h-[40px] min-w-[76px] px-3 text-[15px] xl:min-w-[80px] xl:px-4">
            Login
          </ButtonGradient>
          <ButtonGradient
            variant="register"
            className="h-[40px] min-w-[92px] px-4 text-[15px] xl:min-w-[100px] xl:px-5"
          >
            Register
          </ButtonGradient>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[var(--nav-link)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="space-y-6 border-t border-white/10 bg-[var(--nav-bg-solid)] px-6 py-6 lg:hidden">
          
          <nav className="flex flex-col space-y-4 md:hidden">
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

          <div className="flex flex-col gap-3 pt-4 md:flex-row md:items-center md:justify-end">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-[40px] w-full items-center justify-center gap-2 rounded-full border border-[var(--theme-toggle-border)] bg-[var(--theme-toggle-bg)] px-4 text-[14px] font-semibold text-[var(--theme-toggle-text)] transition hover:opacity-90 md:w-auto"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <ButtonGradient className="h-[40px] w-full text-[15px] md:w-auto md:px-6">
              Login
            </ButtonGradient>
            <ButtonGradient
              variant="register"
              className="h-[40px] w-full text-[15px] md:w-auto md:px-6"
            >
              Register
            </ButtonGradient>
          </div>
        </div>
      )}
    </header>
  );
}
