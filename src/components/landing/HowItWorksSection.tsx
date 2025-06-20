
import React from 'react';
import { Target, Brain, Trophy, Gift } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-4">How GRYT Works</h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            A simple 4-step system designed to turn your biggest goals into inevitable wins
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="group text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs">1</div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">One Goal at a Time</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">Users commit to one life-improving goal—like running 3x/week, quitting sugar, or launching a project. Clarity over chaos.</p>
          </div>

          <div className="group text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-gradient-to-r from-blue-500 to-cyan-500 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Daily AI-Powered Coaching</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">Our system delivers personalized, motivating nudges, structured routines, and emotional check-ins that adapt to user behavior.</p>
          </div>

          <div className="group text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-gradient-to-r from-yellow-500 to-orange-500 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Trophy className="text-white" size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Gamified Progress Tracking</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">Each goal is broken into milestones. As users show up daily and make progress, they earn GRYT points and unlock badges tied to real-world progress.</p>
          </div>

          <div className="group text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-gradient-to-r from-emerald-500 to-teal-500 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs">4</div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Gift className="text-white" size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Unlock Real Rewards</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">When users hit key milestones, they unlock brand-sponsored rewards—from discounts and memberships to exclusive perks and experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
