import { useState, useEffect } from "react";
import type { Language } from "../types";

interface NavbarProps {
  isSolidNav: boolean;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const NAV_ITEMS = [
  { label: { id: "HOME", en: "HOME", zh: "首页" }, href: "/" },
  { label: { id: "ABOUT US", en: "ABOUT US", zh: "关于我们" }, href: "/about" },
  { label: { id: "TAX", en: "TAX", zh: "税务" }, href: "/tax" },
  {
    label: { id: "ACCOUNTING", en: "ACCOUNTING", zh: "会计" },
    href: "/accounting",
  },
  { label: { id: "PAYROLL", en: "PAYROLL", zh: "薪资" }, href: "/payroll" },
  { label: { id: "ADVISORY", en: "ADVISORY", zh: "咨询" }, href: "/advisory" },
  {
    label: { id: "TAX TOOL", en: "TAX TOOL", zh: "税务工具" },
    href: "/tax-tool",
    hasDropdown: true,
  },
  { label: { id: "CAREER", en: "CAREER", zh: "职业" }, href: "/career" },
  { label: { id: "MEDIA", en: "MEDIA", zh: "媒体" }, href: "/media" },
  {
    label: { id: "CONTACT", en: "CONTACT", zh: "联系我们" },
    href: "/contact",
  },
];

export default function Navbar({
  isSolidNav,
  language,
  onLanguageChange,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out " +
          (isSolidNav
            ? "bg-primary/95 backdrop-blur border-b border-white/10"
            : "bg-transparent")
        }
      >
        <div className="w-full px-4 lg:px-12">
          <div
            className={
              "flex items-center justify-between transition-all duration-300 " +
              (isSolidNav ? "h-20" : "h-28")
            }
          >
            {/* Logo - Left */}
            <a href="/" className="flex items-center">
              <img
                src={isSolidNav ? "/logo1.png" : "/logo.png"}
                alt="TJAHYADI CONSULTING"
                className="h-20 lg:h-28 w-auto"
                decoding="async"
                loading="eager"
              />
            </a>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "transition-all duration-300 flex items-center gap-1 " +
                    (isSolidNav ? "nav-link-solid text-sm" : "nav-link text-sm")
                  }
                >
                  {item.label[language]}
                  {item.hasDropdown && (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>

            {/* Language Selector - Desktop */}
            <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => onLanguageChange("id")}
                className={
                  "h-6 w-8 overflow-hidden transition ring-1 rounded-none " +
                  (language === "id"
                    ? "ring-white"
                    : "ring-white/30 hover:ring-white/50")
                }
                aria-label="Bahasa Indonesia"
                title="Bahasa Indonesia"
              >
                <img
                  src="https://flagcdn.com/w40/id.png"
                  srcSet="https://flagcdn.com/w80/id.png 2x"
                  alt="Indonesia"
                  className="h-full w-full object-cover"
                />
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={
                  "h-6 w-8 overflow-hidden transition ring-1 rounded-none " +
                  (language === "en"
                    ? "ring-white"
                    : "ring-white/30 hover:ring-white/50")
                }
                aria-label="English"
                title="English"
              >
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  srcSet="https://flagcdn.com/w80/gb.png 2x"
                  alt="English"
                  className="h-full w-full object-cover"
                />
              </button>
              <button
                onClick={() => onLanguageChange("zh")}
                className={
                  "h-6 w-8 overflow-hidden transition ring-1 rounded-none " +
                  (language === "zh"
                    ? "ring-white"
                    : "ring-white/30 hover:ring-white/50")
                }
                aria-label="中文"
                title="中文（简体）"
              >
                <img
                  src="https://flagcdn.com/w40/cn.png"
                  srcSet="https://flagcdn.com/w80/cn.png 2x"
                  alt="中文"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>

            {/* Hamburger Menu Button - Mobile (Right side) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-6 h-0.5 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={
          "fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden " +
          (mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")
        }
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={
          "fixed inset-y-0 left-0 z-[70] w-[85%] max-w-[400px] transform transition-transform duration-300 ease-out lg:hidden " +
          (mobileMenuOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1f3c]/90" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="p-6 pb-4">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="SMCO - Surya Mitra Consulting"
                className="h-24 w-auto"
              />
            </a>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-white/20" />

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      "flex items-center justify-between py-3 text-base font-semibold tracking-wide transition " +
                      (index === 0
                        ? "text-[#8bc34a]"
                        : "text-white/90 hover:text-[#8bc34a]")
                    }
                  >
                    {item.label[language]}
                    {item.hasDropdown && (
                      <svg
                        className="w-4 h-4 text-white/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Flags */}
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => {
                onLanguageChange("id");
              }}
              className="flex items-center gap-3"
            >
              <img
                src="https://flagcdn.com/w40/id.png"
                alt="Indonesia"
                className={
                  "h-6 w-9 object-cover rounded-sm ring-1 " +
                  (language === "id" ? "ring-white" : "ring-white/30")
                }
              />
            </button>
            <button
              onClick={() => {
                onLanguageChange("en");
              }}
              className="flex items-center gap-3"
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className={
                  "h-6 w-9 object-cover rounded-sm ring-1 " +
                  (language === "en" ? "ring-white" : "ring-white/30")
                }
              />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-white/20" />

          {/* Follow Us */}
          <div className="p-6">
            <div className="text-[#8bc34a] text-sm font-semibold mb-3">
              Follow Us :
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
