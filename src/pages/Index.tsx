import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreFeatures from "@/components/CoreFeatures";
import OurServices from "@/components/OurServices";
import WorkingProcess from "@/components/WorkingProcess";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import CaseStudies from "@/components/CaseStudies";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import GetInTouch from "@/components/GetInTouch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoreFeatures />
      <OurServices />
      <WorkingProcess />
      <WhatWeDo />
      <WhyChooseUs />
      <Technologies />
      <CaseStudies />
      <BlogSection />
      <Testimonials />
      <FAQSection />
      <GetInTouch />
    </div>
  );
};

export default Index;
