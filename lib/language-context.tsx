"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    getInTouch: "Get in Touch",

    // Hero
    heroTitle: "Leading Provider of Industrial Automation Solutions",
    heroSubtitle:
      "Certified experts in Variable Frequency Drives (VFDs), Low Voltage Systems & Industrial Automation. Trusted by industries across Oman.",
    viewServices: "Explore Our Solutions",
    contactUs: "Request a Consultation",

    // About
    aboutTitle: "About Us",
    aboutSubtitle: "Three Decades of Engineering Excellence",
    aboutText1:
      "Future Front Excellence LLC is a specialized industrial automation company with over 30 years of collective experience in Low Voltage (LV), Variable Frequency Drives (VFDs), and Automation systems.",
    aboutText2:
      "We have successfully delivered solutions across a wide range of industries, including Oil & Gas, Cement and Mining, Water & Wastewater (Pumping & Desalination), HVAC and Building Infrastructure, Manufacturing, and Industrial Automation. Our team understands the real challenges industries face with drive systems. Whether it is installation and commissioning, fault diagnosis and repair, upgrades, or long-term maintenance, we deliver reliable and cost-effective solutions with a strong focus on quality and performance.",
    missionTitle: "Our Mission",
    missionDesc: "To provide reliable, high-quality, and cost-effective VFD and automation services that help our clients operate efficiently and with confidence. We aim to build long-term partnerships by offering fast support, flexible solutions, and strong technical expertise focused on customer-specific needs.",
    visionTitle: "Our Vision",
    visionDesc: "To become one of the leading VFD and automation service providers in the region, recognized for excellence, multi-brand expertise, and customer satisfaction. Future Front Excellence LLC strives to be the trusted partner helping industries move forward through smarter and more sustainable automation solutions.",
    ourCapabilities: "Industries We Serve with Excellence",
    capability1: "Oil & Gas: Upstream, midstream, and downstream operations",
    capability2: "Cement & Mining: Heavy-duty industrial applications",
    capability3: "Water & Wastewater: Pumping stations and desalination plants",
    capability4: "HVAC & Buildings: Climate control and infrastructure systems",
    capability5: "Manufacturing: Process automation and production lines",
    capability6: "Complete lifecycle support: Installation to long-term maintenance",
    yearsExperience: "Years of Experience",
    projectsCompleted: "Projects Completed",
    brandPartners: "Brand Partners",
    technicalSupport: "Technical Support",

    // Services
    servicesTitle: "Our Core Specializations",
    servicesSubtitle: "Comprehensive Solutions for Your Industrial Drive and Automation Needs",

    service1Title: "Variable Frequency Drives (VFD)",
    service1Desc:
      "Complete VFD lifecycle services including installation, programming, commissioning, repair, and preventive maintenance. Factory-trained technicians certified on all major brands ensure optimal motor control, energy savings, and maximum uptime.",

    service2Title: "Servo Drive Systems",
    service2Desc:
      "Precision servo drive solutions for high-performance motion control applications. Expert diagnosis, repair, and optimization services ensuring accuracy and reliability in demanding industrial environments.",

    service3Title: "Soft-Starter Solutions",
    service3Desc:
      "Professional soft-starter installation, configuration, and maintenance services. Reduce mechanical stress, extend motor life, and ensure smooth acceleration across your operations.",

    service4Title: "Industrial Power Supplies",
    service4Desc:
      "Comprehensive service for industrial power supply modules and DC drives. Expert troubleshooting and repair ensuring consistent, reliable power delivery to your critical automation systems.",

    service5Title: "PLC & HMI Systems",
    service5Desc:
      "Full-spectrum programmable logic controller (PLC) and human-machine interface (HMI) services. From programming and integration to troubleshooting and upgrades—we keep your control systems running flawlessly.",

    service6Title: "UPS & Battery Systems",
    service6Desc:
      "Professional uninterruptible power supply (UPS) installation, battery management, and emergency backup system maintenance. Protect your critical operations with reliable power continuity solutions.",

    service7Title: "Medical Equipment Electronics",
    service7Desc:
      "Specialized electronic repair and calibration services for medical and healthcare equipment. Precision diagnostics and control system servicing ensuring patient safety and equipment reliability.",

    service8Title: "Industrial PCB Repair",
    service8Desc:
      "Expert printed circuit board (PCB) diagnosis, component-level repair, and testing for industrial control systems. Extend equipment life and reduce replacement costs with our professional PCB services.",

    // Brands
    brandsTitle: "Authorized Service Partners",
    brandsSubtitle: "Factory-certified to service the world's leading industrial automation brands",

    // Contact
    contactTitle: "Let's Power Your Success Together",
    contactSubtitle: "Get in touch with our expert team for tailored industrial automation solutions",
    readyToStart: "Ready to Get Started?",
    contactPrompt: "Let's discuss how we can optimize your industrial operations",
    contactInfo: "Contact Information",
    contactInfoDesc: "Reach out to us through any of these channels",
    whyChooseUs: "Why Choose Future Front Excellence?",
    reason1: "30+ years of proven expertise in industrial automation",
    reason2: "Factory-certified technicians for all major brands",
    reason3: "24/7 emergency support and rapid response times",
    reason4: "Comprehensive solutions from installation to maintenance",
    sendMessage: "Send Us a Message",
    sendMessageDesc: "Fill out the form below and we'll get back to you shortly",
    name: "Name",
    company: "Company",
    message: "Message",
    sendBtn: "Send Message",

    // Footer
    footerTagline: "Your trusted partner in industrial automation excellence across Oman.",
    quickLinks: "Quick Links",
    email: "Email",
    phone: "Phone",
    location: "Location",
    allRightsReserved: "All rights reserved.",
  },
  ar: {
    // Header - Arabic
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    contact: "اتصل بنا",
    getInTouch: "تواصل معنا",

    // Hero - Arabic
    heroTitle: "الشركة الرائدة في حلول الأتمتة الصناعية",
    heroSubtitle:
      "خبراء معتمدون في محركات التردد المتغير وأنظمة الجهد المنخفض والأتمتة الصناعية. موثوق بنا من قبل الصناعات في جميع أنحاء عمان لأكثر من 30 عامًا.",
    viewServices: "استكشف حلولنا",
    contactUs: "اطلب استشارة",

    // About - Arabic
    aboutTitle: "من نحن",
    aboutSubtitle: "ثلاثة عقود من التميز الهندسي",
    aboutText1:
      "Future Front Excellence LLC هي شركة متخصصة في الأتمتة الصناعية تتمتع بخبرة جماعية تزيد عن 30 عامًا في مجال الجهد المنخفض (LV) ومحركات التردد المتغير (VFD) وأنظمة الأتمتة.",
    aboutText2:
      "لقد نجحنا في تقديم حلول لمجموعة واسعة من الصناعات، بما في ذلك النفط والغاز، والأسمنت والتعدين، والمياه والصرف الصحي (الضخ وتحلية المياه)، والتدفئة والتهوية وتكييف الهواء والبنية التحتية للمباني، والتصنيع، والأتمتة الصناعية. يدرك فريقنا التحديات الحقيقية التي تواجهها الصناعات في أنظمة المحركات. سواء كان ذلك في التركيب والتشغيل، أو تشخيص الأعطال وإصلاحها، أو التحديثات، أو الصيانة طويلة الأجل، فإننا نقدم حلولاً موثوقة وفعالة من حيث التكلفة مع التركيز بشكل كبير على الجودة والأداء.",
    missionTitle: "مهمتنا",
    missionDesc: "تقديم خدمات VFD والأتمتة عالية الجودة والموثوقة وذات تكلفة فعالة لمساعدة عملائنا على التشغيل بكفاءة وثقة. نهدف إلى بناء شراكات طويلة الأمد من خلال تقديم دعم سريع وحلول مرنة وخبرة فنية قوية تركز على احتياجات العميل.",
    visionTitle: "رؤيتنا",
    visionDesc: "أن نصبح أحد مزودي خدمات VFD والأتمتة الرائدين في المنطقة، والمعروفين بالتميز والخبرة عبر علامات تجارية متعددة ورضا العملاء. تسعى Future Front Excellence LLC إلى أن تكون الشريك الموثوق الذي يساعد الصناعات على التقدم من خلال حلول أتمتة أكثر ذكاءً واستدامة.",
    ourCapabilities: "الصناعات التي نخدمها بتميز",
    capability1: "النفط والغاز: عمليات المنبع والمصب والوسط",
    capability2: "الأسمنت والتعدين: التطبيقات الصناعية الثقيلة",
    capability3: "المياه ومياه الصرف: محطات الضخ ومحطات التحلية",
    capability4: "أنظمة التدفئة والتهوية والمباني: أنظمة التحكم في المناخ والبنية التحتية",
    capability5: "التصنيع: أتمتة العمليات وخطوط الإنتاج",
    capability6: "دعم كامل لدورة الحياة: من التركيب إلى الصيانة طويلة الأجل",
    yearsExperience: "سنة من الخبرة",
    projectsCompleted: "مشروع منجز",
    brandPartners: "شريك معتمد",
    technicalSupport: "دعم فني",

    // Services - Arabic
    servicesTitle: "تخصصاتنا الأساسية",
    servicesSubtitle: "حلول شاملة لاحتياجات المحركات والأتمتة الصناعية",

    service1Title: "محركات التردد المتغير (VFD)",
    service1Desc:
      "خدمات شاملة لدورة حياة VFD بما في ذلك التركيب والبرمجة والتشغيل والإصلاح والصيانة الوقائية. فنيون مدربون من المصنع ومعتمدون على جميع العلامات التجارية الرئيسية لضمان التحكم الأمثل في المحرك وتوفير الطاقة ووقت التشغيل الأقصى.",

    service2Title: "أنظمة محركات سيرفو",
    service2Desc:
      "حلول محركات سيرفو الدقيقة لتطبيقات التحكم في الحركة عالية الأداء. خدمات التشخيص والإصلاح والتحسين المتخصصة التي تضمن الدقة والموثوقية في البيئات الصناعية الصعبة.",

    service3Title: "حلول البادئات الناعمة",
    service3Desc:
      "خدمات تركيب وتكوين وصيانة البادئات الناعمة الاحترافية. تقليل الضغط الميكانيكي وإطالة عمر المحرك وضمان التسارع السلس عبر عملياتك.",

    service4Title: "مزودات الطاقة الصناعية",
    service4Desc:
      "خدمة شاملة لوحدات مزود الطاقة الصناعية ومحركات التيار المستمر. استكشاف الأخطاء والإصلاح المتخصص لضمان توصيل طاقة موثوق ومتسق لأنظمة الأتمتة الحيوية الخاصة بك.",

    service5Title: "أنظمة PLC و HMI",
    service5Desc:
      "خدمات شاملة لوحدات التحكم المنطقية القابلة للبرمجة (PLC) وواجهات الإنسان والآلة (HMI). من البرمجة والتكامل إلى استكشاف الأخطاء والترقيات—نحافظ على تشغيل أنظمة التحكم الخاصة بك بشكل مثالي.",

    service6Title: "أنظمة UPS والبطاريات",
    service6Desc:
      "تركيب احترافي لأنظمة الإمداد بالطاقة غير المنقطعة (UPS) وإدارة البطاريات وصيانة أنظمة النسخ الاحتياطي للطوارئ. احمِ عملياتك الحيوية بحلول استمرارية الطاقة الموثوقة.",

    service7Title: "إلكترونيات المعدات الطبية",
    service7Desc:
      "خدمات إصلاح ومعايرة إلكترونية متخصصة للمعدات الطبية والرعاية الصحية. تشخيص دقيق وصيانة أنظمة التحكم لضمان سلامة المرضى وموثوقية المعدات.",

    service8Title: "إصلاح PCB الصناعية",
    service8Desc:
      "تشخيص احترافي للوحات الدوائر المطبوعة (PCB) وإصلاح على مستوى المكونات واختبار لأنظمة التحكم الصناعية. إطالة عمر المعدات وتقليل تكاليف الاستبدال مع خدمات PCB الاحترافية لدينا.",

    // Brands - Arabic
    brandsTitle: "شركاء الخدمة المعتمدون",
    brandsSubtitle: "معتمدون من المصنع لخدمة العلامات التجارية الرائدة عالميًا للأتمتة الصناعية",

    // Contact - Arabic
    contactTitle: "لنبني نجاحك معًا",
    contactSubtitle: "تواصل مع فريق الخبراء لدينا للحصول على حلول أتمتة صناعية مخصصة",
    readyToStart: "هل أنت مستعد للبدء؟",
    contactPrompt: "دعنا نناقش كيف يمكننا تحسين عملياتك الصناعية",
    contactInfo: "معلومات الاتصال",
    contactInfoDesc: "تواصل معنا من خلال أي من هذه القنوات",
    whyChooseUs: "لماذا تختار فيوتشر فرونت إكسلنس؟",
    reason1: "أكثر من 30 عامًا من الخبرة المثبتة في الأتمتة الصناعية",
    reason2: "فنيون معتمدون من المصنع لجميع العلامات التجارية الرئيسية",
    reason3: "دعم طوارئ على مدار الساعة وأوقات استجابة سريعة",
    reason4: "حلول شاملة من التركيب إلى الصيانة",
    sendMessage: "أرسل لنا رسالة",
    sendMessageDesc: "املأ النموذج أدناه وسنعاود الاتصال بك قريبًا",
    name: "الاسم",
    company: "الشركة",
    message: "الرسالة",
    sendBtn: "إرسال الرسالة",

    // Footer - Arabic
    footerTagline: "شريكك الموثوق في التميز في الأتمتة الصناعية في جميع أنحاء عمان.",
    quickLinks: "روابط سريعة",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    allRightsReserved: "جميع الحقوق محفوظة.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguage(savedLang)
      document.documentElement.lang = savedLang
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr"
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
