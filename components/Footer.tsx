"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/config/language";
import { businessConfig } from "@/config/business";
import { Phone, MapPin, MessageSquare } from "lucide-react";

// Custom brand icons (removed from lucide-react v1)
const Instagram = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const { language } = useLanguage();
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { href: "#home", label: { en: "Home", ar: "الرئيسية" } },
    { href: "#services", label: { en: "Services", ar: "الخدمات" } },
    { href: "#why-us", label: { en: "Why Choose Us", ar: "لماذا نحن" } },
    { href: "#gallery", label: { en: "Gallery", ar: "المعرض" } },
    { href: "#faq", label: { en: "FAQs", ar: "الأسئلة الشائعة" } },
    { href: "#contact", label: { en: "Contact", ar: "اتصل بنا" } },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-neutral-700 mb-4 overflow-hidden">
              <img
                src="/logo.webp"
                alt="AlFaisal Protection Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {businessConfig.name[language]}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {language === "en"
                ? "Professional vehicle protection and detailing services in Madinah, Saudi Arabia."
                : "خدمات احترافية لحماية وتلميع المركبات في المدينة المنورة، المملكة العربية السعودية."}
            </p>
            {/* Social Media */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {businessConfig.social.instagram && (
                <a
                  href={businessConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {businessConfig.social.facebook && (
                <a
                  href={businessConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {businessConfig.social.tiktok && (
                <a
                  href={businessConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                  aria-label="TikTok"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}
              {businessConfig.social.snapchat && (
                <a
                  href={businessConfig.social.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                  aria-label="Snapchat"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {language === "en" ? "Navigation" : "التنقل"}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {language === "en" ? "Contact" : "اتصل بنا"}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessConfig.phone.primary}`}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{businessConfig.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={businessConfig.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 rtl:space-x-reverse text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {businessConfig.location.city[language]}, {businessConfig.location.country[language]}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {language === "en" ? "Address" : "العنوان"}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {businessConfig.address[language]}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} {businessConfig.name.full[language]}.{" "}
              {language === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
            </p>
            <p className="text-neutral-600 text-xs">
              {language === "en"
                ? "Contact information and services to be verified with business owner."
                : "معلومات الاتصال والخدمات للتأكيد مع صاحب العمل."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
