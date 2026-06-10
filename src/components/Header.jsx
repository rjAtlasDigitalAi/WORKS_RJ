import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Marketing', href: '#marketing' },
    { name: 'Websites', href: '#websites' },
    { name: 'Video', href: '#video' },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-extrabold tracking-wider text-[#111827] hover:opacity-80 transition-opacity"
        >
          RJ ATLAS DIGITAL AI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.substring(1))}
              className="text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="px-5 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1d4ed8] rounded-full transition-colors duration-200"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#111827] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-4 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.substring(1))}
              className="block text-base font-medium text-[#6B7280] hover:text-[#111827] py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="block text-center px-5 py-3 text-base font-medium text-white bg-[#2563EB] hover:bg-[#1d4ed8] rounded-full"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
