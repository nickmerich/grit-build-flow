
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current mx-1" size={20} />)}
          </div>
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-6 md:mb-8 italic leading-relaxed">
            "I tried everything - apps, coaches, courses. Nothing stuck until GRYT. 
            Having just ONE goal and real AI support changed everything. 127 days clean and counting."
          </blockquote>
          <div className="text-white/90 text-base md:text-lg font-medium">
            — Marcus T., Software Engineer
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
