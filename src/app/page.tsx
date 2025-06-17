// src/app/page.tsx
"use client";

import { CoachSection } from "@/components/CoachSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTA";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LangLayout from "@/components/Lang/LangLayout";
import Navbar from "@/components/Navbar";
// import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import { RealResultsSection } from "@/components/RealResultsSection";
import TestimonialSlider from "@/components/Testimonials";
import WhoSection from "@/components/WhoSection";


export default function Home() {
  return (
    <>
  <LangLayout>
<Navbar/>
      <HeroSection />
           <WhoSection  />
                 <HowItWorksSection />
           <RealResultsSection />
           <TestimonialSlider />
     
           <CoachSection />
           <FAQSection  />
           <PlansSection  />
           <FinalCTASection />
         <Footer/>
  </LangLayout>
  
    
   
    
    </>
  );
}
