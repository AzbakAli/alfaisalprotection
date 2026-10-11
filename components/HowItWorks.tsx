"use client";

import { useLanguage } from "@/config/language";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const { language } = useLanguage();

  const steps = [
    {
      number: "01",
      title: {
        en: "Select a Service",
        ar: "اختر خدمة",
      },
      description: {
        en: "Browse our services and choose what your vehicle needs",
        ar: "تصفح خدماتنا واختر ما تحتاجه مركبتك",
      },
    },
    {
      number: "02",
      title: {
        en: "Submit an Inquiry",
        ar: "قدم استفساراً",
      },
      description: {
        en: "Fill out the contact form with your details and preferences",
        ar: "املأ نموذج الاتصال بتفاصيلك وتفضيلاتك",
      },
    },
    {
      number: "03",
      title: {
        en: "Confirm Details",
        ar: "أكد التفاصيل",
      },
      description: {
        en: "We'll contact you to confirm pricing and schedule",
        ar: "سنتصل بك لتأكيد الأسعار والجدولة",
      },
    },
    {
      number: "04",
      title: {
        en: "Arrive for Service",
        ar: "وصل للخدمة",
      },
      description: {
        en: "Visit us at your scheduled time for professional care",
        ar: "زرنا في وقتك المحدد للحصول على عناية احترافية",
      },
    },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {language === "en" ? "How It Works" : "كيف يعمل"}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Simple steps to protect your vehicle"
              : "خطوات بسيطة لحماية مركبتك"}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-6xl font-bold text-amber-500/20 mb-4">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title[language]}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description[language]}
                </p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 rtl:-left-4 rtl:right-auto text-amber-500/30">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-neutral-400 text-sm leading-relaxed">
              {language === "en"
                ? "Important: Submitting an inquiry does not automatically confirm an appointment. We will contact you to verify details, confirm availability, and finalize scheduling."
                : "مهم: تقديم استفسار لا يؤكد تلقائياً حجز موعد. سنتصل بك للتحقق من التفاصيل، تأكيد التوفر، وإتمام الجدولة."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
