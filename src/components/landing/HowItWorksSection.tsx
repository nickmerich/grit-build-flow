
import React from 'react';
import { Target, Brain, Trophy, Gift } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">How GRYT Works</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            A simple 4-step system designed to turn your biggest goals into inevitable wins
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">One Goal at a Time</h3>
            <p className="text-white/70 text-lg leading-relaxed">Users commit to one life-improving goal—like running 3x/week, quitting sugar, or launching a project. Clarity over chaos.</p>
          </div>

          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-cyan-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Brain className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Daily AI-Powered Coaching</h3>
            <p className="text-white/70 text-lg leading-relaxed">Our system delivers personalized, motivating nudges, structured routines, and emotional check-ins that adapt to user behavior.</p>
          </div>

          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Trophy className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Gamified Progress Tracking</h3>
            <p className="text-white/70 text-lg leading-relaxed">Each goal is broken into milestones. As users show up daily and make progress, they earn GRYT points and unlock badges tied to real-world progress.</p>
          </div>

          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl relative">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Gift className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Unlock Real Rewards</h3>
            <p className="text-white/70 text-lg leading-relaxed">When users hit key milestones, they unlock brand-sponsored rewards—from discounts and memberships to exclusive perks and experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
