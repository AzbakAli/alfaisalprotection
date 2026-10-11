"use client";

import { useLanguage } from "@/config/language";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { businessConfig } from "@/config/business";

export default function Hero() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${businessConfig.phone.primary}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
        <img
          src="/cardetailingcover.png"
          alt="Luxury car in detailing studio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {language === "en" ? (
              <>
                Protect Your Finish.
                <br />
                <span className="text-amber-500 animate-pulse">Elevate Every Drive.</span>
              </>
            ) : (
              <>
                احمِ طلاء سيارتك.
                <br />
                <span className="text-amber-500 animate-pulse">وارتقِ بكل رحلة.</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Explore professional vehicle care and protection solutions designed around your car."
              : "اكتشف حلول العناية بالسيارات وحمايتها، المصممة لتناسب احتياجات مركبتك."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse group hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <span>
                {language === "en" ? "Book an Appointment" : "حجز موعد"}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("#services")}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              {language === "en" ? "Explore Services" : "استكشف الخدمات"}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
