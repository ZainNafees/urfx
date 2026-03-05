"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="w-full"
      style={{
        background:
          "linear-gradient(to right, #1CCDE6 0%, #9ED473 40%, #DBD633 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:gap-0 md:items-start">

          {/* Column 1 */}
          <div className="flex flex-col gap-4 w-full md:w-[22%]">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/logo-footer.png"
                alt="logo"
                width={110}
                height={110}
              />
            </div>

            <div className="text-black text-sm leading-relaxed">
              <p>URFX Global Trading Inc.</p>
              <p>Registered in Vancouver, Canada</p>
            </div>

            <div className="flex flex-col gap-2 text-black text-sm mt-2">
              <a
                href="mailto:support@urfx.io"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail size={15} strokeWidth={2} />
                <span>support@urfx.io</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone size={15} strokeWidth={2} />
                <span>+1(555) 123-4567</span>
              </a>
            </div>
          </div>

          {/* Spacer (only md and up) */}
          <div className="hidden md:block md:w-[8%]" />

          {/* Column 2 */}
          <div className="flex flex-col gap-2 w-full md:w-[15%]">
            <p className="text-black font-bold text-sm mb-1">Quick Links</p>
            {[
              "Home",
              "Testimonials",
              "About Us",
              "FAQ",
              "Contact Us",
              "Trading Rules",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-black text-sm hover:underline"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2 w-full md:w-[15%]">
            <p className="text-black font-bold text-sm mb-1">Legal</p>
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "Disclaimer",
              "Become A Partner",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-black text-sm hover:underline"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Spacer (only md and up) */}
          <div className="hidden md:block md:w-[3%]" />

          {/* Column 4 */}
          <div className="flex flex-col gap-4 w-full md:w-[37%]">
            <h3 className="text-black font-black text-2xl md:text-3xl leading-tight">
              Subscribe to our
              <br />
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm text-black placeholder-gray-700 rounded-sm outline-none focus:ring-2 focus:ring-black/10"
              style={{
                background: "rgba(255,255,255,0.30)",
                border: "none",
              }}
            />

            <div>
              <button
                className="bg-white text-black font-bold text-sm px-8 py-3 rounded-sm hover:bg-black hover:text-white transition-colors duration-200 w-full sm:w-auto"
                style={{ border: "2px solid #000" }}
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;