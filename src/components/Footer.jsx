import React, { useCallback } from "react";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <footer
      id="contact"
      className="bg-white border-t border-[#E5E7EB] py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-10 md:mb-14 md:flex-row md:items-start md:justify-between">
          {/* Brand Details */}
          <div className="max-w-sm">
            <h3 className="mb-4 text-xl font-black tracking-wider text-[#111827]">
              RJ ATLAS DIGITAL AI
            </h3>

            <p className="text-sm leading-relaxed text-[#6B7280]">
              Digital Marketing Agency in Thalassery
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
              Inquiries
            </p>

            <a
              href="mailto:rjatlasdigitalai@gmail.com"
              className="
                inline-flex items-center gap-2
                text-base font-medium text-[#111827]
                transition-colors duration-200 hover:text-[#2563EB]
              "
            >
              <Mail size={16} aria-hidden="true" />
              <span>rjatlasdigitalai@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-8 sm:flex-row">
          <p className="text-center text-xs text-[#6B7280] sm:text-left">
            &copy; {new Date().getFullYear()} RJ ATLAS DIGITAL AI. All rights
            reserved.
          </p>

         
        </div>
      </div>
    </footer>
  );
}
