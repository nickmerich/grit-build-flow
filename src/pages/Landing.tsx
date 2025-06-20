import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { Target, Brain, Trophy, Users, CheckCircle, Star, Lightbulb, RotateCcw, Zap } from 'lucide-react';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const animatedStats = [
    { value: "92%", label: "of people fail their goals", color: "text-red-400" },
    { value: "5x", label: "more likely to succeed with 1 goal", color: "text-green-400" },
    { value: "$67B+", label: "wellness/self-growth market", color: "text-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className={`text-left max-w-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Change Your Life by Doing{' '}
              <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                One Hard Thing
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              92% of people fail their goals. GRYT helps you become the 8% who don't—by doing one thing, the right way.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/onboarding">
                <GradientButton 
                  size="lg" 
                  className="w-full sm:w-auto min-w-64 transform hover:scale-105 transition-all duration-200 shadow-2xl"
                >
                  Begin Your One Goal Journey
                </GradientButton>
              </Link>
            </div>

            {/* Animated Stat Counter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-all duration-500 ${animatedStats[currentStat].color}`}>
                  {animatedStats[currentStat].value}
                </div>
                <div className="text-purple-200 text-sm">
                  {animatedStats[currentStat].label}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full flex items-center justify-center relative animate-pulse">
                <div className="w-60 h-60 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white">
                    <Target size={64} className="mx-auto mb-4" />
                    <div className="text-2xl font-bold">1 GOAL</div>
                    <div className="text-sm opacity-80">Focus • Commit • Transform</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Trophy className="text-purple-900" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-bounce delay-500">
                <Zap className="text-purple-900" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Value Proposition */}
      <div className="bg-white/10 backdrop-blur-sm border-y border-white/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1 Goal at a Time</h3>
              <p className="text-purple-200 text-lg">Clarity over chaos. Focus on what matters most and watch everything else fall into place.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Coaching</h3>
              <p className="text-purple-200 text-lg">Personalized support that adapts to your mood, challenges, and wins every single day.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <RotateCcw className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Daily System</h3>
              <p className="text-purple-200 text-lg">Small daily actions compound into massive identity shifts. Become who you want to be.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">The Science Behind GRYT</h3>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Built on research from behavioral psychology, neuroscience, and proven habit formation techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="text-5xl font-bold text-red-400 mb-4">92%</div>
            <div className="text-white font-semibold mb-2">Goal Failure Rate</div>
            <div className="text-purple-200 text-sm">Most people try to change everything at once and fail</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="text-5xl font-bold text-green-400 mb-4">5x</div>
            <div className="text-white font-semibold mb-2">Success Multiplier</div>
            <div className="text-purple-200 text-sm">Single-goal focus increases success rates dramatically</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="text-5xl font-bold text-blue-400 mb-4">21</div>
            <div className="text-white font-semibold mb-2">Days to Habit</div>
            <div className="text-purple-200 text-sm">Neuroplasticity research shows consistent change patterns</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Why This System Wins</h3>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Every feature is designed to help you build unstoppable momentum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">Laser Focus</h4>
            <p className="text-purple-200 text-sm">One goal eliminates decision fatigue and maximizes willpower</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">Smart Coaching</h4>
            <p className="text-purple-200 text-sm">AI that learns your patterns and optimizes your approach</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">Gamified Growth</h4>
            <p className="text-purple-200 text-sm">Turn discipline into a game you actually want to play</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">Community Power</h4>
            <p className="text-purple-200 text-sm">Surround yourself with others who refuse to quit</p>
          </div>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <blockquote className="text-2xl text-white font-medium mb-6 italic">
              "I tried everything - apps, coaches, courses. Nothing stuck until GRYT. 
              Having just ONE goal and real AI support changed everything. 127 days clean and counting."
            </blockquote>
            <div className="text-purple-200">
              — Marcus T., Software Engineer
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h3 className="text-4xl font-bold text-white mb-6">Ready to Join the 8%?</h3>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Stop being part of the 92% who fail. Start being part of the 8% who transform their lives.
        </p>
        <Link to="/onboarding">
          <GradientButton 
            size="lg" 
            className="min-w-64 transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            Yes, I'm Ready to Change
          </GradientButton>
        </Link>
        
        <div className="mt-8 text-sm text-purple-300">
          ⚡ Takes 2 minutes to start • 21 days to transform
        </div>
      </div>
    </div>
  );
};

export default Landing;
