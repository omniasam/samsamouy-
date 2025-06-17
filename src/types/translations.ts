// src/types/translations.ts
export interface TranslationsStructure {
  nav: { label: string; href: string }[];
  hero: {
    headline: string;
    subHeadline: string;
    cta: string;
  };
  who: {
    sectionSubtitle: string;
    benefits: { title: string; description: string }[];
  };
  howItWorks: {
    label: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  realResults: {
   
    title: string;
  };
  testimonial: {
    title: string;
    list: { name: string; country: string; message: string }[];
  };
  coach: {
    badge: string;
    heading: string;
    description: string;
    experience: string;
    support: string;
  };
  faq: {
    title: string;
    list: { question: string; answer: string }[];
  };
  plansSection: {
    title: string;
    popularBadge: string;
    button: {
      startNow: string;
      chooseThisPlan: string;
      bookNow: string;
    };
    plans: {
      id: string;
      title: string;
      price: string;
      description: string;
      features: string[];
      included: boolean[];
      isPopular: boolean;
      tiers?: {
        label: string;
        price: string;
        button: string;
        upgrade?: string;
      }[];
    }[];
  };
  finalCTASection: {
    title: string;
    description: string;
    paymentMethodsLabel: string;
     paymentSteps?: string[];
  };
  common: {
    toggleLang: string;
    startNow: string;
  };
  footer: {
    contactUs: string;
  followUs: string;
  usefulLinks: string;
  terms: string;
  privacy: string;
  copyright: string;
  };
}
export interface Plan {
  title: string;
  price: number;
  description: string;
}


export interface TranslatedField {
  en: string;
  ar: string;
}

export interface LandingContent {
  _id: string;
  heroTitle: TranslatedField;
  heroSubtitle: TranslatedField;
  services: string[]; // Optional: can also be TranslatedField[]
  plans: {
    title: string;
    price: number;
    description: string;
  }[];
}