
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Join the 8%?</h3>
        <p className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Stop being part of the 92% who fail. Start being part of the 8% who transform their lives.
        </p>
        <Link to="/onboarding">
          <GradientButton size="lg" className="group min-w-80 h-20 text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30">
            Yes, I'm Ready to Change
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
          </GradientButton>
        </Link>
        
        <div className="mt-10 text-white/60 text-lg font-medium">
          ⚡ Takes 2 minutes to start • 21 days to transform
        </div>
      </div>
    </div>
  );
};

export default CTASection;
