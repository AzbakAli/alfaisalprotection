"use client";

import { useLanguage } from "@/config/language";
import { businessConfig } from "@/config/business";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getServiceImage = (serviceId: string) => {
    // Use .jfif format since that's what the files are named
    return `/services/${serviceId}.jfif`;
  };

  return (
    <section id="services" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {language === "en" ? "Our Services" : "خدماتنا"}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Professional vehicle protection and detailing solutions"
              : "حلول احترافية لحماية وتلميع المركبات"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service) => (
            <div
              key={service.id}
              className="group bg-neutral-800/50 border border-neutral-700/50 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="aspect-video overflow-hidden bg-neutral-800">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name[language]}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description[language]}
                </p>

                {/* Inquiry Button */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-500 hover:text-amber-400 font-medium transition-colors group-hover:underline"
                >
                  <span>
                    {language === "en" ? "Inquire Now" : "استفسر الآن"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Confirmation Badge */}
                {!service.confirmed && (
                  <div className="mt-4 text-xs text-neutral-500">
                    {language === "en"
                      ? "* Service availability to be confirmed"
                      : "* يتأكد توفر الخدمة"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
            {language === "en"
              ? "* Service categories are proposed based on industry standards. Please contact us to confirm availability and details."
              : "* فئات الخدمات مقترحة بناءً على معايير الصناعة. يرجى الاتصال بنا للتأكد من التوفر والتفاصيل."}
          </p>
        </div>
      </div>
    </section>
  );
}
