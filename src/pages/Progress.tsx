
import React from 'react';
import StreakCounter from '@/components/ui/StreakCounter';
import XPBar from '@/components/ui/XPBar';
import { Trophy, Calendar, Target, Star, Award, TrendingUp } from 'lucide-react';

const Progress = () => {
  // Mock data - would come from backend
  const stats = {
    streak: 7,
    totalDays: 23,
    currentXP: 340,
    maxXP: 500,
    level: 3,
    totalJournalEntries: 18,
    averageMood: 4.2
  };

  const achievements = [
    { id: 1, title: 'First Week!', description: 'Completed 7 days in a row', icon: Calendar, earned: true },
    { id: 2, title: 'Journal Master', description: 'Write 10 journal entries', icon: Target, earned: true },
    { id: 3, title: 'Mood Tracker', description: 'Log mood for 14 days', icon: Star, earned: true },
    { id: 4, title: 'Level Up!', description: 'Reach Level 3', icon: TrendingUp, earned: true },
    { id: 5, title: 'Thirty Strong', description: 'Maintain 30-day streak', icon: Trophy, earned: false },
    { id: 6, title: 'GRYT Champion', description: 'Reach Level 5', icon: Award, earned: false }
  ];

  const weeklyProgress = [
    { day: 'Mon', completed: true, mood: 4 },
    { day: 'Tue', completed: true, mood: 5 },
    { day: 'Wed', completed: true, mood: 3 },
    { day: 'Thu', completed: true, mood: 4 },
    { day: 'Fri', completed: true, mood: 5 },
    { day: 'Sat', completed: true, mood: 4 },
    { day: 'Sun', completed: true, mood: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Progress</h1>
          <p className="text-gray-600">Look how far you've come!</p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StreakCounter streak={stats.streak} />
          <XPBar currentXP={stats.currentXP} maxXP={stats.maxXP} level={stats.level} />
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{stats.totalDays}</div>
            <div className="text-sm text-gray-600">Total Days</div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{stats.totalJournalEntries}</div>
            <div className="text-sm text-gray-600">Journal Entries</div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{stats.averageMood.toFixed(1)}</div>
            <div className="text-sm text-gray-600">Avg Mood</div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-pink-600 mb-1">{stats.level}</div>
            <div className="text-sm text-gray-600">Current Level</div>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">This Week's Progress</h3>
          <div className="grid grid-cols-7 gap-2">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-sm text-gray-600 mb-2">{day.day}</div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  day.completed 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {day.completed ? '✓' : '○'}
                </div>
                <div className="text-xs text-gray-500">
                  {day.completed ? `😊 ${day.mood}/5` : '—'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-xl border-2 ${
                    achievement.earned
                      ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      achievement.earned
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${
                        achievement.earned ? 'text-gray-800' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                        {achievement.earned && <span className="ml-2">🏆</span>}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
