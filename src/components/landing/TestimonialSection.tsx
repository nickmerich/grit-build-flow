
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current mx-1" size={28} />)}
          </div>
          <blockquote className="text-3xl md:text-4xl text-white font-light mb-10 italic leading-relaxed">
            "I tried everything - apps, coaches, courses. Nothing stuck until GRYT. 
            Having just ONE goal and real AI support changed everything. 127 days clean and counting."
          </blockquote>
          <div className="text-white/70 text-lg font-medium">
            — Marcus T., Software Engineer
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
