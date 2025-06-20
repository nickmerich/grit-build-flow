
import React from 'react';
import { Target, Brain, Trophy, Gift } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">How GRYT Works</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            A simple 4-step system designed to turn your biggest goals into inevitable wins
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="group text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative min-h-[320px] md:min-h-[380px]">
            <div className="absolute -top-3 md:-top-4 left-6 md:left-8 bg-gradient-to-r from-purple-500 to-pink-500 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">1</div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">One Goal at a Time</h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">Users commit to one life-improving goal—like running 3x/week, quitting sugar, or launching a project. Clarity over chaos.</p>
          </div>

          <div className="group text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative min-h-[320px] md:min-h-[380px]">
            <div className="absolute -top-3 md:-top-4 left-6 md:left-8 bg-gradient-to-r from-blue-500 to-cyan-500 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">2</div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Brain className="text-white" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Daily AI-Powered Coaching</h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">Our system delivers personalized, motivating nudges, structured routines, and emotional check-ins that adapt to user behavior.</p>
          </div>

          <div className="group text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative min-h-[320px] md:min-h-[380px]">
            <div className="absolute -top-3 md:-top-4 left-6 md:left-8 bg-gradient-to-r from-yellow-500 to-orange-500 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">3</div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Trophy className="text-white" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Gamified Progress Tracking</h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">Each goal is broken into milestones. As users show up daily and make progress, they earn GRYT points and unlock badges tied to real-world progress.</p>
          </div>

          <div className="group text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative min-h-[320px] md:min-h-[380px]">
            <div className="absolute -top-3 md:-top-4 left-6 md:left-8 bg-gradient-to-r from-emerald-500 to-teal-500 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">4</div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Gift className="text-white" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Unlock Real Rewards</h3>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">When users hit key milestones, they unlock brand-sponsored rewards—from discounts and memberships to exclusive perks and experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
