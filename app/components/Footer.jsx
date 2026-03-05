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
      <div className="max-w-screen-xl mx-auto px-10 py-10">
        <div className="flex flex-row items-start gap-0">
          {/* Column 1: Brand — ~22% */}
          <div className="flex flex-col gap-4" style={{ width: "22%" }}>
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/logo-footer.png"
                alt="logo"
                width={110}
                height={110}
              />
            </div>

            {/* Company info */}
            <div className="text-black text-sm leading-relaxed">
              <p>URFX Global Trading Inc.</p>
              <p>Registered in Vancouver, Canada</p>
            </div>

            {/* Contact */}
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

          {/* Spacer */}
          <div style={{ width: "8%" }} />

          {/* Column 2: Quick Links — ~15% */}
          <div className="flex flex-col gap-2" style={{ width: "15%" }}>
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

          {/* Column 3: Legal — ~15% */}
          <div className="flex flex-col gap-2" style={{ width: "15%" }}>
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

          {/* Spacer */}
          <div style={{ width: "3%" }} />

          {/* Column 4: Newsletter — ~37% */}
          <div className="flex flex-col gap-4" style={{ width: "37%" }}>
            <h3 className="text-black font-black text-3xl leading-tight">
              Subscribe to our
              <br />
              Newsletter
            </h3>

            {/* Email input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm text-black placeholder-gray-700 rounded-sm outline-none focus:ring-2 focus:ring-black/10"
              style={{
                background: "rgba(255,255,255,0.30)",
                border: "none",
              }}
            />

            {/* Submit button */}
            <div>
              <button
                className="bg-white text-black font-bold text-sm px-8 py-3 rounded-sm hover:bg-black hover:text-white transition-colors duration-200"
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
