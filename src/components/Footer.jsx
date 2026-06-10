import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socials = [
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), 
      href: 'https://linkedin.com' 
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      href: 'https://twitter.com' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ), 
      href: 'https://instagram.com' 
    }
  ];

  return (
    <footer id="contact" className="bg-[#FFFFFF] border-t border-[#E5E7EB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          {/* Brand details */}
          <div className="max-w-sm">
            <h3 className="text-xl font-black tracking-wider text-[#111827] mb-4">
              RJ ATLAS DIGITAL AI
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
             Digital Marketing Agency in Thalassery
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280] mb-2">
                Inquiries
              </p>
              <a
                href="mailto:contact@rj-atlas.digital"
                className="inline-flex items-center space-x-2 text-base font-medium text-[#111827] hover:text-[#2563EB] transition-colors duration-200"
              >
                <Mail size={16} />
                <span>rjatlasdigitalai@gmail.com</span>
              </a>
            </div>

           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} RJ ATLAS DIGITAL AI. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
