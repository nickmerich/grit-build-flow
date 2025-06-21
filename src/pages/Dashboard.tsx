
import React, { useState, useEffect } from 'react';
import MoodTracker from '@/components/ui/MoodTracker';
import StreakCounter from '@/components/ui/StreakCounter';
import XPBar from '@/components/ui/XPBar';
import GradientButton from '@/components/ui/GradientButton';
import { Calendar, BookOpen, MessageSquare, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [currentMood, setCurrentMood] = useState(3);
  const [streak, setStreak] = useState(7);
  const [currentXP, setCurrentXP] = useState(340);
  const [level, setLevel] = useState(3);
  const maxXP = 500;

  // Mock daily prompt
  const dailyPrompt = "What's one small action you can take today toward your goal?";

  // Check if user has completed today's journal
  const hasJournaledToday = localStorage.getItem(`journal_${new Date().toDateString()}`);

  useEffect(() => {
    // Load user data from localStorage
    const savedStreak = localStorage.getItem('streak');
    const savedXP = localStorage.getItem('currentXP');
    const savedLevel = localStorage.getItem('level');
    
    if (savedStreak) setStreak(parseInt(savedStreak));
    if (savedXP) setCurrentXP(parseInt(savedXP));
    if (savedLevel) setLevel(parseInt(savedLevel));
  }, []);

  const handleMoodChange = (mood: number) => {
    setCurrentMood(mood);
    localStorage.setItem(`mood_${new Date().toDateString()}`, mood.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Good morning! 👋
          </h1>
          <p className="text-gray-600">
            Ready to build yourself today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StreakCounter streak={streak} />
          <XPBar currentXP={currentXP} maxXP={maxXP} level={level} />
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                <Target className="text-white" size={24} />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">1</div>
                <div className="text-sm text-gray-600 font-medium">Active Goal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mood Tracker */}
        <div className="mb-8">
          <MoodTracker mood={currentMood} onMoodChange={handleMoodChange} />
        </div>

        {/* Daily Prompt */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Calendar className="mr-2 text-slate-700" size={20} />
            Today's Reflection
          </h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            "{dailyPrompt}"
          </p>
          
          {hasJournaledToday ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-medium">✅ Journal completed for today!</p>
              <p className="text-green-600 text-sm mt-1">You earned 25 GRYT Points</p>
            </div>
          ) : (
            <Link to="/journal">
              <GradientButton className="w-full sm:w-auto">
                <BookOpen size={16} className="mr-2" />
                Write Journal Entry
              </GradientButton>
            </Link>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/coach" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">AI Coach</h3>
                  <p className="text-gray-600 text-sm">Get personalized encouragement</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/progress" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">View Progress</h3>
                  <p className="text-gray-600 text-sm">See your achievements</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
