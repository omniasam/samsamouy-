export type Language = "en" | "ar";

import { TranslationsStructure } from "@/types/translations";

export const translations: Record<Language, TranslationsStructure> = {

  en: {
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Plans", href: "#plans" },
      { label: "Transformations", href: "#transformations" },
      { label: "Programs", href: "#programs" },
      { label: "Services", href: "#services" },
      { label: "Video Consultation", href: "#video" },
      { label: "Contact", href: "#contact" },
    ],
     hero: {
      headline: "Tired of generic plans, crowded gyms, and no results?",
      subHeadline: "It's time for real change. Your custom nutrition & workout plan awaits.",
      cta: "Start Your Transformation",
    },
     who: {
  sectionSubtitle: "The 3 Reasons Why to Continue",
  benefits: [
    {
      title: "100% Personalized Plans for You",
      description:
        "Every diet and workout is customized based on your body, your goal, and any injuries or medical conditions — so it fits you perfectly and delivers real results.",
    },
    {
      title: "Flexibility That Fits Your Daily Life",
      description:
        "Plans tailored to your lifestyle — whether you're busy, working full-time, or always on the go. We also consider your food preferences and training location/days so you can stay committed comfortably and without boredom.",
    },
    {
      title: "Continuous Support and Personalized Follow-up",
      description:
        "Direct communication with coaches + a dedicated support team ready to help you at any time.",
    },
  ],
}
,
     howItWorks: {
  title: "3 Simple Steps to Reach Your Goal.",
  steps: [
    {
      title: "Send Us Your Details in the Form",
      description: "Fill out the form and we’ll collect all the info we need to get started.",
    },
    {
      title: "Receive a Plan Tailored to Your Body & Lifestyle",
      description: "You’ll get a professional plan crafted just for you within a few days.",
    },
    {
      title: "Start Your Journey with Full Support from Us",
      description: "Begin following the plan and we’ll be with you every step of the way.",
    },
  ],
},

    realResults: {
  title: "Real Success Stories from Our Clients in Egypt and the Arab World",
},
testimonial: {
  title: "What Our Clients Say",
  list: [
    {
      name: "Ahmed Salah",
      country: "Egypt",
      message: "The service is excellent and the coach is always with me every step of the way.",
    },
    {
      name: "Sarah Ali",
      country: "UAE",
      message: "The program helped me change my life. I feel a huge difference in my energy.",
    },
    {
      name: "Mohamed Farid",
      country: "KSA",
      message: "I recommend it to anyone who wants to lose weight and improve their health. Truly an outstanding experience.",
    },
  ],
},
coach: {
  badge: "Meet Your Coach",
  heading: "Captain Sam, Your Personal Trainer",
  description: "Certified by top global institutions, Sam understands the challenges you face and will be with you every step of the way.",
  experience: "15+ years of experience",
  support: "A full team to support you",
},
faq: {
  title: "Frequently Asked Questions",
  list: [
    {
      question: "What’s the difference between the plans?",
      answer: "Momentum Starter provides you with a professional plan and support to start right. Elite Transformation adds a personal trainer and video calls for full commitment. VIP Concierge gives you direct access to Coach SamSamouy for the highest level of supervision and attention.",
    },
    {
      question: "How can I pay from Egypt?",
      answer: "Payment is available via Vodafone Cash, InstaPay, Fawry, or Credit/Debit Cards.",
    },
    {
      question: "Is the price monthly or one-time?",
      answer: "It depends on the plan – some are monthly, others are one-time or for a fixed period.",
    },
    {
      question: "How can I pay from KSA/UAE?",
      answer: "We accept all major credit cards (Visa, Mastercard) for international payments.",
    },
  ],
},
plansSection: {
  title: "Choose the Plan That Gets You to Your Goal",
  popularBadge: "Most Popular",
  button: {
    startNow: "Start Now",
    chooseThisPlan: "Choose This Plan",
    bookNow: "Book Now",
  },
  plans: [
    {
      id: "starter",
      title: "Momentum Starter",
      price: "EGP 999 / Monthly",
      description: "Perfect for those who want to start independently with a pro plan.",
      features: [
        "Fully customized workout & nutrition program",
        "Professional PDF plan with video links",
        "WhatsApp support from the coaching team",
        "Monthly group Q&A live session",
        "Dedicated personal coach",
        "One-on-one video follow-ups",
        "Direct access to Coach SamSamouy",
      ],
      included: [true, true, true, true, false, false, false],
       isPopular: false,
    },
    {
      id: "elite",
      title: "Elite Transformation",
      price: "EGP 2,500 / Monthly",
      description: "For those who want full commitment and personalized tracking.",
      features: [
        "All Momentum Starter features",
        "Dedicated personal coach to follow you step by step",
        "Two 15-min video calls weekly with your coach",
        "Direct access to Coach SamSamouy",
      ],
      included: [true, true, true, false],
             isPopular: true,

    },
    {
      id: "vip",
      title: "Samouy VIP Concierge",
      price: "",
      description: "Top-level exclusive access & support directly from Coach SamSamouy.",
      features: [
        "All Elite Transformation features",
        "Direct WhatsApp access to Coach SamSamouy",
        "Plan adjustments by Coach SamSamouy himself when needed",
        "Exclusive video library",
      ],
      included: [true, true, true, true],
             isPopular: false,

      tiers: [
        {
          label: "Priority Access",
          price: "EGP 10,000 / Monthly",
          button: "Book Now",
        },
        {
          label: "Ultimate Access & Coaching",
          price: "EGP 15,000 / Monthly",
          upgrade: "+ Two 15-min video calls monthly with Coach SamSamouy",
          button: "Book Now",
        },
      ],
    },
  ],
},
  finalCTASection: {
  title: "All plans include: Quality assurance & support from SamSamouy team",
  description: "Once you choose your plan, you'll be taken to a secure payment page and asked to fill out the onboarding form.",
  paymentMethodsLabel: "Accepted Payment Methods",
   
   
},




    common: {
      toggleLang: "العربية",
      startNow: "Start your journey now",
    },
    footer: {
      contactUs: "Contact Us",
      followUs: "Follow Us",
      usefulLinks: "Useful Links",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      copyright: "All rights reserved"
    }

  },

  ar: {
    nav: [
      { label: "الرئيسية", href: "#home" },
      { label: "عن سام ساموي", href: "#about" },
      { label: "الباقات", href: "#plans" },
      { label: "النتائج", href: "#transformations" },
      { label: "البرامج", href: "#programs" },
      { label: "الخدمات", href: "#services" },
      { label: "استشارة فيديو", href: "#video" },
      { label: "تواصل معنا", href: "#contact" },
    ],
     hero: {
      headline: "زهقت من الأنظمة الجاهزة، الجداول الزحمة، والنتائج اللي مش بتيجي؟",
      subHeadline: "ده وقت التغيير الحقيقي. خطة تغذية وتمرين معمولة مخصوص عشان تنجح.",
      cta: "ابدأ تغييرك دلوقتي",
    },
      who: {
      sectionSubtitle:"الفرق اللي يخليك تكمل ",
      benefits: [
        {
          title: " خطط مخصصة 100% ليك",
          description:
          "كل دايت وتمرين بيتفصل حسب جسمك, هدفك, ولو كنت بتعاني من أي اصابة - حالة طبية علشان يكون مناسب ليك لتحقيق افضل النتايج"
        },
        {
          title: "مرونة تناسب حياتك اليومية",
          description: 
      " أنظمة بتتظبط على طبيعة يومك سواء كنت مشغول، بتشتغل طول الوقت أو حياتك سريعة.وكمان  بنراعى تفضيلاتك في الأكل و مكان و عدد ايام التمرين علشان تلتزم براحتك ومن غير ملل."
        },
        {
          title:  "دعم مستمر ومتابعة شخصية",
          description: "تواصل مباشر مع المدربيين + فريق المتخصصيصن جاهزين يساعدوك في أي وقت."
        },
      ],
    },
 howItWorks: {
  title: "٣ خطوات بسيطة للوصول لهدفك.",
  steps: [
    {
      title: "ابعتلنا تفاصيلك في الفورم",
      description: "املأ الفورم، وهنجمع كل التفاصيل عنك عشان نبدأ",
    },
    {
      title: "استلم خطة مناسبة لجسمك وأسلوب حياتك",
      description: "هتبعتلك خطة احترافية معمولة مخصوص ليك في خلال أيام",
    },
    {
      title: "ابدأ رحلتك بمتابعة كاملة مننا",
      description: "ابدأ تنفذ الخطة وهنكون معاك خطوة بخطوة طول الرحلة",
    },
  ],
}
,
realResults: {
  title: "قصص نجاح حقيقية من عملائنا في مصر والوطن العربي",
},
testimonial: {
  title: "آراء عملائنا",
  list: [
    {
      name: "Ahmed Salah",
      country: "مصر",
      message: "الخدمة ممتازة جدًا والمدرب دايمًا بيكون معايا خطوة بخطوة",
    },
    {
      name: "Sarah Ali",
      country: "الإمارات",
      message: "البرنامج ساعدني أغير حياتي. حسيت بفرق كبير في طاقتي",
    },
    {
      name: "Mohamed Farid",
      country: "السعودية",
      message: "أنصح بيه أي حد عايز ينزل وزنه ويحسن صحته. فعلاً تجربة مميزة",
    },
  ],
},
coach: {
  badge: "قابل مدربك",
  heading: "كابتن سام، مدربك الشخصي",
  description: "معتمد من أفضل الجهات العالمية، وفاهم فعلاً التحديات اللي بتواجهها هنا. سام هيكون معاك خطوة بخطوة.",
  experience: "15+ سنة خبرة",
  support: "فريق كامل لدعمك",
},
faq: {
  title: "الأسئلة الشائعة",
  list: [
    {
      question: "إيه الفرق الأساسي بين الباقات؟",
      answer: "Momentum Starter بتديلك الخطة الاحترافية والدعم عشان تبدأ صح. Elite Transformation بتضيف مدرب خاص ومكالمات فيديو للمتابعة والالتزام الكامل. VIP Concierge بتضمنلك وصول مباشر لكوتش ساموي نفسه لأعلى مستوى من الإشراف والاهتمام الشخصي.",
    },
    {
      question: "إزاي ممكن أدفع من مصر؟",
      answer: "متاح الدفع عن طريق فودافون كاش، InstaPay، فوري، أو كروت الدفع البنكية (Credit/Debit Card).",
    },
    {
      question: "السعر ده اشتراك شهري ولا مرة واحدة؟",
      answer: "السعر بيكون على حسب الباقة – في باقات شهرية، وفي باقات بتكون لفترة محددة أو لمرة واحدة.",
    },
    {
      question: "إزاي ممكن أدفع من الخليج؟",
      answer: "بنقبل كل كروت الائتمان العالمية (Visa, Mastercard).",
    },
  ],
},
plansSection: {
  title: "اختر الباقة اللي هتوصلك لهدفك",
  popularBadge: "الأكثر اختياراً",
  button: {
    startNow: "ابدأ الآن",
    chooseThisPlan: "اختار الباقة دي",
    bookNow: "احجز الآن",
  },
  plans: [
    {
      id: "starter",
      title: "بداية الانطلاق",
      price: "999 جنيه / شهرياً",
      description: "مثالية للي بيحب يبدأ بنفسه ومحتاج خطة احترافية يتبعها باستقلالية",
      features: [
        "برنامج تمرين وتغذية مخصص بالكامل",
        "خطة PDF احترافية مع لينكات فيديو للتمارين",
        "دعم على الواتساب من فريق المدربين",
        "لايف شهري جماعي للأسئلة والأجوبة",
        "مدرب خاص ليك",
        "مكالمات فيديو فردية للمتابعة",
        "وصول مباشر لكوتش ساموي",
      ],
      included: [true, true, true, true, false, false, false],
          isPopular: false,

    },
    {
      id: "elite",
      title: "التحول المتكامل",
      price: "2,500 جنيه / شهرياً",
      description: "للجادين اللي عايزين التزام كامل ومتابعة شخصية ومكثفة عشان يضمنوا تحقيق أفضل النتائج",
      features: [
        "كل مميزات باقة Momentum Starter",
        "مدرب خاص ليك لمتابعتك خطوة بخطوة",
        "(2) مكالمة فيديو 15 دقيقة أسبوعياً مع مدربك الخاص",
        "وصول مباشر لكوتش ساموي",
      ],
      included: [true, true, true, false],
          isPopular: true,

    },
    {
      id: "vip",
      title: "تجربة VIP مع كوتش ساموي",
      price: "",
      description: "أعلى مستوى من الخدمة الحصرية والوصول المباشر لكوتش ساموي للي عايزين أفضل تجربة ممكنة",
      features: [
        "كل مميزات باقة Elite Transformation",
        "وصول مباشر على الواتساب لكوتش ساموي",
        "تعديلات على الخطة عند الحاجة من كوتش ساموي شخصياً",
        "مكتبة فيديوهات حصرية",
      ],
      included: [true, true, true, true],
                isPopular: false,

      tiers: [
        {
          label: "Priority Access",
          price: "10,000 جنيه / شهرياً",
          button: "احجز الآن",
        },
        {
          label: "Ultimate Access & Coaching",
          price: "15,000 جنيه / شهرياً",
          upgrade: "+ مكالمتين فيديو (15 دقيقة) شهرياً مع كوتش ساموي شخصياً",
          button: "احجز الآن",
        },
      ],
    },
  ],
},
  finalCTASection: {
  title: "كل الباقات تشمل: ضمان الجودة والدعم من فريق ساموي",
  description: "بمجرد اختيارك للباقة، سيتم توجيهك إلى صفحة دفع آمنة وطلب تعبئة استبيان البداية.",
  paymentMethodsLabel: "طرق الدفع المتاحة",
 

},


    common: {
      toggleLang: "English",
      startNow: "ابدأ تسجيل دخولك",
    },
      footer: {
      contactUs: "تواصل معنا",
      followUs: "تابعنا",
      usefulLinks: "روابط مهمة",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      copyright: "جميع الحقوق محفوظة"
    }


}
};