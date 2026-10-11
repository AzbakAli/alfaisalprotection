// Business Configuration for AlFaisal Protection
// This file contains all business details. Update this file to change business information across the site.

export const businessConfig = {
  // Business Names
  name: {
    en: "AlFaisal Protection",
    ar: "تلميع الفيصل",
    full: {
      en: "AlFaisal Protection for Car Services",
      ar: "تلميع الفيصل لخدمات السيارات",
    },
  },

  // Contact Information
  phone: {
    primary: "966553002606", // Verified WhatsApp number: +966 55 300 2606
    display: "+966 55 300 2606", // Display format
    secondary: ["0555315661", "0595777444"], // Additional numbers from listings
  },

  // Address
  // NOTE: Address is from third-party listings. Should be verified.
  address: {
    en: "Ard Al-Kawtiya, Prince Mohammed bin Abdulaziz Road, Bani Harithah, Madinah 42313",
    ar: "أرض الكوتية، طريق الأمير محمد بن عبدالعزيز، بني حارثة، المدينة المنورة 42313",
  },

  // Location
  location: {
    city: {
      en: "Madinah",
      ar: "المدينة المنورة",
    },
    country: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية",
    },
    // Google Maps embed URL
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.8540994780847!2d39.6302702!3d24.490511599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe6b5860c7c1%3A0x2bb9458c86e2ed9b!2z2KrZhNmF2YrYuSDYp9mE2YHZiti12YQg2YTZhNi52YbYp9mK2Kkg2KjYp9mE2YXYsdmD2KjYp9iqINin2YTYqti52K_ZitmEINi52YTZiSDYp9mE2KjYp9ix2K9BbEZhaXNhbCBQcm90ZWN0aW9uIGZvciBjYXIgc2VydmljZXMgJiBQRFI!5e0!3m2!1sen!2ssa!4v1791640808400!5m2!1sen!2ssa",
    // Directions URL
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=24.4905116,39.6302702",
  },

  // Social Media
  social: {
    linktree: "https://linktr.ee/alfaisalprotection",
    instagram: "https://www.instagram.com/alfaisalprotection",
    tiktok: "https://www.tiktok.com/@alfaisalprotection",
    snapchat: "https://www.snapchat.com/add/steamcar_w2019",
    facebook: "https://www.facebook.com/tlmy.alfysl/",
  },

  // Opening Hours
  // NOTE: Hours from image. Should be verified with business before publishing
  hours: {
    // Saturday to Thursday
    regular: {
      morning: { open: "08:30", close: "12:00" },
      evening: { open: "16:30", close: "23:00" },
    },
    // Friday
    friday: {
      open: "17:00",
      close: "22:30",
    },
    // Days of week mapping
    days: {
      en: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      ar: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    },
  },

  // Services
  // NOTE: These are proposed service categories based on the industry.
  // NOT verified that the business provides all these services.
  // Mark confirmed services as confirmed: true after verification.
  services: [
    {
      id: "ppf",
      name: {
        en: "Paint Protection Film (PPF)",
        ar: "فيلم حماية الطلاء",
      },
      description: {
        en: "Protect your vehicle's paint from scratches, chips, and environmental damage with premium PPF.",
        ar: "احمِ طلاء سيارتك من الخدوش والرقائق والأضرار البيئية باستخدام فيلم حماية الطلاء المميز.",
      },
      confirmed: false, // Set to true after verification
    },
    {
      id: "tinting",
      name: {
        en: "Window Tinting",
        ar: "تظليل النوافذ",
      },
      description: {
        en: "Enhance privacy and reduce heat with professional window tinting services.",
        ar: "عزز الخصوصية وقلل الحرارة مع خدمات تظليل النوافذ الاحترافية.",
      },
      confirmed: false,
    },
    {
      id: "ceramic",
      name: {
        en: "Ceramic Coating",
        ar: "طلاء السيراميك",
      },
      description: {
        en: "Add long-lasting protection and shine to your vehicle with ceramic coating.",
        ar: "أضف حماية طويلة الأمد ولمعانًا لمركبتك مع طلاء السيراميك.",
      },
      confirmed: false,
    },
    {
      id: "polishing",
      name: {
        en: "Paint Polishing & Correction",
        ar: "تلميع وتصحيح الطلاء",
      },
      description: {
        en: "Restore your vehicle's finish with professional paint correction and polishing.",
        ar: "استعد لمعة سيارتك مع تصحيح وتلميع الطلاء الاحترافي.",
      },
      confirmed: false,
    },
    {
      id: "interior",
      name: {
        en: "Interior Detailing",
        ar: "تنظيف وتلميع المقصورة",
      },
      description: {
        en: "Deep clean and protect your vehicle's interior for a fresh, like-new feel.",
        ar: "نظف بعمق واحمَ مقصورة سيارتك للحصول على مظهر جديد ومنعش.",
      },
      confirmed: false,
    },
  ],

  // SEO
  seo: {
    title: {
      en: "AlFaisal Protection | Premium Car Care Services in Madinah",
      ar: "تلميع الفيصل | خدمات العناية بالسيارات المميزة في المدينة المنورة",
    },
    description: {
      en: "Professional vehicle protection and detailing services in Madinah, Saudi Arabia. Explore PPF, window tinting, ceramic coating, and more at AlFaisal Protection.",
      ar: "خدمات حماية وتلميع السيارات الاحترافية في المدينة المنورة، المملكة العربية السعودية. اكتشف فيلم حماية الطلاء، تظليل النوافذ، طلاء السيراميك، والمزيد في تلميع الفيصل.",
    },
  },
};

// Helper function to format WhatsApp message
export const formatWhatsAppMessage = (
  data: {
    name: string;
    phone: string;
    vehicle: string;
    service: string;
    date: string;
    message: string;
  },
  lang: "en" | "ar"
): string => {
  const greeting = lang === "en" ? "Hello AlFaisal Protection," : "مرحباً تلميع الفيصل،";
  const nameLabel = lang === "en" ? "Name:" : "الاسم:";
  const phoneLabel = lang === "en" ? "Phone:" : "الهاتف:";
  const vehicleLabel = lang === "en" ? "Vehicle:" : "المركبة:";
  const serviceLabel = lang === "en" ? "Service:" : "الخدمة:";
  const dateLabel = lang === "en" ? "Preferred Date:" : "التاريخ المفضل:";
  const messageLabel = lang === "en" ? "Message:" : "الرسالة:";

  return encodeURIComponent(
    `${greeting}\n\n${nameLabel} ${data.name}\n${phoneLabel} ${data.phone}\n${vehicleLabel} ${data.vehicle}\n${serviceLabel} ${data.service}\n${dateLabel} ${data.date}\n${messageLabel} ${data.message}`
  );
};

// Helper function to get WhatsApp URL
export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${businessConfig.phone.primary}?text=${message}`;
};
