import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { Target, Brain, Trophy, Users, CheckCircle, Star, Lightbulb, RotateCcw, Zap, ArrowRight, Play, Gift } from 'lucide-react';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const animatedStats = [
    {
      value: "92%",
      label: "of people fail their goals",
      color: "text-red-400"
    },
    {
      value: "5x",
      label: "more likely to succeed with 1 goal",
      color: "text-emerald-400"
    },
    {
      value: "$67B+",
      label: "wellness/self-growth market",
      color: "text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left: Content */}
            <div className={`text-left max-w-3xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white font-medium">AI Powered One Goal System</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
                  <span className="gradient-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Do One
                  </span>
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
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
      </div>

      {/* How GRYT Works Section */}
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

      {/* Enhanced Value Proposition */}
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
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

      {/* Enhanced Stats Section */}
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

      {/* Enhanced Testimonial */}
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

      {/* Enhanced CTA Section */}
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
    </div>
  );
};

export default Landing;
