
import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import ValuePropositionSection from '@/components/landing/ValuePropositionSection';
import StatsSection from '@/components/landing/StatsSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import CTASection from '@/components/landing/CTASection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Hero Section */}
      <HeroSection />

      {/* How GRYT Works Section */}
      <HowItWorksSection />

      {/* Enhanced Value Proposition */}
      <ValuePropositionSection />

      {/* Enhanced Stats Section */}
      <StatsSection />

      {/* Enhanced Testimonial */}
      <TestimonialSection />

      {/* Enhanced CTA Section */}
      <CTASection />
    </div>
  );
};

export default Landing;
