"use client";

import { useState } from "react";
import { useLanguage } from "@/config/language";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: {
        en: "What is Paint Protection Film (PPF)?",
        ar: "ما هو فيلم حماية الطلاء (PPF)؟",
      },
      answer: {
        en: "Paint Protection Film is a clear, durable film applied to your vehicle's painted surfaces to protect against scratches, chips, and environmental damage. It helps maintain your car's appearance and resale value. For specific product details and pricing, please contact us directly.",
        ar: "فيلم حماية الطلاء هو فيلم شفاف ومتين يطبق على أسطح مركبتك الملونة لحمايتها من الخدوش والرقائق والأضرار البيئية. يساعد في الحفاظ على مظهر سيارتك وقيمتها لإعادة البيع. للحصول على تفاصيل المنتج والأسعار المحددة، يرجى الاتصال بنا مباشرة.",
      },
    },
    {
      question: {
        en: "How long does window tinting last?",
        ar: "كم يدوم تظليل النوافذ؟",
      },
      answer: {
        en: "Window tint durability depends on the quality of film used and installation. High-quality tints can last many years with proper care. For specific warranty information and film options available at our location, please contact us.",
        ar: "تعتمد متانة تظليل النوافذ على جودة الفيلم المستخدم والتثبيت. يمكن للتظليل عالي الجودة أن يدوم لسنوات عديدة مع العناية المناسبة. للحصول على معلومات الضمان وخيارات الفيلم المتوفرة في موقعنا، يرجى الاتصال بنا.",
      },
    },
    {
      question: {
        en: "What is ceramic coating?",
        ar: "ما هو طلاء السيراميك؟",
      },
      answer: {
        en: "Ceramic coating is a liquid polymer that bonds to your vehicle's paint, creating a protective layer against UV rays, dirt, and minor scratches. It provides long-lasting shine and easier cleaning. Contact us to learn about our available ceramic coating options.",
        ar: "طلاء السيراميك هو بوليمر سائل يرتبط بطلاء مركبتك، مما يخلق طبقة واقية من الأشعة فوق البنفسجية والأوساخ والخدوش الطفيفة. يوفر لمعاناً طويل الأمد وتنظيفاً أسهل. اتصل بنا لمعرفة خيارات طلاء السيراميك المتوفرة لدينا.",
      },
    },
    {
      question: {
        en: "How do I request an appointment?",
        ar: "كيف أطلب حجز موعد؟",
      },
      answer: {
        en: "You can request an appointment by filling out our contact form below, calling us directly, or using WhatsApp. We'll contact you to confirm details and schedule your visit. Please note that submitting a request does not guarantee an appointment until confirmed.",
        ar: "يمكنك طلب موعد عن طريق ملء نموذج الاتصال أدناه، أو الاتصال بنا مباشرة، أو استخدام واتساب. سنتصل بك لتأكيد التفاصيل وجدولة زيارتك. يرجى ملاحظة أن تقديم طلب لا يضمن حجز موعد حتى يتم تأكيده.",
      },
    },
    {
      question: {
        en: "What information should I provide when contacting you?",
        ar: "ما هي المعلومات التي يجب أن أقدمها عند الاتصال بكم؟",
      },
      answer: {
        en: "Please provide your name, phone number, vehicle make and model, the service you're interested in, and your preferred date. This helps us assist you more efficiently and check availability.",
        ar: "يرجى تقديم اسمك ورقم هاتفك وطراز وموديل مركبتك والخدمة التي تهتم بها والتاريخ المفضل لديك. هذا يساعدنا على مساعدتك بشكل أكثر كفاءة والتحقق من التوفر.",
      },
    },
    {
      question: {
        en: "Do you offer warranties on your services?",
        ar: "هل تقدمون ضمانات على خدماتكم؟",
      },
      answer: {
        en: "Warranty terms vary by service and product used. For specific warranty information about any service, please contact us directly. We'll be happy to provide details based on your specific needs.",
        ar: "تختلف شروط الضمان حسب الخدمة والمنتج المستخدم. للحصول على معلومات الضمان المحددة لأي خدمة، يرجى الاتصال بنا مباشرة. سنكون سعداء بتقديم التفاصيل بناءً على احتياجاتك المحددة.",
      },
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {language === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Find answers to common questions about our services"
              : "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left rtl:text-right focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium pr-4 rtl:pl-4 rtl:pr-0">
                  {faq.question[language]}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {faq.answer[language]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 mb-4">
            {language === "en"
              ? "Still have questions?"
              : "لا تزال لديك أسئلة؟"}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
          >
            {language === "en" ? "Contact Us" : "اتصل بنا"}
          </a>
        </div>
      </div>
    </section>
  );
}
