"use client";

import { useLanguage } from "@/config/language";
import { Shield, Clock, Award, Users } from "lucide-react";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: {
        en: "Quality Protection",
        ar: "حماية عالية الجودة",
      },
      description: {
        en: "Premium materials and expert application for lasting results",
        ar: "مواد مميزة وتطبيق احترافي لنتائج تدوم طويلاً",
      },
    },
    {
      icon: Clock,
      title: {
        en: "Timely Service",
        ar: "خدمة في الوقت المحدد",
      },
      description: {
        en: "Respect for your time with efficient scheduling and delivery",
        ar: "احترام لوقتك مع جدولة فعالة وتسليم في الوقت المناسب",
      },
    },
    {
      icon: Award,
      title: {
        en: "Expert Care",
        ar: "عناية احترافية",
      },
      description: {
        en: "Skilled technicians dedicated to vehicle excellence",
        ar: "فنيون مهرة ملتزمون بالتميز في خدمة المركبات",
      },
    },
    {
      icon: Users,
      title: {
        en: "Customer Focus",
        ar: "تركيز على العملاء",
      },
      description: {
        en: "Personalized solutions tailored to your needs",
        ar: "حلول مخصصة مصممة لتلبية احتياجاتك",
      },
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {language === "en" ? "Why Choose Us" : "لماذا تختارنا"}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Experience the difference of professional vehicle care"
              : "اكتشف الفرق في العناية الاحترافية بالمركبات"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-6 group-hover:bg-amber-500/20 transition-colors">
                <feature.icon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title[language]}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {feature.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm max-w-3xl mx-auto">
            {language === "en"
              ? "We invite you to explore our services, compare options, and contact us to discuss how we can help protect your vehicle. Every car deserves expert care."
              : "ندعوك لاستكشاف خدماتنا، ومقارنة الخيارات، والاتصال بنا لمناقشة كيف يمكننا مساعدتك في حماية مركبتك. كل سيارة تستحق عناية احترافية."}
          </p>
        </div>
      </div>
    </section>
  );
}
