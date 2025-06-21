
import React from 'react';
import { Lightbulb, Brain, RotateCcw } from 'lucide-react';

const ValuePropositionSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Why This System Wins</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Every feature is scientifically designed to help you build unstoppable momentum
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Lightbulb className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Laser Focus</h3>
            <p className="text-white/70 text-lg leading-relaxed">Clarity over chaos. Focus on what matters most and watch everything else fall into place naturally.</p>
          </div>

          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Brain className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">AI Coaching</h3>
            <p className="text-white/70 text-lg leading-relaxed">Personalized support that adapts to your mood, challenges, and wins every single day.</p>
          </div>

          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <RotateCcw className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Daily System</h3>
            <p className="text-white/70 text-lg leading-relaxed">Small daily actions compound into massive identity shifts. Become who you want to be.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionSection;
