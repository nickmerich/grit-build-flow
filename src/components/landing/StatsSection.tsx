
import React from 'react';

const StatsSection = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">The Science Behind GRYT</h3>
        <p className="text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
          Built on research from behavioral psychology, neuroscience, and proven habit formation techniques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-md rounded-3xl p-10 border border-red-500/20 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/20">
          <div className="text-6xl font-black text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300">92%</div>
          <div className="text-white font-bold text-xl mb-4">Goal Failure Rate</div>
          <div className="text-white/60 leading-relaxed">Most people try to change everything at once and inevitably fail</div>
        </div>

        <div className="group bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 backdrop-blur-md rounded-3xl p-10 border border-emerald-500/20 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/20">
          <div className="text-6xl font-black text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">5x</div>
          <div className="text-white font-bold text-xl mb-4">Success Multiplier</div>
          <div className="text-white/60 leading-relaxed">Single-goal focus increases success rates dramatically</div>
        </div>

        <div className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-md rounded-3xl p-10 border border-blue-500/20 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20">
          <div className="text-6xl font-black text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">21</div>
          <div className="text-white font-bold text-xl mb-4">Days to Habit</div>
          <div className="text-white/60 leading-relaxed">Neuroplasticity research shows consistent change patterns</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
