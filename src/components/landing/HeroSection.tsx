import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { Target, Trophy, ArrowRight, Zap } from 'lucide-react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const animatedStats = [{
    value: "92%",
    label: "of people fail their goals",
    color: "text-red-400"
  }, {
    value: "5x",
    label: "more likely to succeed with 1 goal",
    color: "text-emerald-400"
  }, {
    value: "$67B+",
    label: "wellness/self-growth market",
    color: "text-blue-400"
  }];
  return <div className="relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className={`text-left max-w-3xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-white font-medium">Your Personal Growth Engine</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
                <span className="gradient-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Do The</span>
                <br />
                <span className="text-white/95">Hard Thing</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl">
              While 92% of people fail their goals, GRYT helps you become the elite 8% who transform their lives—by mastering <span className="text-orange-400 font-semibold">one goal at a time</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/onboarding">
                <GradientButton size="lg" className="group w-full sm:w-auto min-w-72 h-16 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25">
                  Start Your Transformation
                  
                </GradientButton>
              </Link>
            </div>

            {/* Animated Stat Counter */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className={`text-5xl font-black mb-3 transition-all duration-700 ${animatedStats[currentStat].color}`}>
                  {animatedStats[currentStat].value}
                </div>
                <div className="text-white/70 text-lg font-medium">
                  {animatedStats[currentStat].label}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main Circle with enhanced design */}
              <div className="w-96 h-96 bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-600 rounded-full flex items-center justify-center relative shadow-2xl shadow-orange-500/30 animate-pulse">
                <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <div className="text-center text-white">
                    <Target size={80} className="mx-auto mb-6 drop-shadow-lg" />
                    <div className="text-4xl font-black mb-2">1 GOAL</div>
                    <div className="text-lg opacity-90 font-medium tracking-wide">Focus • Commit • Transform</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                <Trophy className="text-white drop-shadow-sm" size={28} />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce delay-500 shadow-xl">
                <Zap className="text-white drop-shadow-sm" size={28} />
              </div>
              
              {/* Additional floating particles */}
              <div className="absolute top-20 -left-8 w-4 h-4 bg-yellow-400/60 rounded-full animate-ping" />
              <div className="absolute bottom-20 -right-8 w-6 h-6 bg-orange-400/60 rounded-full animate-ping delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;