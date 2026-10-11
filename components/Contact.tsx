"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/config/language";
import { businessConfig, formatWhatsAppMessage, getWhatsAppUrl } from "@/config/business";
import { Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === "en" ? "Name is required" : "الاسم مطلوب";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === "en" ? "Phone number is required" : "رقم الهاتف مطلوب";
    }
    if (!formData.vehicle.trim()) {
      newErrors.vehicle = language === "en" ? "Vehicle information is required" : "معلومات المركبة مطلوبة";
    }
    if (!formData.service) {
      newErrors.service = language === "en" ? "Please select a service" : "الرجاء اختيار خدمة";
    }
    if (!formData.date) {
      newErrors.date = language === "en" ? "Preferred date is required" : "التاريخ المفضل مطلوب";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Since there's no backend, redirect to WhatsApp with the message
    const whatsappMessage = formatWhatsAppMessage(formData, language);
    const whatsappUrl = getWhatsAppUrl(whatsappMessage);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        vehicle: "",
        service: "",
        date: "",
        message: "",
      });
    }, 500);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "م";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {language === "en" ? "Contact Us" : "اتصل بنا"}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Get in touch to discuss your vehicle care needs"
              : "تواصل معنا لمناقشة احتياجات عناية مركبتك"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {language === "en" ? "Phone" : "الهاتف"}
                  </h3>
                  <a
                    href={`tel:${businessConfig.phone.primary}`}
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-lg"
                  >
                    {businessConfig.phone.display}
                  </a>
                  <p className="text-neutral-500 text-sm mt-2">
                    {language === "en"
                      ? "* Primary number (from listings - to be verified)"
                      : "* الرقم الأساسي (من القوائم - للتأكيد)"}
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {language === "en" ? "Location" : "الموقع"}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                    {businessConfig.address[language]}
                  </p>
                  <a
                    href={businessConfig.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-500 hover:text-amber-400 transition-colors text-sm font-medium"
                  >
                    <span>
                      {language === "en" ? "Get Directions" : "الحصول على الاتجاهات"}
                    </span>
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {language === "en" ? "Opening Hours" : "ساعات العمل"}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-neutral-400">
                      <span>
                        {businessConfig.hours.days.en[0]} - {businessConfig.hours.days.en[5]}
                      </span>
                      <span>
                        {formatTime(businessConfig.hours.regular.morning.open)} - {formatTime(businessConfig.hours.regular.morning.close)}
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span></span>
                      <span>
                        {formatTime(businessConfig.hours.regular.evening.open)} - {formatTime(businessConfig.hours.regular.evening.close)}
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>{businessConfig.hours.days.en[6]}</span>
                      <span>
                        {formatTime(businessConfig.hours.friday.open)} - {formatTime(businessConfig.hours.friday.close)}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs mt-3">
                    {language === "en"
                      ? "* Hours from image - to be verified with business"
                      : "* الساعات من الصورة - للتأكيد مع العمل"}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${businessConfig.phone.primary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="font-semibold">
                {language === "en" ? "WhatsApp Us" : "واتساب"}
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {language === "en" ? "Send an Inquiry" : "أرسل استفساراً"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  {language === "en" ? "Your Name" : "اسمك"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-800 border ${
                    errors.name ? "border-red-500" : "border-neutral-700"
                  } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                  placeholder={language === "en" ? "Enter your name" : "أدخل اسمك"}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  {language === "en" ? "Phone Number" : "رقم الهاتف"}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-800 border ${
                    errors.phone ? "border-red-500" : "border-neutral-700"
                  } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                  placeholder={language === "en" ? "05XXXXXXXX" : "05XXXXXXXX"}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Vehicle */}
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-neutral-300 mb-2">
                  {language === "en" ? "Vehicle Make & Model" : "طراز وموديل المركبة"}
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-800 border ${
                    errors.vehicle ? "border-red-500" : "border-neutral-700"
                  } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                  placeholder={language === "en" ? "e.g., Toyota Camry 2023" : "مثال: تويوتا كامري 2023"}
                />
                {errors.vehicle && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                    {errors.vehicle}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-2">
                  {language === "en" ? "Service of Interest" : "الخدمة المطلوبة"}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-800 border ${
                    errors.service ? "border-red-500" : "border-neutral-700"
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                >
                  <option value="">
                    {language === "en" ? "Select a service" : "اختر خدمة"}
                  </option>
                  {businessConfig.services.map((service) => (
                    <option key={service.id} value={service.name[language]}>
                      {service.name[language]}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-neutral-300 mb-2">
                  {language === "en" ? "Preferred Date" : "التاريخ المفضل"}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={minDate}
                  className={`w-full px-4 py-3 bg-neutral-800 border ${
                    errors.date ? "border-red-500" : "border-neutral-700"
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  {language === "en" ? "Additional Message" : "رسالة إضافية"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                  placeholder={language === "en" ? "Any additional details..." : "أي تفاصيل إضافية..."}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-amber-600 hover:bg-amber-700 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>
                      {language === "en" ? "Sending..." : "جاري الإرسال..."}
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>
                      {language === "en" ? "Send via WhatsApp" : "إرسال عبر واتساب"}
                    </span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">
                    {language === "en"
                      ? "WhatsApp opened successfully. Please send your message to complete the inquiry."
                      : "تم فتح واتساب بنجاح. يرجى إرسال رسالتك لإكمال الاستفسار."}
                  </p>
                </div>
              )}

              {/* Note */}
              <p className="text-neutral-500 text-xs text-center">
                {language === "en"
                  ? "This form will open WhatsApp with your details pre-filled. Please send the message to complete your inquiry."
                  : "سيفتح هذا النموذج واتساب مع تفاصيلك مملوءة مسبقاً. يرجى إرسال الرسالة لإكمال استفسارك."}
              </p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
            <iframe
              src={businessConfig.location.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="AlFaisal Protection Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
