"use client"; // Ensure client-side rendering is enabled

import { useEffect, useState } from "react"; // Import necessary hooks
import { CoachSection } from "@/components/CoachSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LangLayout from "@/components/Lang/LangLayout";
import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import { RealResultsSection } from "@/components/RealResultsSection";
import TestimonialSlider from "@/components/Testimonials";
import WhoSection from "@/components/WhoSection";
import { LandingContent } from "@/types/translations";

export default function Home() {
  // Declare state to hold the landing content
  const [landingContent, setLandingContent] = useState<LandingContent | null>(null);

useEffect(() => {
  const fetchLandingContent = async () => {
    try {
      const res = await fetch(`/api/landing-content`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setLandingContent(data);
    } catch (error) {
      console.error('Error fetching landing content:', error);
      // Optionally, set error state here to display an error message to the user
    }
  };

  fetchLandingContent(); // Trigger the fetch when the component mounts
}, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      <LangLayout>
        <Navbar />
        <HeroSection landingContent={landingContent} />
        <WhoSection />
        <HowItWorksSection />
        <RealResultsSection />
        <TestimonialSlider />
        <CoachSection />
        <FAQSection />
        <PlansSection />
        <FinalCTASection />
        
        <Footer />
      </LangLayout>
    </>
  );
}
