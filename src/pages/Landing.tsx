
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { Target, Brain, Trophy, Users, CheckCircle, Star } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            GRYT
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-purple-100 mb-8">
            Build Yourself. Do the Thing.
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            The AI-powered system that helps you achieve one meaningful goal at a time. 
            Transform your identity through consistent action and personalized coaching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/onboarding">
              <GradientButton size="lg" className="w-full sm:w-auto min-w-48">
                Start Your Transformation
              </GradientButton>
            </Link>
            <Link to="/dashboard">
              <GradientButton variant="outline" size="lg" className="w-full sm:w-auto min-w-48 border-purple-200 text-purple-100 hover:bg-purple-100 hover:text-purple-800">
                View Dashboard
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-sm border-y border-white/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">92%</div>
              <div className="text-purple-200">of people fail their goals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <div className="text-purple-200">goal at a time works</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">AI</div>
              <div className="text-purple-200">powered coaching</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Why GRYT Works</h3>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Built on research from behavioral psychology, gamification, and AI coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">One Goal Focus</h4>
            <p className="text-purple-200 text-sm">Choose one meaningful goal and commit fully</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">AI Coaching</h4>
            <p className="text-purple-200 text-sm">Personalized support that adapts to your mood</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">Gamified Progress</h4>
            <p className="text-purple-200 text-sm">Earn GRYT Points, build streaks, level up</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-white mb-2">Community</h4>
            <p className="text-purple-200 text-sm">Connect with others on similar journeys</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What People Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-purple-100 mb-4">"Finally, an app that gets it. One goal, real support, actual results."</p>
              <div className="text-purple-200 text-sm">— Sarah M.</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-purple-100 mb-4">"The AI coach feels like having a personal mentor. Game changer."</p>
              <div className="text-purple-200 text-sm">— Mike T.</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-purple-100 mb-4">"90-day streak and counting. GRYT helped me become who I wanted to be."</p>
              <div className="text-purple-200 text-sm">— Jessica L.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h3 className="text-4xl font-bold text-white mb-6">Ready to Build Yourself?</h3>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Join thousands of people who are transforming their lives, one goal at a time.
        </p>
        <Link to="/onboarding">
          <GradientButton size="lg" className="min-w-64">
            Start Your GRYT Journey
          </GradientButton>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
