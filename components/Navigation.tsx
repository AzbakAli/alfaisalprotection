"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/config/language";
import { businessConfig } from "@/config/business";
import { Menu, X, Phone } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: { en: "Home", ar: "الرئيسية" } },
    { href: "#services", label: { en: "Services", ar: "الخدمات" } },
    { href: "#why-us", label: { en: "Why Choose Us", ar: "لماذا نحن" } },
    { href: "#gallery", label: { en: "Gallery", ar: "المعرض" } },
    { href: "#faq", label: { en: "FAQs", ar: "الأسئلة الشائعة" } },
    { href: "#contact", label: { en: "Contact", ar: "اتصل بنا" } },
  ];

  const handleNavLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${businessConfig.phone.primary}`, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-lg"
          : "bg-neutral-950/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavLinkClick("#home")}
          >
            <AnimatedLogo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label[language]}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded-lg hover:border-neutral-600 transition-colors"
              aria-label="Toggle language"
            >
              {language === "en" ? "العربية" : "English"}
            </button>

            {/* Contact CTA */}
            <button
              onClick={openWhatsApp}
              className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === "en" ? "Call Now" : "اتصل الآن"}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-md border-t border-neutral-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className="block w-full text-left rtl:text-right text-neutral-300 hover:text-white py-2 text-base font-medium transition-colors"
              >
                {link.label[language]}
              </button>
            ))}
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg transition-colors mt-4 w-full"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === "en" ? "Call Now" : "اتصل الآن"}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
