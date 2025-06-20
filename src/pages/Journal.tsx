
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodTracker from '@/components/ui/MoodTracker';
import GradientButton from '@/components/ui/GradientButton';
import { BookOpen, Save, Sparkles } from 'lucide-react';

const Journal = () => {
  const [mood, setMood] = useState(3);
  const [journalEntry, setJournalEntry] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const prompts = [
    "What's one thing you did today that moved you closer to your goal?",
    "How did you handle challenges today?",
    "What are you grateful for right now?",
    "What would you tell your past self about today?",
    "How do you feel about your progress so far?"
  ];

  const dailyPrompt = prompts[new Date().getDate() % prompts.length];

  const handleSave = async () => {
    if (!journalEntry.trim()) return;

    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I can see you're putting in real effort, and that takes courage. Every small step you're taking is building the person you want to become. Keep showing up for yourself - you're doing better than you think! 💪",
        "Your commitment is inspiring. The fact that you're here, reflecting and growing, shows incredible strength. Remember, progress isn't always linear, but you're moving in the right direction. Trust the process! ✨",
        "I love seeing your dedication to this journey. The challenges you're facing are shaping you into someone stronger and more resilient. You have everything you need within you to succeed. Keep going! 🔥"
      ];
      
      setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
      setIsLoading(false);
      
      // Save to localStorage
      const today = new Date().toDateString();
      localStorage.setItem(`journal_${today}`, journalEntry);
      localStorage.setItem(`mood_${today}`, mood.toString());
      
      // Award points
      const currentXP = parseInt(localStorage.getItem('currentXP') || '0');
      localStorage.setItem('currentXP', (currentXP + 25).toString());
      
      // Update streak
      const currentStreak = parseInt(localStorage.getItem('streak') || '0');
      localStorage.setItem('streak', (currentStreak + 1).toString());
    }, 2000);
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daily Journal</h1>
          <p className="text-gray-600">Reflect on your progress and let AI coach guide you</p>
        </div>

        {/* Mood Tracker */}
        <div className="mb-8">
          <MoodTracker mood={mood} onMoodChange={setMood} />
        </div>

        {/* Journal Prompt */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Today's Reflection Prompt</h3>
          <p className="text-lg text-gray-700 italic">"{dailyPrompt}"</p>
        </div>

        {/* Journal Entry */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <label className="block font-semibold text-gray-800 mb-4">
            Your Thoughts
          </label>
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Write your thoughts, feelings, and reflections here. Be honest with yourself - this is your safe space to grow."
            className="w-full h-48 p-4 border border-gray-300 rounded-xl resize-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all"
          />
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              {journalEntry.length} characters
            </span>
            <GradientButton
              onClick={handleSave}
              disabled={!journalEntry.trim() || isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Getting AI Feedback...
                </>
              ) : (
                <>
                  <Save size={16} className="mr-2" />
                  Save & Get AI Feedback
                </>
              )}
            </GradientButton>
          </div>
        </div>

        {/* AI Response */}
        {aiResponse && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Sparkles className="text-white" size={16} />
              </div>
              <h3 className="font-semibold text-gray-800">Your AI Coach Says:</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{aiResponse}</p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-medium">🎉 +25 GRYT Points earned!</p>
              <p className="text-green-600 text-sm">Keep up the great work!</p>
            </div>
          </div>
        )}

        {/* Continue Button */}
        {aiResponse && (
          <div className="text-center">
            <GradientButton size="lg" onClick={handleContinue}>
              Continue to Dashboard
            </GradientButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
