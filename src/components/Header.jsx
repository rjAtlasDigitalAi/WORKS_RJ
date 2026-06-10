import React, { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Marketing", href: "#marketing", targetId: "marketing" },
  { name: "Websites", href: "#websites", targetId: "websites" },
  { name: "Video", href: "#video", targetId: "video" },
];

const HEADER_OFFSET = 80;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((targetId) => {
    const element = document.getElementById(targetId);

    if (!element) return;

    const offsetPosition =
      element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (event, targetId) => {
      event.preventDefault();
      scrollToSection(targetId);
    },
    [scrollToSection]
  );

  const handleLogoClick = useCallback((event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="
            text-base font-extrabold tracking-wider text-[#111827]
            transition-opacity hover:opacity-80
            sm:text-lg
          "
        >
          RJ ATLAS DIGITAL AI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.targetId)}
              className="
                text-sm font-medium text-[#6B7280]
                transition-colors duration-200 hover:text-[#111827]
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "contact")}
            className="
              rounded-full bg-[#2563EB] px-5 py-2
              text-sm font-medium text-white
              transition-colors duration-200 hover:bg-[#1d4ed8]
            "
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="
            p-2 text-[#111827] md:hidden
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-[#2563EB] focus-visible:ring-offset-2
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="
            border-t border-[#E5E7EB] bg-white px-4 py-5
            shadow-md md:hidden
          "
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.targetId)}
                className="
                  block rounded-lg py-2 text-base font-medium
                  text-[#6B7280] transition-colors hover:text-[#111827]
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              className="
                mt-2 block rounded-full bg-[#2563EB] px-5 py-3
                text-center text-base font-medium text-white
                transition-colors hover:bg-[#1d4ed8]
              "
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
